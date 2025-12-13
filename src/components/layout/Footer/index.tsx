import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>VibeCoding</h3>
            <p className={styles.brandDescription}>
              개발자 친화적인 서비스로 더 나은 코딩 경험을 제공합니다.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>서비스</h4>
              <Link href="#service" className={styles.link}>
                소개
              </Link>
              <Link href="#process" className={styles.link}>
                진행 과정
              </Link>
              <Link href="/estimate" className={styles.link}>
                견적 요청
              </Link>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>리소스</h4>
              <a href="#" className={styles.link}>
                문서
              </a>
              <a href="#" className={styles.link}>
                블로그
              </a>
              <a href="#" className={styles.link}>
                지원
              </a>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>연결</h4>
              <a href="#" className={styles.link}>
                GitHub
              </a>
              <a href="#" className={styles.link}>
                Twitter
              </a>
              <a href="#" className={styles.link}>
                이메일
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} VibeCoding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

