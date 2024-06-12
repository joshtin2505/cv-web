import type { ReactNode } from "react"
import NavBar from "../nav/NavBar"

function Basic({ children }: { children?: ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="mt-[70px]">{children}</main>
    </>
  )
}

export default Basic
