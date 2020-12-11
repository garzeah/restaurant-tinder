import {useState, useEffect} from 'react';


const Route = ({ path, children }) => {
  // Keeping track of our pathname and gets our route to update
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  // Whenever the location changes, we want the Route
  // to rerender itself
  const onLocationChange = () => {
    // Whenever we dispatch an event, this gets called
    setCurrentPath(window.location.pathname);
  };

  // Empty array tells React that our effect does not
  // depend on any values from prop or state so it
  // never needs to rerun
  useEffect(() => {
    // Listens for popstate events from Link component
    window.addEventListener('popstate', onLocationChange);

    // Our cleanup function
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
    // Only want to run at initial render
  }, []);

  return currentPath === path
    ? children
    : null;
};

export default Route;