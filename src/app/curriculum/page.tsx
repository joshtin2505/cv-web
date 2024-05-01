import KeyboardManager from "@/components/KeyboardManager"
import Hero from "@/components/curriculum/sections/Hero"

function page() {
  return (
    <>
      <main className="p-4 m-auto w-full relative">
        <Hero />
      </main>
      <KeyboardManager />
    </>
  )
}

export default page
