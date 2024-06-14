import type { ReactNode } from "react"
import NavBar from "../nav/NavBar"
import Footer from "../Footer"

function Basic({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return (
    <>
      <NavBar />
      <main className={" " + className}>{children}</main>
      <Footer />
    </>
  )
}

export default Basic
