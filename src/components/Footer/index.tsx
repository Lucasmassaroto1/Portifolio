import style from './Footer.module.scss';

export default function Footer(){
  const year = new Date().getFullYear();
  return(
    <footer className={style.footer}>
      <div className="container">
        <p>&copy; {year} Lucas Massaroto, todos os direitos reservados.</p>
      </div>
    </footer>
  );
}