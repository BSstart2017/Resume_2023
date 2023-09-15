import {FC} from 'react';
import Link from "next/link";
import {route} from "@/common/definitions/app/route";

const Logo: FC = () => {
    return (
        <Link href={route.HOME}>
            <img src={"/logo.png"} alt="" className="h-24 w-24 rounded-full"/>
        </Link>
    );
};

export default Logo