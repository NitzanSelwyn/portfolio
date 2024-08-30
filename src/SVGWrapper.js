import React from 'react';

const SVGWrapper = ({ children, isDarkMode }) => {
    return (
        <div className={`${isDarkMode ? 'dark-mode-svg' : 'light-mode-svg'}`}>
            {children}
        </div>
    );
};

export default SVGWrapper;
