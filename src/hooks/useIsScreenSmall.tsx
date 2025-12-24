import { useState, useEffect } from 'react';
import useWindowDimensions from './useWindowDimensions';

function useIsScreenSmall(maxWidth = 768): boolean {
  const [isSmall, setIsSmall] = useState(false);

  const { width } = useWindowDimensions();

  const checkScreen = () => {
    setIsSmall(width < maxWidth);
  };

  useEffect(() => {
    checkScreen();
  }, [width, maxWidth]);

  return isSmall;
}

export default useIsScreenSmall
