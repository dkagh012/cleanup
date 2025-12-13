'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_ITEMS } from '@/constants/nav';
import { cn } from '@/utils/cn';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>VibeCoding</span>
        </Link>

        <nav className={cn(styles.nav, isMenuOpen && styles.navOpen)}>
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={styles.navLink}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/estimate"
            className={styles.ctaButton}
            onClick={handleNavClick}
          >
            견적 요청
          </Link>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 토글"
          aria-expanded={isMenuOpen}
        >
          <span className={cn(styles.menuIcon, isMenuOpen && styles.menuIconOpen)}></span>
        </button>
      </div>
    </header>
  );
}

