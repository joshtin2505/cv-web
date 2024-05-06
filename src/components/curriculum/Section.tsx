import { type ReactNode } from "react"

function Section({
  title,
  children,
  id = "",
}: {
  title?: string
  children: ReactNode
  id?: string
}) {
  return (
    <section id={id} className="max-w-3xl mx-auto mb-6 relative">
      {title && (
        <h2 className="text-2xl mb-2 font-bold leading-normal dark:text-white">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

export default Section
