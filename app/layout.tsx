import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Shailender Sharma & Party',
  description: 'Shailender Sharma & Party',
  generator: 'Shailender Sharma & Party',
  icons: {
    icon: [
      {
        url: '/assets/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/assets/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/assets/logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/assets/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
   