// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'GGWIKI',
  description: 'Game strategies and tactics wiki',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={styles.header}>
          <div style={styles.container}>
            <a href="/home" style={styles.logo}>GGWIKI</a>
            <nav style={styles.nav}>
              <a href="/signin" style={styles.navLink}>Sign In</a>
              <a href="/submit" style={styles.button}>+ New Post</a>
            </nav>
          </div>
        </header>
        <main style={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}

const styles = {
  header: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    textDecoration: 'none',
    color: '#0079d3',
    letterSpacing: '-0.5px',
  },
  nav: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  navLink: {
    color: '#0079d3',
    textDecoration: 'none',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#0079d3',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '14px',
  },
  main: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '0 20px',
  },
}