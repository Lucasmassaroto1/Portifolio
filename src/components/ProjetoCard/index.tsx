import style from './ProjetoCard.module.scss';

type Props = { title: string; stack: string[]; href: string};

export default function ProjetoCard({ title, stack, href }: Props){
  return(
    <a href={href} className={style.card} target="_blank" rel="noreferrer">
      <h3>{title}</h3>
      <ul className={style.stack}>
        {stack.map(s => <li key={s}>{s}</li>)}
      </ul>
    </a>
  )
}