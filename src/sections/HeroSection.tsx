import Link from 'next/link';
import { HERO_CONTENT } from '@/constants/content';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleLine1}>{HERO_CONTENT.title[0]}</span>
            <span className={styles.titleLine2}>{HERO_CONTENT.title[1]}</span>
          </h1>

          <p className={styles.description}>{HERO_CONTENT.description}</p>

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

