import style from './Hero.module.scss';

export default function Hero(){
  return(
    <section className={style.hero}>
      <div className={style.texts}>
        <h1>Lucas Massaroto</h1>
        <p>Dev Full-stack, Curto React, Nextjs, Node e boas interfaces. Veja meus projetos e fale comigo.</p>
        <div className={style.cta}>
          <a href="/projetos" className={style.primary}>Ver Projetos</a>
          <a href="/contato" className={style.ghost}>Contato</a>
        </div>
      </div>
      <div className={style.imgHero}>
        <img src="https://avatars.githubusercontent.com/u/102060111?s=400&u=f52c92d645aa94b9d6e9d2154cb979c1c1101795&v=4" alt=""/>
      </div>
    </section>
  )
}