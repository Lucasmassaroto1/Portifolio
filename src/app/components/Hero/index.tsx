"use client";
import styles from "./Hero.module.scss";
// import Dock from "@/lib/reactbits/Dock"; 

export default function Hero(){
  return(
    <section className={styles.hero}>
      <div className={styles.texts}>
        <h1>Olá, eu sou o Lucas 👋</h1>
        <p>Dev full-stack. Curto React, Next, Node e boas interfaces. Veja meus projetos e fale comigo.</p>
        <div className={styles.cta}>
          <a href="/projetos" className={styles.primary}>Ver projetos</a>
          <a href="/contato" className={styles.ghost}>Falar comigo</a>
        </div>
      </div>

      {/* <Dock
        items={[
          { label: "GitHub", href: "https://github.com/LucasMassaroto1" },
          { label: "LinkedIn", href: "https://linkedin.com/in/..." },
          { label: "X", href: "https://x.com/..." },
        ]}
      /> */}
    </section>
  );
}