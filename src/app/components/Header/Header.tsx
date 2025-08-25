"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

const links =[
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header(){
  const pathname = usePathname();
  return(
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <span className={styles.brand}>Lucas.dev</span>
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
