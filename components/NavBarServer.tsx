import { createClient } from "@/lib/supabase/server"
import NavBar from "./NavBar"

export default async function NavBarServer() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  let profile = null

  if (user) {
    const { data } = await supabase
      .from("profiles")
      .select("id, username")
      .eq("id", user.id)
      .single()

    profile = data
  }

  return <NavBar user={profile} />
}
