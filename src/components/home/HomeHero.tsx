import Image from "next/image"
import React from "react"
import cvJson from "@/mocks/cv.json"
import "./HomeHero.css"
import { FaEnvelope, FaGithub, FaLinkedinIn, FaNpm } from "react-icons/fa6"
import Link from "next/link"

function HomeHero() {
  const { basics } = cvJson
  return (
    <section
      style={{ minHeight: "calc(100dvh - 69px)" }}
      className="w-full max-w-5xl mx-auto lg:px-0 px-5 py-8"
    >
      <div className="md:block flex flex-col items-center">
        <header className="flex items-center md:justify-between justify-center">
          <div className="flex flex-col items-start justify-center gap-3 w-[400px]">
            <h1 className="text-6xl font-mono tracking-tighter ">Hey Here!</h1>
            <h2 className="text-5xl font-semibold font-mono name ">
              I&apos;m
              <span className="rainbow"> Joshtin.dev</span>
            </h2>
          </div>
          <figure className="h-full flex justify-center">
            <Image
              className="rounded-md aspect-square w-44 object-cover hidden md:block"
              src={basics.image}
              alt="johstn.dev"
              width={1000}
              height={1000}
              loading="eager"
            />
          </figure>
        </header>
        <footer className="md:w-full z-0 flex md:justify-between justify-center items-center mt-1 flex-col md:flex-row">
          <h4 className="md:text-xl text-lg font-normal font-mono tracking-wide opacity-50 text-pretty">
            {basics.label}
          </h4>
          {/* sI CAMBIAS EL  ORDEN DEL JSON PUEDES CAUSAR UN ERROR EN EL DIRECCIONAMIENTTO, CORRIGE ESO */}
          <ul className=" flex w-44 md:mt-0 mt-2 md:opacity-100 opacity-80 justify-around">
            <li>
              <a
                href={`mailto:${basics.email}`}
                className=" h-7 w-7 transition-all hover:boder-2 dark:hover:text-white/70 dark:text-white dark:bg-neutral-800/50 dark:hover:bg-neutral-500/20 p-1 rounded dark:border-neutral-800 border"
              >
                <FaEnvelope size={24} />
              </a>
            </li>
            <li>
              <Link
                href={`${basics.profiles[0].url}`}
                rel="noreferrer"
                target="_blank"
                className=" h-7 w-7 transition-all hover:boder-2 dark:hover:text-white/70 dark:text-white dark:bg-neutral-800/50 dark:hover:bg-neutral-500/20 p-1 rounded dark:border-neutral-800 border"
              >
                <FaLinkedinIn size={24} />
              </Link>
            </li>
            <li>
              <Link
                href={`${basics.profiles[2].url}`}
                rel="noreferrer"
                target="_blank"
                className=" h-7 w-7 transition-all hover:boder-2 dark:hover:text-white/70 dark:text-white dark:bg-neutral-800/50 dark:hover:bg-neutral-500/20 p-1 rounded dark:border-neutral-800 border"
              >
                <FaGithub size={24} />
              </Link>
            </li>
            <li>
              <Link
                href={`${basics.profiles[3].url}`}
                rel="noreferrer"
                target="_blank"
                className=" h-7 w-7 transition-all hover:boder-2 dark:hover:text-white/70 dark:text-white dark:bg-neutral-800/50 dark:hover:bg-neutral-500/20 p-1 rounded dark:border-neutral-800 border"
              >
                <FaNpm size={24} />
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  )
}

export default HomeHero
