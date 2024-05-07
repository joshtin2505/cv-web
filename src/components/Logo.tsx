import Link from "next/link"

function Logo() {
  return (
    <Link href="/#hero" className="logo cursor-pointer">
      <h3 className="text-2xl font-mono hover:underline underline-offset-4">
        Joshtin.Dev
      </h3>
    </Link>
  )
}

export default Logo
