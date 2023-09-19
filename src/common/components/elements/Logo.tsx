import {FC} from 'react';
import Link from "next/link";
import {route} from "@/common/definitions/app/route";
import Image from "next/image";

type PropsType = {
  size?: number
}

const Logo: FC<PropsType> = ({size = 80}) => {
    return (
        <Link href={route.HOME}>
            <Image
              src={"/logo.png"}
              width={size}
              height={size}
              alt="Avatar"
              className="rounded-full"
            />
        </Link>
    );
};

export default Logo