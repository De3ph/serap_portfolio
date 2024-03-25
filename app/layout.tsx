import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css"
import { AuroraBackground } from "@/components/aurora-bg"

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
    <html lang='en' className='dark'>
      <body>
        <div
          className={`${montserrat.className} py-16 max-w-5xl mx-auto text-balance`}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
