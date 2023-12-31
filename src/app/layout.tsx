import '../../public/css/globals.css'
import type { Metadata } from 'next'
import {BaseLayout} from "@/common/templates";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type PropsType = {
  children: React.ReactNode
}

export default function RootLayout({children}: PropsType ) {
  return (
    <html lang="en">
        <BaseLayout>
          {children}
        </BaseLayout>
    </html>
  )
}
