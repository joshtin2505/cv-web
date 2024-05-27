import React from "react"
import type { Projects } from "@/cv.d"
import Link from "next/link"
import Image from "next/image"

function CardProject({ project }: { project: Projects }) {
  return (
    <div className=" bg-neutral-300/40 dark:bg-neutral-800/40 rounded backdrop-blur-md max-w-[400px] flex flex-col shadow-md transition-shadow hover:shadow-xl">
      <figure className="aspect-video">
        <Image
          className="w-full object-cover aspect-video rounded-t"
          src={project.img[0]}
          alt={project.name}
          width={1000}
          height={1000}
        />
      </figure>
      <article className="p-2 border border-t-[0px] border-black/50 dark:border-white/50 rounded-b">
        <Link
          className="text-xl hover:underline capitalize font-medium dark:text-neutral-50"
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
        <p className="text-neutral-600 dark:text-white/80 text-base text-pretty">
          {project.description}
        </p>
        <footer className="">
          <div className="flex flex-wrap gap-2 my-3">
            {project.highlights.map((highlight, index) => (
              <span
                key={index}
                className=" bg-neutral-300/70 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-md px-1 capitalize"
              >
                {highlight}
              </span>
            ))}
          </div>
          <div className="flex items-center text-center gap-2 px-2">
            <hr className="w-full border-t-black/50 dark:border-t-white/50" />
            <h5 className="text-nowrap text-neutral-600 dark:text-neutral-300">
              Tech Stack
            </h5>
            <hr className="w-full border-t-black/50 dark:border-t-white/50" />
          </div>
          <div className="flex flex-wrap gap-2 ">
            {project.tecnolgies.map((tech, index) => (
              <span
                key={index}
                className=" bg-neutral-300/70 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-md px-1 capitalize"
              >
                {tech}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </div>
  )
}

export default CardProject
