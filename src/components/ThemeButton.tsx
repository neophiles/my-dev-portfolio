import { Sun, Moon } from 'lucide-react';

function ThemeButton({ isDark, onToggleTheme }: {
  isDark: boolean;
  onToggleTheme: Function;
}) {
  return (
    <button onClick={() => onToggleTheme()} className='cursor-pointer text-yellow-600 dark:text-yellow-400'>
      { !isDark ? <Sun /> : <Moon /> }
    </button>
  )
}

export default ThemeButton
