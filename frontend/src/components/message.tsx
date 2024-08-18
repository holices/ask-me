import { ArrowUp } from "lucide-react";
import { useState } from "react";

interface MessageProps {
  text: string
  amountOfReactions: number
  answered?: boolean
}

export function Message({text, amountOfReactions, answered = false}: MessageProps) {
  const [hasReacted, setHasReacted] = useState(false)

  function handleReactToMessage () {
    setHasReacted(true)
  }

  return (
    <li data-answered={answered} className="ml-5 text-zinc-500 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none">
      {text}

      {hasReacted ? (
        <button
          className="flex items-center gap-2 mt-3 text-sm font-medium cursor-pointer text-orange-400 hover:text-orange-500"
          type="button"
        >
          <ArrowUp className="size-4" />
          Like ({amountOfReactions})
        </button>
      ) : (
        <button 
          onClick={handleReactToMessage}
          className="flex items-center gap-2 mt-3 text-sm font-medium cursor-pointer text-zinc-400 hover:text-zinc-300"
          type="button"
        >
          <ArrowUp className="size-4" />
          Like ({amountOfReactions})
        </button>
      )}


    </li>
  )
}