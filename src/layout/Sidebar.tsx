import SectionLinks from '../components/SectionLinks';
import ThemeButton from '../components/ThemeButton';
import { useSidebarStore } from '../store/sidebarStore';
import { useThemeStore } from '../store/themeStore';


function Sidebar() {
  const { isDark, setIsDark } = useThemeStore();
  const { isOpen } = useSidebarStore();

  return (
    <aside className={`fixed top-0 right-0 z-10 bg-inherit ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-full h-full p-6 transition-transform duration-300 ease-in-out`}>
      <div className='flex flex-col items-end gap-4 mt-14'>
        <ThemeButton isDark={isDark} onToggleTheme={setIsDark} />
        <SectionLinks />
      </div>
    </aside>
  )
}

export default Sidebar
