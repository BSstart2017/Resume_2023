import React from 'react';

const LanguageButton = () => {
    return (
        <div className='space-y-1'>
            <img src={"/images/pl.svg"} alt="" className="h-6 w-6 cursor-pointer"  />
            <img src={"/images/eng.svg"} alt="" className="h-6 w-6 cursor-pointer" />
        </div>
    );
};

export default LanguageButton