'use client'

import React from 'react';
import {Env} from "@env";

const urlGit = Env.SOCIAL_LINK_GIT
const urlLinked = Env.SOCIAL_LINK_LINKED

const SocialButton = () => {
    return (
        <div className="lg:flex hidden items-center space-x-4">
          <a href={urlGit} target="_blank" rel="noopener noreferrer">
            <img src={"/images/git.svg"} alt="" className="h-6 w-6" />
          </a>
          <a href={urlLinked} target="_blank" rel="noopener noreferrer">
            <img src={"/images/linked.svg"} alt="" className="h-6 w-6 cursor-pointer" />
          </a>
        </div>
    );
};

export default SocialButton