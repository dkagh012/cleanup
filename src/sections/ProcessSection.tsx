import Link from 'next/link';
import { PROCESS_SECTION, HERO_CONTENT } from '@/constants/content';
import styles from './ProcessSection.module.scss';

export default function ProcessSection() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{PROCESS_SECTION.title}</h2>
          <p className={styles.subtitle}>{PROCESS_SECTION.subtitle}</p>
        </div>

        <div className={styles.steps}>
          {PROCESS_SECTION.steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href={HERO_CONTENT.cta.href} className={styles.ctaButton}>
            {HERO_CONTENT.cta.label}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

