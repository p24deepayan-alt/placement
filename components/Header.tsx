import React, { useState, useEffect, useRef } from 'react';
import IimaLogo from './IimaLogo';
import Dropdown from './Dropdown';

const Header: React.FC = () => {
  const loginOptions = ['Student Login', 'Recruiter Login', 'Office Login'];
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = 5; // Minimum scroll distance to trigger visibility change

      // Set scrolled state for opaque background and shrinking
      setIsScrolled(currentScrollY > 10);

      // Don't update visibility if the scroll is insignificant
      if (Math.abs(lastScrollY.current - currentScrollY) <= scrollDelta) {
        return;
      }
      
      // Original header height (h-40) is 160px.
      // We'll use a slightly higher threshold to begin the hide-on-scroll behavior.
      const hideThreshold = 200;

      // Logic for showing/hiding header
      if (currentScrollY < hideThreshold) {
        setIsVisible(true);
      // Hide header on scroll down
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      // Show header on scroll up
      } else {
        setIsVisible(true);
      }
      
      // Update last scroll position
      lastScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? 'h-24' : 'h-40'}`}>
          <div className="flex-shrink-0">
            <a href="#" aria-label="Home">
              <IimaLogo className={`transition-all duration-300 ease-in-out w-auto text-iima-blue ${isScrolled ? 'h-20' : 'h-36'}`} />
            </a>
          </div>
          <div className="flex items-center">
            <Dropdown options={loginOptions} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
