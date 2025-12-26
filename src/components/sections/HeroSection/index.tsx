import Link from "next/link";
import { HERO_CONTENT } from "@/constants/content";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <video src="/main/main.mp4" autoPlay loop muted playsInline />
            </div>

            <div className={styles.container}>
                <div className={styles.content} data-aos="fade-up">
                    <h1 className={styles.title}>
                        <span
                            className={styles.titleLine1}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {HERO_CONTENT.title[0]}
                        </span>
                        <span
                            className={styles.titleLine1}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {HERO_CONTENT.title[1]}
                        </span>
                    </h1>

                    <Link
                        href={HERO_CONTENT.cta.href}
                        className={styles.ctaButton}
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        {HERO_CONTENT.cta.label}
                    </Link>
                </div>
            </div>
        </section>
    );
}
