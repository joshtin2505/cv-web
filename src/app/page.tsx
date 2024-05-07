import KeyboardManager from "@/components/KeyboardManager"
import Hero from "@/components/curriculum/sections/Hero"

export default function Home() {
  return (
    <>
      <div className="">
        <main className="min-h-screen p-24">
          <Hero />
        </main>
        <aside></aside>
      </div>
      <KeyboardManager />
    </>
  )
}
