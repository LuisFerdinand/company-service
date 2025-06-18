import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { HiHome, HiUser, HiLightningBolt, HiCog, HiBriefcase, HiMail } from 'react-icons/hi';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    // Synchronized navigation items - matches Navbar exactly
    const navItems = [
        { id: 'home', label: 'Home', icon: HiHome },
        { id: 'about', label: 'About', icon: HiUser },
        { id: 'workflow', label: 'Workflow', icon: HiLightningBolt },
        { id: 'services', label: 'Services', icon: HiCog },
        { id: 'projects', label: 'Projects', icon: HiBriefcase },
        { id: 'contact', label: 'Contact', icon: HiMail }
    ];

    return (
        <div className="fixed right-4 sm:right-7 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
            <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const isActive = selectedPage === item.id;

                    return (
                        <div key={item.id} className="relative group">
                            <AnchorLink
                                className={`
                                    relative block w-12 h-12 rounded-xl transition-all duration-500 ease-out
                                    cursor-pointer overflow-hidden
                                    hover:scale-110 transform-gpu
                                    ${isActive
                                        ? 'bg-gradient-to-br from-blue to-purple shadow-2xl shadow-blue/60 border border-blue/30'
                                        : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue/40 hover:bg-blue/10 hover:shadow-lg hover:shadow-blue/20'
                                    }
                                `}
                                href={`#${item.id}`}
                                onClick={() => setSelectedPage(item.id)}
                                offset={80}
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Animated background glow */}
                                <div className={`
                                    absolute inset-0 rounded-xl transition-all duration-500
                                    ${isActive
                                        ? 'bg-gradient-to-br from-blue/20 via-purple/10 to-blue/20 animate-pulse'
                                        : 'bg-transparent group-hover:bg-gradient-to-br group-hover:from-blue/5 group-hover:to-purple/5'
                                    }
                                `} />

                                {/* Spinning border effect for active state */}
                                {isActive && (
                                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue via-purple to-blue animate-spin opacity-75"
                                        style={{ animation: 'spin 3s linear infinite' }} />
                                )}

                                {/* Icon container */}
                                <div className={`
                                    relative z-10 w-full h-full flex items-center justify-center
                                    transition-all duration-300
                                    ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}
                                `}>
                                    <IconComponent className={`
                                        transition-all duration-300 transform
                                        ${isActive
                                            ? 'w-6 h-6 drop-shadow-lg'
                                            : 'w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:drop-shadow-md'
                                        }
                                    `} />
                                </div>

                                {/* Inner glow effect */}
                                {isActive && (
                                    <div className="absolute inset-2 rounded-lg bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                                )}

                                {/* Pulsing dot indicator */}
                                {isActive && (
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow rounded-full animate-ping opacity-75" />
                                )}
                            </AnchorLink>

                            {/* Enhanced Tooltip */}
                            <div className="
                                absolute right-16 top-1/2 transform -translate-y-1/2
                                bg-gradient-to-r from-deep-blue to-deep-blue/95 text-white px-4 py-2 rounded-lg text-sm font-medium
                                opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out
                                pointer-events-none whitespace-nowrap shadow-xl border border-white/10
                                backdrop-blur-sm transform translate-x-2 group-hover:translate-x-0
                            ">
                                <span className="relative z-10">{item.label}</span>

                                {/* Tooltip arrow */}
                                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 
                                    border-l-6 border-l-deep-blue border-t-3 border-t-transparent 
                                    border-b-3 border-b-transparent">
                                </div>

                                {/* Tooltip glow */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue/20 to-purple/20 blur-sm -z-10" />
                            </div>

                            {/* Connection line to center - only on hover with different styles for active/inactive */}
                            <div className={`
                                absolute right-12 top-1/2 w-4 h-0.5 transform -translate-y-1/2
                                transition-all duration-300 origin-right
                                opacity-0 group-hover:opacity-60
                                ${isActive
                                    ? 'bg-gradient-to-l from-yellow via-blue to-purple shadow-md shadow-yellow/50 h-0.5'
                                    : 'bg-white/20 opacity-0 group-hover:opacity-40'
                                }
                            `} />
                        </div>
                    );
                })}
            </div>

            {/* Decorative side element */}
            <div className="absolute -right-1 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue/30 to-transparent rounded-full opacity-50" />
        </div>
    );
};

export default DotGroup;