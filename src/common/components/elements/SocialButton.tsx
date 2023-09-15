import React from 'react';

const SocialButton = () => {
    return (
        <div className="lg:flex hidden items-center space-x-4">
            <img src={"/images/git.svg"} alt="" className="h-6 w-6 cursor-pointer" />
            <img src={"/images/linked.svg"} alt="" className="h-6 w-6 cursor-pointer" />
        </div>
    );
};

export default SocialButton