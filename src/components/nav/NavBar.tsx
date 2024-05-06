import Link from "next/link"
import "./NavBar.css"
function NavBar() {
  return (
    <header className="absolute top-0 w-full h-auto print:hidden">
      <nav className="flex items-center px-8 justify-between border-b dark:border-b-white/30 ">
        <Link href="/#hero" className="logo ">
          <h3 className="text-2xl font-mono hover:underline underline-offset-4">
            Joshtin.Dev
          </h3>
        </Link>
        <ul className="flex justify-between items-center p-4 w-auto gap-3">
          <li>
            <Link href="/curriculum">Curriculum</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
