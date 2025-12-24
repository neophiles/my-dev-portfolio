import type { Project } from '../data/projects'
import GitHubLink from './GitHubLink'
import ProjectLabelTab from './ProjectLabelTab'

function ProjectCard({ project }: { project: Project }) {
  const {
    image,
    title,
    description,
    projectLabels,
    techStack,
    githubLink,
  } = project;

  return (
    <div className='flex flex-col rounded-xl overflow-hidden border border-blue-500/20 hover:scale-[101%] transition-transform duration-500'>
      <img src={image} alt={title} className='w-full aspect-video object-cover' />
      <div className='flex-1 flex flex-col gap-3 p-6 bg-gray-300/30 dark:bg-inherit'>
        <div className='flex flex-col md:flex-row justify-between gap-3'>
          <h1 className='text-xl font-bold'>{title}</h1>
          <div className='flex items-center gap-2'>
            {
              techStack.map(tech => (
                <img key={tech.name} src={tech.logo} alt={`${tech.name} Logo`} className={`w-6 h-6 ${tech.name === "React" ? "brightness-75" : ""}`} />
              ))
            }
          </div>
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          {
            projectLabels.length !== 0 && (
              projectLabels.map(labelData => (
                <ProjectLabelTab key={labelData.text} labelData={labelData} />
              ))
            )
          }
        </div>
        <p className='line-clamp-3 text-ellipsis'>{description}</p>
        <div className='flex items-center gap-4 mt-auto'>
          <GitHubLink link={githubLink} />
        </div>
        
      </div>
    </div>
  )
}

export default ProjectCard
