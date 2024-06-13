import Section from "../Section"
import cvJson from "@/mocks/cv.json"

function About() {
  const { basics } = cvJson
  const { summary } = basics
  return (
    <Section title="Sobre Mí">
      <p className="text-pretty">{summary}</p>
    </Section>
  )
}

export default About
