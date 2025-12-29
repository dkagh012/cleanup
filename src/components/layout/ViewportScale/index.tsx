"use client";

import { useEffect, useRef } from "react";

export default function ViewportScale({
    children,
}: {
    children: React.ReactNode;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const setView = () => {
            if (!containerRef.current || !wrapperRef.current) return;

            const width = window.innerWidth;
            const baseWidth = 1280;

            // 너비 기준으로 스케일 계산
            const newScale = width / baseWidth;

            // 스케일 적용
            containerRef.current.style.transform = `scale(${newScale})`;
            containerRef.current.style.transformOrigin = "top center";
            containerRef.current.style.width = `${baseWidth}px`;

            // CSS 변수로 스케일 값 전달
            document.documentElement.style.setProperty(
                "--viewport-scale",
                String(newScale)
            );

            // 스케일된 컨텐츠의 실제 높이 계산
            const contentHeight = containerRef.current.scrollHeight;
            const scaledHeight = contentHeight * newScale;

            // wrapper 높이를 스케일된 컨텐츠 높이에 맞춤
            wrapperRef.current.style.height = `${scaledHeight}px`;
        };

        const debounceSetView = () => {
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            resizeTimeoutRef.current = setTimeout(() => {
                setView();
            }, 100);
        };

        // 초기 설정
        setView();

        // 리사이즈 이벤트 리스너
        window.addEventListener("resize", debounceSetView);
        window.addEventListener("orientationchange", debounceSetView);

        // 컨텐츠 변경 감지를 위한 MutationObserver
        const observer = new MutationObserver(() => {
            setView();
        });

        if (containerRef.current) {
            observer.observe(containerRef.current, {
                childList: true,
                subtree: true,
                attributes: true,
            });
        }

        return () => {
            window.removeEventListener("resize", debounceSetView);
            window.removeEventListener("orientationchange", debounceSetView);
            observer.disconnect();
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            style={{
                width: "100vw",
                overflow: "auto",
                position: "relative",
            }}
        >
            <div ref={containerRef} style={{ margin: "0 auto" }}>
                {children}
            </div>
        </div>
    );
}
