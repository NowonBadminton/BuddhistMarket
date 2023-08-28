import './globals.css'
import Link from 'next/link'
export const metadata = {
  title: 'Buddhist Painting Market',
  description: 'We Are Buddhist Painting Market',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"original"}>Original</Link></li>
            <li><Link href={"copy"}>Copy</Link></li>
            <li><Link href={"collection"}>Collection</Link></li>
            <li><Link href={"etc"}>Etc</Link></li>
          </ul>
        </header>
        {children}
        </body>
    </html>
  )
}
