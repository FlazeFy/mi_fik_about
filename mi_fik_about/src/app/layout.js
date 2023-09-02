import '../modules/styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MI-FIK',
  description: 'MI-FIK is an app made for event organizing and announcement that will be used for lecturer, staff, and student of School of Creative Industries Telkom University',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
