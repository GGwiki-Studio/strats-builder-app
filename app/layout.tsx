import './globals.css'
import { ReactNode, Suspense } from 'react'
import NavBarServer from '@/components/NavBarServer'

export const metadata = {
  title: 'GGWIKI',
  description: 'Game strategies and tactics wiki',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <NavBarServer />
        </Suspense>
        <main className='main'>
          {children}
        </main>
      </body>
    </html>
  )
}

