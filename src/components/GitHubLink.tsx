import { Github } from 'lucide-react'

function GitHubLink({ link }: { link: string }) {
  return (
    <a href={link} target='_blank' className='flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400'>
      <Github className='w-4 h-4' />
      <p>GitHub</p>
    </a>
  )
}

export default GitHubLink
