import KeyboardManager from "@/components/KeyboardManager"
import Hero from "@/components/curriculum/sections/Hero"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
      </main>
      <KeyboardManager />
    </>
  )
}
