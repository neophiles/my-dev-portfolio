import { Lightbulb } from 'lucide-react'

function HackathonLabel() {
  return (
    <div className='flex items-center gap-1 py-0.5 px-2 rounded-xl dark:bg-blue-500/20 bg-blue-500/40 text-sm text-gray-800 dark:text-gray-400'>
      <Lightbulb className='w-4 h-4' />
      <p>Hackathon Project</p>
    </div>
  )
}

export default HackathonLabel
