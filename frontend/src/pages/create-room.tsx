import { ArrowRight } from 'lucide-react'
import logoIcon from '../assets/logo-icon.svg'
import { useNavigate } from 'react-router-dom'

export function CreateRoom() {
  const navigate = useNavigate()

  function handleCreateNavigate(data: FormData) {
    const theme = data.get('theme')?.toString()

    console.log(theme)

    navigate('/room/:roomId')
  }


  return (
    <main className="h-screen flex justify-center items-center">
      <div className='flex gap-6 flex-col w-[450px]'>
        <img src={logoIcon} alt="" className='h-10' />

        <p className='text-center'>Create a public AM (Ask Me) room and prioritize the most important questions for the community.</p>

        <form 
          action={handleCreateNavigate}
          className='flex px-2 py-2 bg-zinc-900 rounded-lg border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1'
        >
          <input 
            type="text"
            name="theme"
            placeholder='Room name'
            autoComplete='off'
            className='flex-1 px-2 bg-transparent outline-none placeholder:text-zinc-500'
          />

          <button   
            type='submit'
            className='flex gap-1.5 items-center bg-orange-400 text-orange-950 font-medium rounded-lg text-sm px-3 py-1.5 transition-colors hover:bg-orange-500'
          >
            Create room
            <ArrowRight className='size-4' />
          </button>
        </form>
      </div>
    </main>
  )
}