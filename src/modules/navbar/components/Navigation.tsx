'use client'

import { usePathname } from 'next/navigation'
import { FC } from 'react';
import React from 'react';
import Link from "next/link";
import {NavigationRoute} from "@/common/definitions/app/navigatinRoute";

const Navigation: FC = () => {
  const pathname = usePathname()

  return (
    <nav className="md:flex hidden space-x-10 items-center">
      {NavigationRoute.map((link) => {
        const isActive = pathname === link.href
        return (
            <Link key={link.href} className={"hover:text-red-400 text-xl font-bold " + (isActive && "text-red-400")} href={link.href}>
              {link.name}
            </Link>
        )
      })}
    </nav>
  )
}

export default Navigation