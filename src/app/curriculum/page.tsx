import KeyboardManager from "@/components/KeyboardManager"
import About from "@/components/curriculum/sections/About"
import Experience from "@/components/curriculum/sections/Experience"
import Hero from "@/components/curriculum/sections/Hero"
import Projects from "@/components/curriculum/sections/Projects"
import Skills from "@/components/curriculum/sections/Skills"

function page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <KeyboardManager />
    </>
  )
}

export default page
