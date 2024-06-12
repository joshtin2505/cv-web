import cvMock from "@/mocks/cv.json"
import CardProject from "../ui/CardProject"
function ProjectsPortfolio() {
  const { projects } = cvMock
  return (
    <section className="flex gap-2">
      {projects.length !== 0 ? (
        projects.map((project) => {
          return <CardProject key={project.name} project={project} />
        })
      ) : (
        <div>
          <h1>No projects</h1>
        </div>
      )}
    </section>
  )
}
export default ProjectsPortfolio
