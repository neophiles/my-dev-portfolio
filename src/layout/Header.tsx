import { useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';
import { Sun, Moon } from 'lucide-react';
import neophilesLogo from '../assets/logos/personal/neophiles-logo.png';

function Header() {
  const { isDark, setIsDark } = useThemeStore();

  useEffect(() => {
    console.log(isDark)
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className='h-14 w-full sticky top-0 z-10 px-6 dark:bg-gray-950/50 backdrop-blur-lg'>
      <div className='h-full flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src={neophilesLogo} alt='neophiles Logo' className='rounded-full w-8 h-8' />
          <h1 className='text-lg'>
            <code>neophiles</code>
          </h1>
        </div>
          
        <button onClick={() => setIsDark()} className='cursor-pointer text-yellow-600 dark:text-yellow-400'>
          { !isDark ? <Sun /> : <Moon /> }
        </button>
      </div>
    </header>
  )
}

export default Header
