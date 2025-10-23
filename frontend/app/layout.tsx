import type { Metadata } from 'next'
import './globals.css'
import { WalletProvider } from '@/hooks/use-wallet'
import { LoadingProvider } from '@/hooks/use-loading'
import { PageTransitionLoader } from '@/components/page-transition-loader'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://terralinke.vercel.app'),
  title: 'TerraLinke - Climate Impact Funding',
  description: 'TerraLinke: AI-Governed DAO for Climate Impact - Revolutionizing green project funding with hybrid intelligence on Algorand',
  generator: 'Next.js',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'TerraLinke - Climate Impact Funding',
    description: 'TerraLinke: AI-Governed DAO for Climate Impact on Algorand Blockchain',
    type: 'website',
    images: ['/icon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TerraLinke - Climate Impact Funding',
    description: 'TerraLinke: AI-Governed DAO for Climate Impact on Algorand Blockchain',
    images: ['/icon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LoadingProvider>
          <WalletProvider>
            <PageTransitionLoader />
            {children}
          </WalletProvider>
        </LoadingProvider>
      </body>
    </html>
  )
}
