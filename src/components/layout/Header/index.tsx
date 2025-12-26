"use client";

import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo.png";
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <img src={logo.src} alt="GESUN" />
                </Link>
                <Link href="/estimate" className={styles.link}>
                    클린업 견적 요청
                </Link>
            </div>
        </header>
    );
}
