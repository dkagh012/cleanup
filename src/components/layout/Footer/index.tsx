import styles from "./Footer.module.scss";
import logo from "@/app/images/logo.png";
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo.src} alt="GESUN" />
                </div>
                <div className={styles.info}>
                    <p>gesun@gmail.com</p>
                    <p>©2025 gesun</p>
                </div>
            </div>
        </footer>
    );
}
