import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: {
    default: 'Buddhist Painting Market',
    template: '%s | Buddhist Painting Market',
  },
  description: 'We Are Buddhist Painting Market',
}

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
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
