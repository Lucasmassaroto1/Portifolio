"use client"
import style from './Header.module.scss';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  // { href: "/sobre", label: "Sobre" },
];

export default function Header(){
  const pathname = usePathname();
  return(
    <header className={style.header}>
      <div className="container">
        <nav className={style.nav}>
          <span className={style.brand}>Lucas Massaroto</span>
          <ul>
            {links.map(l =>(
              <li key={l.href} data-active={pathname === l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}