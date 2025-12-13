import { PROBLEM_SECTION } from '@/constants/content';
import styles from './ProblemSection.module.scss';

export default function ProblemSection() {
  return (
    <section id="service" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header} data-aos="fade-up">
          <h2 className={styles.title}>{PROBLEM_SECTION.title}</h2>
          <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: PROBLEM_SECTION.subtitle }} />
        </div>

        <div className={styles.cards}>
          {PROBLEM_SECTION.items.map((item, index) => (
            <div 
              key={index} 
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.cardIcon}><img src={item.icon} alt={item.title} /></div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription} dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

