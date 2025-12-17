import Achievements from '../sections/Achievements'
import CallToAction from '../sections/CallToAction'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import TechStack from '../sections/TechStack'
import Header from './Header'

function Layout() {
  return (
    <>
      <Header />
      <main className='w-[min(900px,99%)] flex flex-col gap-16 p-6 '>
        <Hero />
        <TechStack />
        <Projects />
        <Achievements />
        <CallToAction />
      </main>
    </>
    
  )
}

export default Layout