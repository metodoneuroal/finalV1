import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { AudioPlayerProvider } from '@/lib/audio-context'
import { GlobalAudioPlayer } from '@/components/global-audio-player'
import './globals.css'

export const metadata: Metadata = {
  title: 'NEURON',
  description: 'Ative seu potencial cognitivo com o NEURON',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#07070D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <AudioPlayerProvider>
          {children}
          <GlobalAudioPlayer />
        </AudioPlayerProvider>
        <Analytics />
      </body>
    </html>
  )
}
