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
    <html>
      <body className="flex flex-col h-screen relative">
        <Header/>
        <main className="flex-grow h-[calc(100vh-64px)]">
          {children}
        </main>
      </body>
    </html>
  )
}
