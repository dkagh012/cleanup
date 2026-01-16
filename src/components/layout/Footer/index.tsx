"use client";

import { memo } from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./Footer.module.scss";
import logo from "@/app/images/logo.png";

function Footer() {
    const t = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image
                        src={logo}
                        alt="GESUN"
                        width={120}
                        height={40}
                        loading="lazy"
                    />
                </div>
                <div className={styles.info}>
                    <p>{t.footer.email}</p>
                    <p>{t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);
