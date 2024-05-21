import Link from "next/link"
import { FaCode } from "react-icons/fa6"
import "./Logo.css"

function Logo() {
  return (
    <Link
      href="/#hero"
      className="logo cursor-pointer text-2xl font-mono flex items-center gap-1 font-semibold"
    >
      <FaCode className="text-red-400" />
      <span className="titleLogo">Joshtin.Dev</span>
    </Link>
  )
}

export default Logo
