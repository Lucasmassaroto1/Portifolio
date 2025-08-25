import Hero from '@/app/components/Hero/Hero';
import ProjectCard from '@/app/components/ProjectCard/ProjectCard';

const featured = [
  { title: "ProjetoGazinCRUD", stack: ["PHP", "PDO", "MySQL", "JavaScript"], href: "https://github.com/Lucasmassaroto1/ProjetoGazinCRUD"},
  { title: "Projetogazin", stack: ["html", "css"], href: "https://github.com/Lucasmassaroto1/Projetogazin"},
  { title: "Password-Generator", stack: ["html", "css", "JavaScript"], href: "https://github.com/Lucasmassaroto1/Password-Generator"},
]

export default function HomePage(){
  return(
    <>
      <Hero/>
      <section aria-labelledby='destaques' style={{ marginTop: 32 }}>
        <h2 id='destaques'>Destaques</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {featured.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </section>
    </>
  )
}