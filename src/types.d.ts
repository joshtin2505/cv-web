import type { SVGProps } from "react"

interface SocialKeymap {
  title: string
  url: string
  section: string
  hotKey: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}
type SocialKeymaps = SocialKeymap[]
export type { SocialKeymaps, SocialKeymap }
