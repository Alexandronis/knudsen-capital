import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const element = location.hash ? document.getElementById(location.hash.substring(1)) : null;

    setTimeout(() => {
      window.scrollTo({
        behavior: 'auto',
        top: element ? element.offsetTop : 0,
      });
    }, 0);
  }, [location]);

  return null;
};

export default ScrollHandler;
