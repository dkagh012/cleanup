"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import logo from "@/app/images/logo.png";
import LanguageSelector from "../LanguageSelector";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 스크롤 위치에 따라 backdrop-filter와 background 표시 여부 결정
            setIsScrolled(currentScrollY > 10);

            // 상단으로 스크롤할 때 (스크롤 위치가 줄어들 때)
            if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            // 하단으로 스크롤할 때 (스크롤 위치가 늘어날 때)
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`${styles.header} ${isVisible ? styles.visible : styles.hidden} ${isScrolled ? styles.scrolled : ""}`}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <img src={logo.src} alt="GESUN" />
                </Link>
                <div className={styles.rightSection}>
                    <LanguageSelector />
                </div>
            </div>
        </header>
    );
}
