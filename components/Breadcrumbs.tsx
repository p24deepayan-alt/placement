
import React from 'react';

const ChevronRightIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);


const Breadcrumbs: React.FC = () => {
    const items = [
        { label: 'Home', href: '#' },
        { label: 'Academics', href: '#' },
        { label: 'MBA-FABM', href: '#' },
        { label: 'Careers and Placemen...', href: '#' },
    ];

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <ol className="flex items-center space-x-2 h-12 text-sm">
                    {items.map((item, index) => (
                        <li key={item.label} className="flex items-center">
                            <a 
                                href={item.href} 
                                className={`font-medium ${index === items.length - 1 ? 'text-iima-blue' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                {item.label}
                            </a>
                            {index < items.length - 1 && (
                                <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-1" />
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
