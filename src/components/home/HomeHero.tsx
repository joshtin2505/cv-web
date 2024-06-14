import Image from "next/image"
import cvJson from "@/mocks/cv.json"
import "./HomeHero.css"
import { FaEnvelope, FaGithub, FaLinkedinIn, FaNpm } from "react-icons/fa6"
import {} from "react-icons"
import Link from "next/link"

function HomeHero() {
  const { basics } = cvJson
  const SOCIAL_ICONS: Record<
    string,
    typeof FaLinkedinIn | typeof FaGithub | typeof FaNpm
  > = {
    LinkedIn: FaLinkedinIn,
    GitHub: FaGithub,
    NPM: FaNpm,
  }
  return (
    <section
      style={{ minHeight: "calc(100dvh - 69px)" }}
      className="w-full dark:bg-[url('/BgDarkHero.png')] bg-[url('/BgLightHero.png')] bg-cover bg-center bg-no-repeat relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent dark:before:to-black before:to-white "
    >
      <div className="max-w-5xl mx-auto lg:px-0 sm:px-5 py-8 relative z-10">
        <div className="md:block flex flex-col scale-75 sm:scale-100 ">
          {/* <div className="flex items-start flex-col"> */}
          <header className="flex items-center md:justify-between justify-center">
            <div className="flex flex-col items-start justify-center gap-3 w-[400px]">
              <h1 className=" text-6xl font-mono tracking-tighter ">
                Hey Here!
              </h1>
              <h2 className="text-5xl font-semibold font-mono name ">
                I&apos;m&nbsp;
                <span className="rainbow text-5xl font-semibold font-mono">
                  Joshtin.dev
                </span>
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
            <h4 className="md:text-xl tracking-normal text-lg font-medium font-mono xs:tracking-wide opacity-50 text-nowrap ">
              {basics.label}
            </h4>
            {/* sI CAMBIAS EL  ORDEN DEL JSON PUEDES CAUSAR UN ERROR EN EL DIRECCIONAMIENTTO, CORRIGE ESO */}
            <ul className=" flex w-44 md:mt-0 mt-2 md:opacity-100 opacity-80 justify-around">
              <li className="h-7 w-7 transition-all hover:boder-2 dark:hover:text-white/70 dark:text-white dark:bg-neutral-800/50 dark:hover:bg-neutral-500/20 rounded dark:border-neutral-800 border">
                <Link
                  className="w-full h-full grid place-items-center"
                  href={`mailto:${basics.email}`}
                >
                  <FaEnvelope size={18} />
                </Link>
              </li>
              {basics.profiles.map(({ network, url }, i) => {
                if (!SOCIAL_ICONS[network]) return null
                if (i === 1) return null
                const Icon = SOCIAL_ICONS[network]
                return (
                  <li
                    key={network}
                    className="h-7 w-7 transition-all hover:boder-2 dark:hover:text-white/70 dark:text-white dark:bg-neutral-800/50 dark:hover:bg-neutral-500/20 rounded dark:border-neutral-800 border"
                  >
                    <Link
                      className="w-full h-full grid place-items-center"
                      href={url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon size={20} />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </footer>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default HomeHero
