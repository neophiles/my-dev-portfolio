import { sectionLinks } from '../data/sectionLinks';
import { useSidebarStore } from '../store/sidebarStore';

function SectionLinks() {
  const { onOpen } = useSidebarStore();

  return (
    <>
      {
        sectionLinks.map(([displayName, id]) => (
          <a key={id} onClick={() => onOpen(false)} href={id} className='text-nowrap text-md hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200'>
            {displayName}
          </a>
        ))
      }
    </>
  )
}

export default SectionLinks
