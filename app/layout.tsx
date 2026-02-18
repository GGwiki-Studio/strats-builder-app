import './globals.css'
import { ReactNode, Suspense } from 'react'
import NavBarServer from '@/components/NavBarServer'
import { SupabaseAuthProvider } from './providers/SupaBaseAuthProvider'

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
        <SupabaseAuthProvider>
          <Suspense fallback={null}>
            <NavBarServer />
          </Suspense>
          <main className='main'>
            {children}
          </main>
        </SupabaseAuthProvider>
      </body>
    </html>
  )
}

