"use client"
import Link from "next/link"
import "./NavBar.css"
import { useEffect, useState } from "react"
import "./NavBar.css"
import Logo from "../Logo"

function NavBar() {
  const [os, setOs] = useState("")

  useEffect(() => {
    const userAgent = window.navigator.userAgent
    if (userAgent.includes("Win")) {
      setOs("Windows")
    } else if (userAgent.includes("Mac")) {
      setOs("MacOS")
    } else if (userAgent.includes("Linux")) {
      setOs("Linux")
    } else if (userAgent.includes("Android")) {
      setOs("Android")
    } else if (userAgent.includes("iOS")) {
      setOs("iOS")
    } else {
      setOs("Unknown")
    }
  }, [])

  return (
    <header className=" top-0 w-full h-auto print:hidden">
      <nav className="flex items-center px-8 justify-between border-b dark:border-b-white/30 ">
        <Logo />
        <ul className="flex justify-between items-center p-4 w-auto gap-3">
          <li>
            <div
              className="flex w-48 justify-between bg-neutral-900 rounded pl-2 py-1"
              onClick={() => console.log("Search")}
            >
              <span className="text-neutral-500">Serch...</span>
              {os === "MacOS" ? (
                <kbd className="bg-neutral-500/30 text-neutral-400/90 rounded-md px-1 scale-95">
                  Cmd + K
                </kbd>
              ) : (
                <kbd className="bg-neutral-500/30 text-neutral-400/90 rounded-md px-1 scale-75">
                  Ctrl + K
                </kbd>
              )}
            </div>
          </li>
          <li>
            <Link href="/curriculum">Curriculum</Link>
          </li>
          <li className="text-neutral-500  text-center">
            <Link className="flex gap-1" href="/blog">
              Blog
              <span className="border border-neutral-400 bg-neutral-500/10 rounded-full px-2 text-sm text-center">
                comming
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
