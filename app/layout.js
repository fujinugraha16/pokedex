import './globals.css'
import { Lexend } from 'next/font/google'

export const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: 'Pokedéx FN',
  description: 'This is Pokedéx app by Fuji Nugraha',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className} bg-primary text-primary`}>
        {children}

        <div
          id="pokemon-background-image"
          className="absolute inset-0 -z-[1] opacity-40"
        />
      </body>
    </html>
  )
}
