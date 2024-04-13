import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Serap Fişenkçi",
  description: "Designer",
  authors: [{ name: "Serap Fişenkçi" }],
  abstract: "Serap Fişenkçi'nin kişisel portfolyo sitesi",
  applicationName: "Serap Fişenkçi - Designer",
  keywords: [
    "Serap Fişenkçi",
    "Portfolio",
    "Designer",
    "Portfolyo",
    "UI/UX",
    "Tasarım",
    "Adobe"
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='light'>
      <body className='bg-no-repeat bg-center tracking-wide text-neutral-800 bg-gradient-to-br from-slate-300 to-neutral-100 dark:bg-none dark:bg-neutral-950/95 dark:text-neutral-100'>
        <div
          className={`${montserrat.className} py-16 px-4 max-w-5xl mx-auto text-balance select-none`}
        >
          {children}
        </div>
      </body>
    </html>
  )
}