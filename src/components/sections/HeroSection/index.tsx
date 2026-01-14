"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/constants/translations";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <video src="/main/main.mp4" autoPlay loop muted playsInline />
            </div>

            <div className={styles.container}>
                <div className={styles.content} data-aos="fade-up">
                    <h1 className={styles.title}>
                        <span
                            className={styles.titleLine1}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {t.hero.title[0]}
                        </span>
                        <span
                            className={styles.titleLine1}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {t.hero.title[1]}
                        </span>
                    </h1>

                    <Link
                        href="/estimate"
                        className={styles.ctaButton}
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        {t.hero.cta}
                    </Link>
                </div>
            </div>
        </section>
    );
}
