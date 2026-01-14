"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/constants/translations";
import styles from "./Footer.module.scss";
import logo from "@/app/images/logo.png";

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo.src} alt="GESUN" />
                </div>
                <div className={styles.info}>
                    <p>{t.footer.email}</p>
                    <p>{t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
