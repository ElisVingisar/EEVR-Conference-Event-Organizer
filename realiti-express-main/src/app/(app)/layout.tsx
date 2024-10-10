import type { Metadata } from 'next'
import { Inter, Sanchez, League_Spartan } from 'next/font/google'
import './../globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'



const inter = Inter({ subsets: ['latin'] })
const sanchez = Sanchez({ weight: '400', subsets: ['latin'], variable: '--font-sanchez' })
const leagueSpartan = League_Spartan({

  subsets: ['latin'],
  variable: '--font-league-spartan',
})

export const metadata: Metadata = {
  title: 'Realiti.express',
  description: 'realiti.express is a two-day conference that aspires to become the premier annual gathering for XR developers in the Baltic states and beyond. Organized by the Estonian VR and AR Association (EEVR)',
  openGraph: {
    title: 'Realiti.express',
    description: 'realiti.express is a two-day conference that aspires to become the premier annual gathering for XR developers in the Baltic states and beyond. Organized by the Estonian VR and AR Association (EEVR)',
    type: 'website',
    images: [
      {
        url: '/assets/header.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
    siteName: 'Realiti.express',
    // url: 'http://realiti.express',
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/* <meta property="og:title" content="realiti.express" />
        <meta property="og:description" content="realiti.express is a two-day conference that aspires to become the premier annual gathering for XR developers in the Baltic states and beyond. Organized by the Estonian VR and AR Association (EEVR)" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/header.png" /> */}
        {/* <meta property="og:url" content="http://realiti.express" /> */}
        {/* <meta property="og:site_name" content="SiteName" /> */}

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@username" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} /> */}

        <style>
          {`
            html {
              scroll-behavior: smooth;
            }
          `}
        </style>
      </head>
      <body className={`${sanchez.variable} ${leagueSpartan.variable} font-sans`}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""} />

    </html>
  )
}
