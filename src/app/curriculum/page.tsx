import KeyboardManager from "@/components/KeyboardManager"
import Basic from "@/components/Layouts/BasicLayout"
import About from "@/components/curriculum/sections/About"
import Education from "@/components/curriculum/sections/Education"
import Experience from "@/components/curriculum/sections/Experience"
import Hero from "@/components/curriculum/sections/Hero"
import Projects from "@/components/curriculum/sections/Projects"
import Skills from "@/components/curriculum/sections/Skills"

function page() {
  return (
    <>
      <Basic className="p-24 pt-10 print:py-0 relative ">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </Basic>
      <KeyboardManager />
    </>
  )
}

export default page
