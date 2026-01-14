"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/constants/translations";
import styles from "./ProblemSection.module.scss";

export default function ProblemSection() {
    const { language } = useLanguage();
    const t = translations[language];
    const icons = ["/main/danger.png", "/main/time.png", "/main/box.png"];

    return (
        <section id="service" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header} data-aos="fade-up">
                    <h2 className={styles.title}>{t.problem.title}</h2>
                    <p
                        className={styles.subtitle}
                        dangerouslySetInnerHTML={{
                            __html: t.problem.subtitle,
                        }}
                    />
                </div>

                <div className={styles.cards}>
                    {t.problem.items.map((item, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className={styles.cardIcon}>
                                <img src={icons[index]} alt={item.title} />
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p
                                className={styles.cardDescription}
                                dangerouslySetInnerHTML={{
                                    __html: item.description,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

