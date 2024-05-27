import { FaCode } from "react-icons/fa6"

function NotFound() {
  const NOT_FOUND_TEXT = "This page could not be found."
  return (
    <div className="text-black dark:text-white h-[90vh] mt-[10vh] flex justify-center items-center">
      <h1 className="flex items-center gap-1 mr-5 pr-6 text-2xl font-medium leading-10 border-r border-r-black/40 dark:border-r-white/40">
        <FaCode className="text-red-400 text-2xl" />
        <span>404</span>
      </h1>
      <div className="inline-block">
        <h2 className="text-sm font-normal leading-10 m-0">{NOT_FOUND_TEXT}</h2>
      </div>
    </div>
  )
}

export default NotFound
