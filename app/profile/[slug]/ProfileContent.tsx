import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import LogoutButton from "./LogoutButton"

export default async function ProfileContent({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const {slug} = await params
  const parts = slug.split("-")
  const id = parts.slice(-5).join("-")

  const supabase = await createClient()

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single()

  if (!profile) {
    notFound()
  }

  return (
    <div>
      <h1>{profile.username}</h1>
      <LogoutButton />
    </div>
  )
}
