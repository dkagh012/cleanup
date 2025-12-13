import { PROBLEM_SECTION } from '@/constants/content';
import styles from './ProblemSection.module.scss';

export default function ProblemSection() {
  return (
    <section id="service" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{PROBLEM_SECTION.title}</h2>
          <p className={styles.subtitle}>{PROBLEM_SECTION.subtitle}</p>
        </div>

        <div className={styles.cards}>
          {PROBLEM_SECTION.items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

