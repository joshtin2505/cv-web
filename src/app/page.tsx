import KeyboardManager from "@/components/KeyboardManager"
import Basic from "@/components/Layouts/BasicLayout"
import HomeHero from "@/components/home/HomeHero"
import ToolsIUse from "@/components/home/ToolsIUse"
import ProjectsPortfolio from "@/components/home/Project"

export default function Home() {
  return (
    <>
      <Basic>
        <HomeHero />
        <ToolsIUse />
        <ProjectsPortfolio />
      </Basic>
      <KeyboardManager />
    </>
  )
}
