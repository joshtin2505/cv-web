import KeyboardManager from "@/components/KeyboardManager"
import Hero from "@/components/curriculum/sections/Hero"
import NavBar from "@/components/nav/NavBar"

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="">
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Hero />
        </main>
        <aside></aside>
      </div>
      <KeyboardManager />
    </>
  )
}
