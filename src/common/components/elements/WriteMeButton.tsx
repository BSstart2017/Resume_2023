'use client'

import React from 'react';
import {useRouter} from "next/navigation";
import {route} from "@/common/definitions/app/route";

const WriteMeButton = () => {
    const router = useRouter()

    return (
        <div className="flex items-center">
            <button
                className="py-2 px-5 rounded-full bg-blue-600 hover:bg-blue-500 text-xl font-semibold"
                onClick={() => router.push(route.WRITE)}
            >
                write me
            </button>
        </div>
    );
};

export default WriteMeButton