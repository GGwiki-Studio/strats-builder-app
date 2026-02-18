'use client'
import { useSupabaseAuth } from "@/app/providers/SupaBaseAuthProvider"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function LogoutButton() {
  const { setUser } = useSupabaseAuth()
  const supabase = createClient()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null) // updates Navbar immediately
    router.push("/signin")
  }

  return (<button
      onClick={handleLogout}
      style={{
        backgroundColor: "#e53935",
        color: "white",
        padding: "8px 16px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        marginTop: "12px",
      }}
    >
      Logout
    </button>)
}
