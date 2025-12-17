import HeadingContainer from '../components/HeadingContainer'
import AchievementContainer from '../components/AchievementContainer'
import { achievements } from '../data/achievements'
import { FileBadge } from 'lucide-react'

function Achievements() {
  return (
    <section className='flex flex-col'>
      <HeadingContainer icon={FileBadge} sectionTitle={'Achievements & Certifications'} />
      <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
        {
          achievements.map(achievement => (
            <AchievementContainer key={achievement.title} achievement={achievement} />
          ))
        }
      </div>
    </section>
  )
}

export default Achievements
