'use client'

import React, {FC} from 'react';
import {Env} from "@env";
import Image from "next/image";

type PropsType = {
  size?: number
}

const urlGit = Env.SOCIAL_LINK_GIT
const urlLinked = Env.SOCIAL_LINK_LINKED

const SocialButton:FC<PropsType> = ({size = 24}) => {
    return (
        <div className="lg:flex hidden items-center space-x-4">
          <a href={urlGit} target="_blank" rel="noopener noreferrer">
            <Image
              src={"/images/git.svg"}
              alt="git_icon"
              width={size}
              height={size}
            />
          </a>
          <a href={urlLinked} target="_blank" rel="noopener noreferrer">
            <Image
              src={"/images/linked.svg"}
              alt="linked_icon"
              width={size}
              height={size}
            />
          </a>
        </div>
    );
};

export default SocialButton