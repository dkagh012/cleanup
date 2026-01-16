"use client";

import { memo } from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import SafeHTML from "@/components/common/SafeHTML";
import styles from "./ProblemSection.module.scss";

function ProblemSection() {
    const t = useTranslation();
    const icons = ["/main/danger.png", "/main/time.png", "/main/box.png"];

    return (
        <section id="service" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header} data-aos="fade-up">
                    <h2 className={styles.title}>{t.problem.title}</h2>
                    <SafeHTML
                        html={t.problem.subtitle}
                        className={styles.subtitle}
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
                                <Image
                                    src={icons[index]}
                                    alt={item.title}
                                    width={48}
                                    height={48}
                                    loading="lazy"
                                />
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <SafeHTML
                                html={item.description}
                                className={styles.cardDescription}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(ProblemSection);

