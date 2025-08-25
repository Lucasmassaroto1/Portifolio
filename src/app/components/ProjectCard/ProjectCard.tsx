import styles from "./ProjectCard.module.scss";

type Props = { title: string; stack: string[]; href: string };

export default function ProjectCard({ title, stack, href }: Props){
  return(
    <a className={styles.card} href={href} target="_blank" rel="noreferrer">
      <h3>{title}</h3>
      <ul className={styles.stack}>
        {stack.map(s => <li key={s}>{s}</li>)}
      </ul>
    </a>
  );
}