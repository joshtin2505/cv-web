import cvJson from "@/mocks/cv.json"
import Section from "../Section"
import { Mail, GitHub, LinkedIn, X } from "../../icons/SocialIcons"
import { WorldMap, Phone } from "../../icons/OthersIcons"
import { SVGProps } from "react"
import Image from "next/image"
import "./Hero.css"
import { FaNpm } from "react-icons/fa6"

function Hero({}) {
  const { basics } = cvJson
  const { name, label, email, image, location, phone, profiles } = basics

  const SOCIAL_ICONS: Record<
    string,
    (props: SVGProps<SVGSVGElement>) => JSX.Element
  > = {
    LinkedIn,
    GitHub,
    X,
    NPM: FaNpm,
  }

  const linkedinUrl = profiles.find(
    ({ network }) => network === "LinkedIn"
  )?.url

  const { city, region } = location

  const printInfo = [email, phone, linkedinUrl].filter(Boolean).join(" • ")
  return (
    <Section id={"hero"}>
      <div className="hero-container">
        <div className="info">
          <h1 className="text-4xl dark:text-white">{name}</h1>
          <h2>{label}</h2>
          <span>
            <WorldMap />
            {city === null && region === null
              ? "Ubicación desconocida"
              : `${city}, ${region}`}
          </span>
          <footer className="hidden print:block ">{printInfo}</footer>
          <footer className="print:hidden">
            {email && (
              <a
                href={`mailto:${email}`}
                title={`Enviar un correo a ${name} al mail ${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                title={`llamar por telefono a ${name} al telefono ${phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone />
              </a>
            )}
            {profiles && profiles.length > 0
              ? profiles.map(({ network, url }) => {
                  const Icon = SOCIAL_ICONS[network]
                  return (
                    <a
                      key={network}
                      href={url}
                      title={`Visitar el perfil de ${name} en ${network}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                    </a>
                  )
                })
              : null}
          </footer>
        </div>
        <figure>
          <Image width={1000} height={1000} src={image} alt={name} />
        </figure>
      </div>
    </Section>
  )
}

export default Hero
