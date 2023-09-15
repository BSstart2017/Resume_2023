import {FC} from 'react';
import Link from "next/link";

const Logo: FC = () => {
    return (
        <Link href="#">
            <img src={"/logo.png"} alt="" className="h-24 w-24 rounded-full"/>
        </Link>
    );
};

export default Logo