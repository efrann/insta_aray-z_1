import './globals.css'

export const metadata = {
  title: 'Instagram Analyzer',
  description: 'Analyze Instagram profiles',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}