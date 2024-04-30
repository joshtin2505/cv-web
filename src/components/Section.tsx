import { type ReactNode } from "react"

function Section({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div>
      <section className="max-w-3xl mx-auto mb-6 relative">
        {title && (
          <h2 className="text-2xl mb-2 font-bold leading-normal dark:text-white">
            {title}
          </h2>
        )}
        {children}
      </section>
    </div>
  )
}

export default Section
