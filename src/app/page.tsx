import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/components/Hero";
import ProjetoCard from "@/components/ProjetoCard";

type Project = { title: string; stack: string[]; href: string};

const projects: Project[] = [
  { title: "ProjetoGazinCRUD", stack: ["PHP", "PDO", "MySQL", "JavaScript"], href: "https://github.com/Lucasmassaroto1/ProjetoGazinCRUD"},
  { title: "Projetogazin", stack: ["html", "css"], href: "https://github.com/Lucasmassaroto1/Projetogazin"},
  { title: "Password-Generator", stack: ["html", "css", "JavaScript"], href: "https://github.com/Lucasmassaroto1/Password-Generator"},
  // { title: "", stack: [""], href: ""},
];

export default function Home(){
  return(
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero/>
        <section>
          <h2>Projetos em destaque</h2>
          <div className={styles.cards}>
          {projects.map((p) => <ProjetoCard key={p.title} {...p}/>)}
          </div>
        </section>
      </main>
    </div>
  );
}
