import KeyboardManager from "@/components/KeyboardManager"
import HomeHero from "@/components/home/HomeHero"
import ProjectsPortfolio from "@/components/portfolio/Project"

export default function Home() {
  return (
    <>
      <div className="">
        <main className="min-h-screen p-24">
          <HomeHero />
          <ProjectsPortfolio />
        </main>
        <aside></aside>
      </div>
      <KeyboardManager />
    </>
  )
}
