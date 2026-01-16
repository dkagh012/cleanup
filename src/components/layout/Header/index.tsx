"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import logo from "@/app/images/logo.png";
import LanguageSelector from "../LanguageSelector";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    // 스크롤 위치에 따라 backdrop-filter와 background 표시 여부 결정
                    setIsScrolled(currentScrollY > 10);

                    // 상단으로 스크롤할 때 (스크롤 위치가 줄어들 때)
                    if (currentScrollY < lastScrollY.current) {
                        setIsVisible(true);
                    }
                    // 하단으로 스크롤할 때 (스크롤 위치가 늘어날 때)
                    else if (
                        currentScrollY > lastScrollY.current &&
                        currentScrollY > 100
                    ) {
                        setIsVisible(false);
                    }

                    lastScrollY.current = currentScrollY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${styles.header} ${isVisible ? styles.visible : styles.hidden} ${isScrolled ? styles.scrolled : ""}`}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src={logo}
                        alt="GESUN"
                        width={120}
                        height={40}
                        priority
                    />
                </Link>
                <div className={styles.rightSection}>
                    <LanguageSelector />
                </div>
            </div>
        </header>
    );
}
