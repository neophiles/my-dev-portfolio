import HeadingContainer from '../components/HeadingContainer'
import { Rocket, Mail, SquareChartGantt } from 'lucide-react'

function CallToAction() {
  return (
    <section className='flex flex-col items-center mb-20'>
      <HeadingContainer icon={Rocket} sectionTitle={"Let's Build and Learn Together"} />
      <div className='flex flex-col items-center gap-6'>
        <p className='text-sm md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300'>
          Interested in making meaningful stuff? I'm always excited to collaborate on innovative projects that solve real problems and learn a thing or two along the way.
        </p>
        <div className='max-w-xl w-full grid grid-cols-1 md:grid-cols-2 justify-center gap-4'>
          <a href='mailto:mnv.tagle@gmail.com' target='_blank' className='w-full flex justify-center items-center gap-2 py-2 px-8 rounded-sm border border-blue-500/20 text-sm text-blue-500 dark:text-blue-300 hover:bg-blue-500/20 dark:hover:bg-blue-900/30 hover:scale-105 transition-all duration-300'>
            <Mail />
            <p>mnv.tagle@gmail.com</p>
          </a>
          <a href='https://github.com/neophiles/my-dev-portfolio' target='_blank' className='flex justify-center items-center gap-2 py-2 px-8 rounded-sm border border-blue-500/20 text-sm text-blue-500 dark:text-blue-300 hover:bg-blue-500/20 dark:hover:bg-blue-900/30 hover:scale-105 transition-all duration-300'>
            <SquareChartGantt />
            <p>Source Code on GitHub</p>
          </a>
        </div>
      </div>
      
    </section>
  )
}

export default CallToAction
