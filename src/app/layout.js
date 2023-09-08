import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Buddhist Painting Market',
  description: 'We Are Buddhist Painting Market',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header>
        </Header>
        <main>
          {children}
        </main>

        </body>
    </html>
  )
}
