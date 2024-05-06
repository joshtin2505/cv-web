import KeyboardManager from "@/components/KeyboardManager"
import Hero from "@/components/curriculum/sections/Hero"

function page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
        <Hero />
      </main>
      <KeyboardManager />
    </>
  )
}

export default page
