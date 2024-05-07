import KeyboardManager from "@/components/KeyboardManager"
import About from "@/components/curriculum/sections/About"
import Education from "@/components/curriculum/sections/Education"
import Experience from "@/components/curriculum/sections/Experience"
import Hero from "@/components/curriculum/sections/Hero"
import Projects from "@/components/curriculum/sections/Projects"
import Skills from "@/components/curriculum/sections/Skills"

function page() {
  return (
    <>
      <main className=" min-h-screen p-24 relative">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </main>
      <KeyboardManager />
    </>
  )
}

export default page
