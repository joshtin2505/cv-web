import Image from "next/image"
import React from "react"
import { basics } from "@/mocks/cv.json"
import "./HomeHero.css"

function HomeHero() {
  return (
    <section className="w-full p-x-20 flex items-center justify-around">
      <div className="flex flex-col items-start justify-center gap-3 w-[400px]">
        <h1 className="text-6xl">Hey Here!</h1>
        <h2 className="text-5xl font-semibold font-mono name ">
          I'm
          <span className="rainbow"> Joshtin.dev</span>
        </h2>
      </div>
      <div className="">
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
