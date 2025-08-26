import ProjectCard from "@/app/components/ProjectCard";

export const metadata = {
  title: "Projetos — Lucas Massaroto",
  description: "Seleção de projetos com stack e links.",
};

type Project = { title: string; stack: string[]; href: string };

const projects: Project[] = [
  { title: "ProjetoGazinCRUD", stack: ["PHP", "PDO", "MySQL", "JavaScript"], href: "https://github.com/Lucasmassaroto1/ProjetoGazinCRUD"},
  { title: "Projetogazin", stack: ["html", "css"], href: "https://github.com/Lucasmassaroto1/Projetogazin"},
  { title: "Password-Generator", stack: ["html", "css", "JavaScript"], href: "https://github.com/Lucasmassaroto1/Password-Generator"},
];

export default function ProjetosPage() {
  return (
    <>
      <h1>Projetos</h1>
      <p>Seleção dos projetos que mais representam meu trabalho.</p>

      <div style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        marginTop: 16
      }}>
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </>
  );
}