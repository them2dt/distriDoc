import "../style/globals.css"
import "../style/navigation.css"
import "../style/home.css"

export const metadata = {
  title: 'DistriDoc',
  description: 'A new way to publish.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
