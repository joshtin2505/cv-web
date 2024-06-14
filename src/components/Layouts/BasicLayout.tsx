import type { ReactNode } from "react"
import NavBar from "../nav/NavBar"

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
    </>
  )
}

export default Basic
