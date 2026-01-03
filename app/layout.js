import './globals.css'
import './parallax.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Save Nature - Together We Can Make a Difference',
  description: 'Join us in our mission to protect and preserve our planet for future generations. Every action counts in saving nature.',
  keywords: 'save nature, environmental protection, conservation, sustainability, green earth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
