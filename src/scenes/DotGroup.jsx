import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'workflow', label: 'Workflow' },
        { id: 'services', label: 'Services' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <div className="fixed right-7 top-1/2 transform -translate-y-1/2 z-50">
            <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                    <div key={item.id} className="relative group">
                        <AnchorLink
                            className={`
                                block w-4 h-4 rounded-full border-2 transition-all duration-300 ease-in-out
                                hover:scale-110 hover:shadow-lg cursor-pointer
                                relative
                                ${selectedPage === item.id 
                                    ? 'bg-yellow border-yellow shadow-yellow/50' 
                                    : 'bg-transparent border-dark-grey hover:border-yellow hover:bg-yellow/20'
                                }
                            `}
                            href={`#${item.id}`}
                            onClick={() => setSelectedPage(item.id)}
                        >
                            {/* Inner dot */}
                            <div className={`
                                absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                w-4 h-4 rounded-full transition-all duration-300
                                ${selectedPage === item.id 
                                    ? 'bg-yellow' 
                                    : 'bg-transparent border border-dark-grey group-hover:border-yellow'
                                }
                            `} />
                        </AnchorLink>
                        
                        {/* Tooltip */}
                        <div className="
                            absolute right-10 top-1/2 transform -translate-y-1/2
                            bg-deep-blue text-grey px-3 py-1 rounded-md text-sm
                            opacity-0 group-hover:opacity-100 transition-opacity duration-200
                            pointer-events-none whitespace-nowrap
                        ">
                            {item.label}
                            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 
                                border-l-4 border-l-deep-blue border-t-2 border-t-transparent 
                                border-b-2 border-b-transparent">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DotGroup;