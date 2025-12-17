import type { Achievement } from "../data/achievements"

function AchievementContainer({ achievement }: { achievement: Achievement }) {
  const {
    image,
    title,
    link,
  } = achievement;

  return (
    <a href={link} target='_blank' title={title} className="rounded-xl overflow-hidden">
      <img src={image} alt={title} className="object-cover hover:scale-105 transition-transform duration-500" />
    </a>
  )
}

export default AchievementContainer 
