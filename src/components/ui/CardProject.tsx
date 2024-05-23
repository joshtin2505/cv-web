import React from "react"
import type { Projects } from "@/cv.d"
import Link from "next/link"
import Image from "next/image"

function CardProject({ project }: { project: Projects }) {
  return (
    <div className=" bg-neutral-800/40 rounded backdrop-blur-md max-w-[700px] flex">
      <figure>
        <Image
          className="w-[400px] object-cover aspect-video rounded"
          src={project.img[0]}
          alt={project.name}
          width={500}
          height={300}
        />
      </figure>
      <article className="p-2">
        <Link
          className="text-xl hover:underline capitalize font-medium"
          href={project.url}
        >
          {project.name}
          <strong
            className={
              "ml-1 " +
              (project.isActive === true
                ? "text-green-500"
                : project.isActive === false
                ? "text-red-500"
                : "text-amber-500")
            }
          >
            &bull;
          </strong>
        </Link>
        <p className="dark:text-white/60">{project.description}</p>
        <footer className="flex flex-wrap gap-2">
          {project.tecnolgies.map((tech, index) => (
            <span
              key={index}
              className="dark:bg-neutral-700 rounded-md px-1 capitalize"
            >
              {tech}
            </span>
          ))}
        </footer>
      </article>
    </div>
  )
}

export default CardProject
