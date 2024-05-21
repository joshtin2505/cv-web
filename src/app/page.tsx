import KeyboardManager from "@/components/KeyboardManager"
import HomeHero from "@/components/home/HomeHero"

export default function Home() {
  return (
    <>
      <div className="">
        <main className="min-h-screen p-24">
          <HomeHero />
        </main>
        <aside></aside>
      </div>
      <KeyboardManager />
    </>
  )
}
