import Image from "next/image"
import React from "react"
import Logo from "../Logo"
import { basics } from "@/mocks/cv.json"
function HomeHero() {
  return (
    <section className="w-full">
      <div className="">
        <Logo />
        <Image
          className="rounded-full"
          src={basics.image}
          alt="johstn.dev"
          width={168}
          height={168}
        />
      </div>
    </section>
  )
}

export default HomeHero
