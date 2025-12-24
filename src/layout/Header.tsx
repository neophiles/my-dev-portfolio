import { useEffect, useState } from 'react';
import useIsScreenSmall from '../hooks/useIsScreenSmall';
import { useThemeStore } from '../store/themeStore';
import { useSidebarStore } from '../store/sidebarStore';
import SectionLinks from '../components/SectionLinks';
import ThemeButton from '../components/ThemeButton';
import SidebarButton from '../components/SidebarButton';
import neophilesLogo from '../assets/logos/personal/neophiles-logo.png';

function Header() {
  const { isDark, setIsDark } = useThemeStore();
  const { onOpen } = useSidebarStore();
  const [isHeaderMobile, setIsHeaderMobile] = useState(false);
  const isScreenSmall = useIsScreenSmall();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      console.log('Dark mode');
    } else {
      root.classList.remove('dark');
      console.log('Light mode');
    }
  }, [isDark]);

  useEffect(() => {
    if (isScreenSmall) {
      setIsHeaderMobile(true);
      console.log('Screen small');
    } else {
      setIsHeaderMobile(false);
      onOpen(false);
      console.log('Screen big');
    }
  }, [isScreenSmall]);

  const handleGoToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <header className='h-14 w-full sticky top-0 z-20 px-6 dark:bg-gray-950/50 backdrop-blur-lg'>
      <div className='h-full flex items-center justify-between'>
        <div>
          <button onClick={handleGoToTop} className='flex items-center gap-2'>
            <img src={neophilesLogo} alt='neophiles Logo' className='rounded-full w-8 h-8' />
            <h1 className='text-lg'>
              <code>neophiles</code>
            </h1>
          </button>
        </div>

        <div className='flex gap-8'>
          {
            !isHeaderMobile ? (
              <>
                <div className='flex items-center gap-4'>
                  <SectionLinks />
                </div>

                <ThemeButton isDark={isDark} onToggleTheme={setIsDark} />
              </>
            ) : (
              <SidebarButton />
            ) 
          }
        </div>
      </div>
    </header>
  )
}

export default Header
