import Section from "../Section"
import { skills } from "@/mocks/cv.json"
function Skills() {
  return (
    <Section title="Habilidades">
      <ul className="inline-flex flex-wrap justify-center gap-1">
        {skills.map((skill, i) => (
          <li
            className="rounded-lg dark:bg-neutral-800 font-medium px-2"
            key={i}
          >
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Skills
