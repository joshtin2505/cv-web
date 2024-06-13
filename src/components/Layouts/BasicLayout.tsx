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
      <main className={"mt-[70px] print:mt-0" + className}>{children}</main>
    </>
  )
}

export default Basic
