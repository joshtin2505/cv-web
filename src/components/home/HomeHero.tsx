import Image from "next/image"
import React from "react"
import { basics } from "@/mocks/cv.json"
import "./HomeHero.css"

function HomeHero() {
  return (
    <section className="w-full px-28 h-[90vh] mt-[10vh]">
      <header className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-3 w-[400px]">
          <h1 className="text-6xl ">Hey Here!</h1>
          <h2 className="text-5xl font-semibold font-mono name ">
            I&apos;m
            <span className="rainbow"> Joshtin.dev</span>
          </h2>
        </div>
        <div className="">
          <Image
            className="rounded-md aspect-square w-40"
            src={basics.image}
            alt="johstn.dev"
            width={1000}
            height={1000}
          />
        </div>
      </header>
      <footer className="w-full z-0">
        <h4 className="text-xl font-normal font-mono tracking-wide opacity-50 ">
          {basics.label}
        </h4>
      </footer>
    </section>
  )
}

export default HomeHero
