'use client'

import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function LogoutButton() {
  const supabase = createClient()
  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error("Logout failed:", error.message)
    } else {
      router.push("/signin")
    }
  }

  return (
    <button
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
    </button>
  )
}
