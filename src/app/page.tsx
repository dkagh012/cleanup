import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FAQSection from '@/components/sections/FAQSection';
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
