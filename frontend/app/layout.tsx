import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { GoogleTagManager } from "@next/third-parties/google"; 
import { GoogleAnalytics } from "@next/third-parties/google";
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
});



export const metadata: Metadata = {
    metadataBase: new URL("https://atulyaitsolutions.com"),

  title: {
    default: "Atulya IT Solutions",
    template: "%s | Atulya IT Solutions",
  },

  description:
    "Web Development, WordPress, Next.js, SEO and Digital Marketing Services.",

  keywords: [
    "Web Development Company",
    "WordPress Development",
    "Next.js Development",
    "React Development",
    "SEO Services",
    "Website Maintenance",
    "Digital Marketing",
  ],
  icons: {
    icon: [
      {
        url: '/favicon-48x48.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-48x48.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon-48x48.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon-48x48.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <GoogleTagManager gtmId="GTM-NGSMM74C" /> && <GoogleAnalytics gaId="G-4EEMQTK68G" />}
      </body>
      
    </html>
  )
}
