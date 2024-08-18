import { toast } from "sonner"
import { useParams } from "react-router-dom"
import { ArrowRight, ArrowUp, Share2 } from "lucide-react"

import logoIcon from '../assets/logo-icon.svg'

export function Room() {
  const { roomId } = useParams()

  function handleShareRoom() { 
    const url = window.location.href.toString()

    if (navigator.share != undefined && navigator.canShare()) {
      navigator.share({ url })
    } else {
      navigator.clipboard.writeText(url)

      toast.info('The room URL was copied to your clipboard!')
    }
  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-5">
      <div className="flex items-center gap-3 px-3">
        <img 
          src={logoIcon} 
          alt="" 
          className="h-5" 
        />
        <p className="flex-1 text-sm text-zinc-500 truncate">
          Room code:
          <span className="text-zinc-300 font-bold ml-1.5">
            {roomId}
          </span>
        </p>
        <button 
          type="submit"
          onClick={handleShareRoom}
          className="flex gap-1.5 items-center text-sm font-medium px-3 py-1.5 bg-zinc-800 rounded-lg hover:bg-zinc-700"
        >
          Share
          <Share2 className="size-4" />
        </button>
      </div>

        <div className="w-full h-px bg-zinc-900" />

        <form className="flex bg-zinc-800 px-2 py-2 rounded-xl ring-orange-400 ring-offset-2 ring-offset-zinc-800 focus-within:ring-1">
          <input 
            type="text"
            placeholder="What your question?"
            autoComplete="off"
            className="flex-1 bg-transparent px-3 outline-none"
          />

          <button className="flex items-center gap-1.5 text-sm px-3 py-1.5 bg-orange-400 text-orange-950 font-medium rounded-lg hover:bg-orange-500">
            Create question
            <ArrowRight className="size-4" />
          </button>
        </form>

        <ol className="list-decimal list-outside mx-3 space-y-8">
          <li className="ml-5 text-zinc-500">
            What is GoLang and what are its main advantages compared to other programming languages such as Python, Java or C++?

            <button 
              className="flex items-center gap-2 mt-3 text-sm font-medium cursor-pointer"
              type="button"
            >
              <ArrowUp className="size-4" />
              Like (123)
            </button>
          </li>

          <li className="ml-5">
            How do goroutines work in GoLang and why are they important for concurrency and parallelism?

            <button 
              className="flex items-center gap-2 mt-3 text-sm font-medium cursor-pointer text-orange-400 hover:text-orange-500"
              type="button"
            >
              <ArrowUp className="size-4" />
              Like (123)
            </button>
          </li>

          <li className="ml-5">
            What are the best practices for organizing the code in a GoLang project, including packages, modules and the directory structure?

            <button 
              className="flex items-center gap-2 mt-3 text-sm font-medium cursor-pointer text-zinc-400 hover:text-zinc-300"
              type="button"
            >
              <ArrowUp className="size-4" />
              Like (123)
            </button>
          </li>

          <li className="ml-5">
            How do I debug GoLang programs and what tools are recommended for this?

            <button 
              className="flex items-center gap-2 mt-3 text-sm font-medium cursor-pointer text-orange-400 hover:text-orange-500"
              type="button"
            >
              <ArrowUp className="size-4" />
              Like (123)
            </button>
          </li>

          <li className="ml-5">
            What are the first steps to start programming in GoLang, including installing the development environment, configuring and running your first program?

            <button 
              className="flex items-center gap-2 mt-3 text-sm font-medium cursor-pointer text-orange-400 hover:text-orange-500"
              type="button"
            >
              <ArrowUp className="size-4" />
              Like (123)
            </button>
          </li>

          <li className="ml-5">
            How does memory management work in GoLang, including garbage collection? What are the performance implications and how can memory usage be optimized in Go programs? What are the differences between stack and heap allocation, and how do these differences affect program efficiency?

            <button 
              className="flex items-center gap-2 mt-3 text-sm font-medium cursor-pointer text-zinc-400 hover:text-zinc-300"
              type="button"
            >
              <ArrowUp className="size-4" />
              Like (123)
            </button>
          </li>
        </ol>
    </div>
  )
}