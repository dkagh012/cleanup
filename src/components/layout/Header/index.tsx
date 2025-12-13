'use client';

import styles from './Header.module.scss';
import Link from 'next/link';
export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>   
        LOGO
        </Link>
        <Link href="/estimate" className={styles.link}>
        견적 요청
        </Link>
      </div>
    </header>
  );
}

