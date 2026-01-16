"use client";

import { memo } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./ProcessSection.module.scss";

function ProcessSection() {
    const t = useTranslation();

    return (
        <section id="process" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header} data-aos="fade-up">
                    <div>
                        <h2 className={styles.title}>{t.process.title}</h2>
                        <p className={styles.subtitle}>
                            {t.process.subtitle}
                        </p>
                    </div>
                    <div className={styles.cta} data-aos="fade-up">
                        <Link href="/estimate" className={styles.ctaButton}>
                            {t.hero.cta}
                        </Link>
                    </div>
                </div>

                <div className={styles.steps}>
                    {t.process.steps.map((step, index) => (
                        <div
                            key={index}
                            className={styles.step}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className={styles.stepNumber}>
                                {step.number}
                            </div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>
                                    {step.title}
                                </h3>
                                <p className={styles.stepDescription}>
                                    {step.description}
                                </p>
                                {step.details && (
                                    <p className={styles.stepDetails}>
                                        {step.details}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(ProcessSection);
