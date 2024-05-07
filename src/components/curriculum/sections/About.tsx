import Section from "../Section"
import { basics } from "@/mocks/cv.json"

function About() {
  const { summary } = basics
  return (
    <Section title="Sobre Mí">
      <p className="text-pretty">{summary}</p>
    </Section>
  )
}

export default About
