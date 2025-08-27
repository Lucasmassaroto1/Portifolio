import style from './Footer.module.scss';

export default function Footer(){
  return(
    <footer className={style.footer}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Lucas Massaroto, todos os direitos reservados.</p>
      </div>
    </footer>
  );
}