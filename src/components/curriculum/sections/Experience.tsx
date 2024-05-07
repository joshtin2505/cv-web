import React from "react"
import Section from "../Section"

function Experience() {
  return (
    <Section title="Experiencia">
      {/* <ul>
        {work.map(({name, startDate, endDate, position, summary}) => {
            const startYear = new Date(startDate).getFullYear()
            const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual" 
            const years = `${startYear} - ${endYear}`  
            return (
                <li>
                    <article>
                        <header>
                            <div>
                                <h3>{name}</h3>
                                <h4>{position}</h4>
                            </div>
                            <time datetime="">{years}</time>
                        </header>
                        <footer>
                            <p>{summary}</p>
                        </footer>
                    </article>
                </li>
            )
        })}
    </ul> */}
      <h4>Actualmente no cuento con experiencia laboral. </h4>
    </Section>
  )
}

export default Experience
