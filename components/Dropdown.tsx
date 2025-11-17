
import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
  options: string[];
}

const TwoLineIcon: React.FC = () => (
  <div className="flex flex-col space-y-1.5" aria-hidden="true">
    <div className="w-6 h-1 bg-white" />
    <div className="w-6 h-1 bg-white" />
  </div>
);

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex justify-between items-center w-48 px-6 py-4 bg-iima-blue text-white font-body font-semibold text-lg hover:bg-opacity-90 focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span>Logins</span>
          <TwoLineIcon />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-0 w-48 shadow-lg bg-iima-blue focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <a
                key={option}
                href="#"
                className="block px-6 py-3 text-base text-white hover:bg-white/10 font-body transition-colors"
                role="menuitem"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
