import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles =
        'relative bg-yellow before:content-[""] before:absolute before:w-6 before:h-6 ' +
        'before:rounded-full before:border-2 before:border-yellow ' +
        'before:left-1/2 before:top-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2';

    return (
        <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
            <AnchorLink
                className={`w-3 h-3 rounded-full ${selectedPage === 'home' ? selectedStyles : 'bg-dark-grey'}`}
                href="#home"
                onClick={() => setSelectedPage('home')}
            />
        </div>
    );
};

export default DotGroup;
