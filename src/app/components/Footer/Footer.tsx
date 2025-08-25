import styles from "./Footer.module.scss";

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Lucas Massaroto. Feito com Next.js.</p>
      </div>
    </footer>
  );
}