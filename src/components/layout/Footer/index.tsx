import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <p>Logo</p>
                </div>
                <div className={styles.info}>
                    <p>asdlkjasd@gmail.com</p>
                    <p>©2025 플랫폼 명</p>
                </div>
            </div>
        </footer>
    );
}
