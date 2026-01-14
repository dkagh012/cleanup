"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/constants/translations";
import { cn } from "@/utils/cn";
import styles from "./FAQSection.module.scss";

export default function FAQSection() {
    const { language } = useLanguage();
    const t = translations[language];
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className={styles.section} data-aos="fade-up">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>FAQ</h2>
                </div>

                <div className={styles.faqList}>
                    {t.faq.items.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                styles.faqItem,
                                openIndex === index && styles.faqItemOpen
                            )}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{item.question}</span>
                                <svg
                                    className={cn(
                                        styles.chevron,
                                        openIndex === index &&
                                            styles.chevronOpen
                                    )}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 7.5L10 12.5L15 7.5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <div
                                className={cn(
                                    styles.faqAnswer,
                                    openIndex === index && styles.faqAnswerOpen
                                )}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div>
                                    <img
                                        src="/main/corner-down-right.png"
                                        alt="faq"
                                    />
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item.answer
                                            .split("\n")
                                            .map((line) => {
                                                const trimmed = line.trim();
                                                if (trimmed.startsWith("•")) {
                                                    return `<p class="bulletPoint">${trimmed}</p>`;
                                                }
                                                if (/^\d+\./.test(trimmed)) {
                                                    return `<p class="numberedPoint">${trimmed}</p>`;
                                                }
                                                if (trimmed === "") {
                                                    return "";
                                                }
                                                return `<p>${trimmed}</p>`;
                                            })
                                            .filter((html) => html !== "")
                                            .join(""),
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
