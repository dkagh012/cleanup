import Link from 'next/link';
import { HERO_CONTENT } from '@/constants/content';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <video src="/main/main.mp4" autoPlay loop muted playsInline />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleLine1}>{HERO_CONTENT.title[0]}</span>
            <span className={styles.titleLine1}>{HERO_CONTENT.title[1]}</span>
          </h1>

          <p 
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: HERO_CONTENT.description }}
          />

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

