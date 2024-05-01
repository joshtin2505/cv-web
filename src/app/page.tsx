import KeyboardManager from "@/components/KeyboardManager"
import HomeHero from "@/components/home/HomeHero"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HomeHero />
      </main>
      <KeyboardManager />
    </>
  )
}
