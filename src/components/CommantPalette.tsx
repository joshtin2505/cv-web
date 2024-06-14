"use client"
// import { SocialKeymaps } from "@/types"
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
} from "cmdk"
import { SVGProps, useEffect, useRef, useState } from "react"

const CommantPalette = ({
  socials,
}: {
  socials?: {
    title: string
    url: string
    section: string
    hotKey: string
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  }[]
}) => {
  const containerElement = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])
  const openUrl = (url: string) => {
    window.open(url, "_blank")
  }
  return (
    <>
      <CommandDialog
        className="print:hidden w-96 dark:bg-neutral-900/50 border dark:border-neutral-800 backdrop-blur p-2 rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2  z-40"
        open={open}
        onOpenChange={setOpen}
        label="Buscar Commandos"
        container={containerElement.current as HTMLElement}
      >
        <CommandInput
          className="outline-none w-full bg-transparent h-11 px-2 text-white/80 border-b border-white/20 placeholder:bg-white/10 placeholder:p-1 placeholder:px-2 placeholder:rounded "
          placeholder="Qué necesitas?"
        />
        <CommandList>
          <CommandEmpty className="p-1 w-full flex flex-col gap-1 items-center">
            <strong>No se encontraron resultados</strong>
          </CommandEmpty>
          <CommandGroup className="" heading="General">
            <CommandItem
              className="flex justify-between p-1 px-2 hover:cursor-pointer hover:bg-white/10 rounded-md"
              onSelect={() => setOpen(false)}
            >
              <div className="flex gap-1">
                <span>✖️</span>
                <strong>Cerrar ventana de comandos</strong>
              </div>
              <span>
                <kbd>Ctrl + K</kbd>
              </span>
            </CommandItem>
            <CommandItem
              className="flex justify-between p-1 px-2 hover:cursor-pointer hover:bg-white/10 rounded-md"
              onSelect={() => window.print()}
            >
              <div className="flex gap-1">
                <span>🖨️</span>
                <strong>Imprimir Curriculum</strong>
              </div>
              <span>
                <kbd>Ctrl + P</kbd>
              </span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup className="flex flex-col " heading="Social">
            {socials?.map((social) => {
              const Icon = social.icon
              return (
                <CommandItem
                  className="flex p-1 px-2 items-center gap-2 hover:cursor-pointer hover:bg-white/10 rounded-md"
                  key={social.title}
                  onSelect={() => openUrl(social.url)}
                >
                  <Icon className="scale-[1.3]" />
                  <strong>{social.title}</strong>
                </CommandItem>
              )
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <div
        className={
          "fixed w-screen h-screen top-0 left-0 bg-neutral-950/80 z-20 "
        }
        hidden={!open}
        ref={containerElement}
      />
    </>
  )
}

export default CommantPalette
