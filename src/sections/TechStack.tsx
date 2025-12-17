import HeadingContainer from '../components/HeadingContainer'
import TechContainer from '../components/TechContainer'
import { tech } from '../data/tech'
import { Hammer } from 'lucide-react'

function TechStack() {
  const selectedTech = [
    'JavaScript',
    'TypeScript',
    'Tailwind',
    'React',
    'ChakraUI',
    'NextJS',
    'Git',
  ] as const

  const techStack = selectedTech.map((techKey) => ({
    name: tech[techKey].name,
    logo: tech[techKey].logo,
  }))

  return (
    <section className='flex flex-col'>
      <HeadingContainer icon={Hammer} sectionTitle={'Tech Stack'} />
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
        {
          techStack.map(({name, logo}) => (
            <TechContainer key={name} logo={logo} techName={name} />
          ))
        }
      </div>
    </section>
  )
}

export default TechStack
