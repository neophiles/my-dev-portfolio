import HeadingContainer from '../components/HeadingContainer'
import ProjectCard from '../components/ProjectCard'
import { projects } from "../data/projects"
import { Code } from 'lucide-react'

function Projects() {
  return (
    <section id='projects' className='flex flex-col'>
      <HeadingContainer icon={Code} sectionTitle={'Featured Projects'} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {
          projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))
        }
      </div>
    </section>
  )
}

export default Projects
