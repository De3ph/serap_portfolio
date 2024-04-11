import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Serap Fişenkçi",
  description: "Designer"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='light'>
      <body className='bg-no-repeat bg-center tracking-wide text-neutral-800 bg-gradient-to-br from-slate-300 to-neutral-100  dark:bg-neutral-900'>
        <div
          className={`${montserrat.className} py-16 px-4 max-w-5xl mx-auto text-balance select-none`}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
// bg-gradient-to-b from-stone-100 to bg-blue-200 text-neutral-950 dark:text-neutral-100