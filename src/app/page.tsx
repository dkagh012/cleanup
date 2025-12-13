import HeroSection from '@/sections/HeroSection';
import ProblemSection from '@/sections/ProblemSection';
import ProcessSection from '@/sections/ProcessSection';
import FAQSection from '@/sections/FAQSection';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <FAQSection />
    </div>
  );
}
