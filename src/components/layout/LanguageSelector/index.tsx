"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./LanguageSelector.module.scss";

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.languageSelector}>
            <button
                type="button"
                className={`${styles.languageButton} ${language === "ko" ? styles.languageButtonActive : ""}`}
                onClick={() => setLanguage("ko")}
            >
                한국어
            </button>
            <span className={styles.separator}>|</span>
            <button
                type="button"
                className={`${styles.languageButton} ${language === "en" ? styles.languageButtonActive : ""}`}
                onClick={() => setLanguage("en")}
            >
                EN
            </button>
            <span className={styles.separator}>|</span>
            <button
                type="button"
                className={`${styles.languageButton} ${language === "ja" ? styles.languageButtonActive : ""}`}
                onClick={() => setLanguage("ja")}
            >
                日本語
            </button>
        </div>
    );
}

