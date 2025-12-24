import Achievements from '../sections/Achievements'
import CallToAction from '../sections/CallToAction'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import TechStack from '../sections/TechStack'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className='w-[min(900px,99%)] flex flex-col p-6'>
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