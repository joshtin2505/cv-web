import KeyboardManager from "@/components/KeyboardManager"
import Basic from "@/components/Layouts/BaisicLayout"
import HomeHero from "@/components/home/HomeHero"
import ProjectsPortfolio from "@/components/portfolio/Project"

export default function Home() {
  return (
    <>
      <Basic>
        <HomeHero />
        <ProjectsPortfolio />
      </Basic>
      <KeyboardManager />
    </>
  )
}
