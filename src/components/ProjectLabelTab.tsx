import type { ProjectLabel } from '../data/projects'

function ProjectLabelTab({ labelData }: { labelData: ProjectLabel }) {
  const {
    icon: Icon,
    text,
    color,
  } = labelData;

  return (
    <div className={`flex items-center gap-1 py-0.5 px-2 rounded-xl ${color} text-sm text-gray-800 dark:text-gray-400`}>
      <Icon className='w-4 h-4' />
      <p>{text}</p>
    </div>
  )
}

export default ProjectLabelTab
