import Link from "next/link"
import Section from "../Section"
import { projects } from "@/mocks/cv.json"
function Projects() {
  return (
    <Section title="Proyectos">
      <ul className="grid grid-template-colums-auto-fill gap-1">
        {projects.map(({ description, highlights, name, url, isActive }) => (
          <li key={name}>
            <article className="flex flex-col p-4 rounded-md border dark:border-neutral-600 gap-4 h-full">
              <header className="flex-1">
                <h3 className="mb-2 flex gap-1">
                  <Link
                    className="text-neutral-100 hover:underline hover:text-neutral-300"
                    href={url}
                    title={`Ver el proyecto ${name}`}
                  >
                    {name}
                  </Link>
                  {isActive && <span className="scale-150"> &#8226; </span>}
                </h3>
                <p>{description}</p>
              </header>
              <footer>
                {highlights.map((highlight) => {
                  return <span key={highlight}>{highlight}</span>
                })}
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects
