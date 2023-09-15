import { usePathname } from 'next/navigation'
import { FC } from 'react';
import React from 'react';
import Link from "next/link";
import {NavigationRoute} from "@/common/definitions/app/navigatinRoute";

const NavigationMobile:FC = () => {
  const pathname = usePathname()

  return (
    <nav className="space-y-2 py-6">
      {NavigationRoute.map((link) => {
        const isActive = pathname === link.href
        return (
            <Link
                key={link.href}
                className={"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-blue-200 " + (isActive && "text-red-400")}
                href={link.href}
            >
              {link.name}
            </Link>
        )
      })}
    </nav>
  )
}

export default NavigationMobile