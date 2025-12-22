import { useThemeStore } from '../store/themeStore'
import { highlightLinks } from '../data/highlightLinks';
import HighlightLink from '../components/HighlightLink';
import neilPic from '../assets/images/personal/neil.png'
import { profiles } from '../data/profiles';
import { MapPin } from 'lucide-react'

function Hero() {
  const { isDark } = useThemeStore();

  const { MSEUF } = highlightLinks;

  return (
    <section id='hero' className='flex flex-col items-center lg:flex-row gap-16 scroll-mt-20'>
      <div className='w-auto flex flex-col items-center gap-4'>
        <div className='w-40 h-40 ring-2 ring-gray-400 dark:ring-gray-800 rounded-full overflow-hidden'>
          <img src={neilPic} alt="Neil's Picture" draggable={false} className='object-cover'/>
        </div>

        <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400'>
          <MapPin className='w-4 h-4' />
          <p>Lucena, Quezon</p>
        </div>

        <div className='flex justify-center items-center gap-4'>
          {
            profiles.map(profile => (
              <a key={profile.platformName} href={profile.link} target='_blank' title={profile.platformName}>
                <img src={!isDark ? profile.logos[0] : profile.logos[1]} alt={`${profile.platformName} Logo`} className='w-8 h-8 hover:brightness-75 transition-all duration-500' />
              </a>
            ))
          }
        </div>
      </div>

      <div className='flex-1 flex flex-col gap-4 text-center lg:text-left'>
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold'>
          Marc Neil Tagle
        </h1>
        <p className='text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-400'>
          Frontend Developer
        </p>
        <p className='text-sm md:text-lg lg:text-xl'>
          {" I'm a 2nd-year Computer Science student specializing in Software Engineering at "}
          <HighlightLink highlightLink={MSEUF} />
          {" I'm passionate about building intuitive, scalable web applications, currently focusing on frontend development with frameworks like React and Next.js to create clean, user-friendly interfaces."}
        </p>
      </div>      
    </section>
  )
}

export default Hero
