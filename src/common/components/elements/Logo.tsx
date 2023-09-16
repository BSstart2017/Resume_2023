import {FC} from 'react';
import Link from "next/link";
import {route} from "@/common/definitions/app/route";
import Image from "next/image";

type PropsType = {
  size: number
}

const Logo: FC<PropsType> = ({size}) => {
    return (
        <Link href={route.HOME}>
            <Image
              src={"/logo.png"}
              height={size}
              width={size}
              alt="Avatar"
              className="rounded-full"
            />
        </Link>
    );
};

export default Logo