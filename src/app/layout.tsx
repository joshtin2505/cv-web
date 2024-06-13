import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import cvJson from "@/mocks/cv.json"
import CoverProvider from "@/components/Cover"

const inter = Inter({ subsets: ["latin"] })

const { basics } = cvJson
const { name, label, summary, image } = basics

export const metadata: Metadata = {
  title: `Joshtin.dev - ${label}`,
  description: `${name} - ${label} - ${summary}`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="shortcut icon" href={image} type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <CoverProvider>{children}</CoverProvider>
      </body>
    </html>
  )
}
