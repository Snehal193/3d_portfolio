import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '../constants';

const BackButton = ({ to, routeName }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the route name to display
  const getRouteName = () => {
    if (routeName) return routeName;
    
    // If 'to' is provided, find the route name from navLinks
    if (to) {
      const route = navLinks.find(nav => `/${nav.id}` === to);
      if (route) return route.title;
      
      // Handle craft route
      if (to === '/craft') return 'Craft';
      if (to === '/') return 'Home';
    }
    
    // Default: try to get from current location
    const currentPath = location.pathname;
    if (currentPath.startsWith('/craft/')) return 'Craft';
    
    const matched = navLinks.find((nav) => currentPath.startsWith(`/${nav.id}`));
    return matched ? matched.title : 'Home';
  };

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1); // Go back in history
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 text-secondary hover:text-white transition-colors duration-200 group my-4"
    >
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200"
      />
      <span className="text-sm font-medium">{getRouteName()}</span>
    </button>
  );
};

export default BackButton;

