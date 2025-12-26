import Link from "next/link";
import { PROCESS_SECTION, HERO_CONTENT } from "@/constants/content";
import styles from "./ProcessSection.module.scss";

export default function ProcessSection() {
    return (
        <section id="process" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header} data-aos="fade-up">
                    <div>
                        <h2 className={styles.title}>
                            {PROCESS_SECTION.title}
                        </h2>
                        <p className={styles.subtitle}>
                            {PROCESS_SECTION.subtitle}
                        </p>
                    </div>
                    <div className={styles.cta} data-aos="fade-up">
                        <Link
                            href={HERO_CONTENT.cta.href}
                            className={styles.ctaButton}
                        >
                            {HERO_CONTENT.cta.label}
                        </Link>
                    </div>
                </div>

                <div className={styles.steps}>
                    {PROCESS_SECTION.steps.map((step, index) => (
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
