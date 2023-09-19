import React, {FC} from 'react';
import Image from "next/image";

type PropsType = {
  size?: number
}

const LanguageButton:FC<PropsType> = ({size = 24}) => {
    return (
        <div className='space-y-1'>
            <Image
              src={"/images/pl.svg"}
              alt="pl_language"
              className="cursor-pointer"
              width={size}
              height={size}
            />
            <Image
              src={"/images/eng.svg"}
              alt="eng_language"
              className="cursor-pointer"
              width={size}
              height={size}
            />
        </div>
    );
};

export default LanguageButton