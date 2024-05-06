import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { basics } from "@/mocks/cv.json"
import NavBar from "@/components/nav/NavBar"

const inter = Inter({ subsets: ["latin"] })

const { name, label, summary, image } = basics

export const metadata: Metadata = {
  title: `${name} - ${label}`,
  description: `${name} - ${label} - ${summary}`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={image} type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <NavBar />

        {children}
      </body>
    </html>
  )
}
