"use client"
import cvJson from "@/mocks/cv.json"
import "./keyboardManager.css"

import { SVGProps } from "react"
import { GitHub, LinkedIn, X } from "./icons/SocialIcons"
import CommantPalette from "./CommantPalette"
import { FaNpm } from "react-icons/fa6"

function KeyboardManager() {
  const { basics } = cvJson
  const { profiles } = basics
  const SOCIAL_ICONS: Record<
    string,
    (props: SVGProps<SVGSVGElement>) => JSX.Element
  > = {
    GitHub: GitHub,
    LinkedIn,
    X,
    NPM: FaNpm,
  }

  const socialkeymaps = profiles.map((profile) => {
    const { network, url } = profile
    const icon = SOCIAL_ICONS[network] // Add index signature
    const firstLetter = network[0].toUpperCase()
    return {
      title: "Visita mi " + network,
      url,
      section: "Social",
      hotKey: "Ctrl+" + firstLetter,
      icon,
    }
  })

  return <CommantPalette socials={socialkeymaps} />
}

export default KeyboardManager
