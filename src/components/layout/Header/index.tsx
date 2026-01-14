"use client";

import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo.png";
import LanguageSelector from "../LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/constants/translations";

export default function Header() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <header className={styles.header}>
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
