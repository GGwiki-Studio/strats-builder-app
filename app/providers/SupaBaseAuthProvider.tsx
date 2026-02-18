'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

const SupabaseAuthContext = createContext<{ user: any; setUser: any } | undefined>(undefined)

export function SupabaseAuthProvider({ children }: { children: ReactNode }) {
  const supabase = createClient()
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  // Listen to auth changes
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
  }, [supabase])

  return (
    <SupabaseAuthContext.Provider value={{ user, setUser }}>
      {children}
    </SupabaseAuthContext.Provider>
  )
}

export const useSupabaseAuth = () => {
  const context = useContext(SupabaseAuthContext)
  if (!context) throw new Error("useSupabaseAuth must be used within SupabaseAuthProvider")
  return context
}
