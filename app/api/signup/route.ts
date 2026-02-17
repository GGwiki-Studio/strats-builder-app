import { createClient } from "@/lib/supabase/server"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, password, username } = body

  if (!email || !password || !username) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 })
  }

  const supabase = await createClient()

  // 1️⃣ Create user in Supabase Auth
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  })

  if (signUpError) {
    return NextResponse.json({ message: signUpError.message }, { status: 400 })
  }

  const user = signUpData.user

  if (!user) {
    return NextResponse.json({ message: "Failed to create user" }, { status: 500 })
  }

  // 2️⃣ Insert into profiles table
  const { error: profileError } = await supabase
    .from("profiles")
    .insert({
      id: user.id, // FK to auth.users
      username,
      created_at: new Date().toISOString(),
    })

  if (profileError) {
    return NextResponse.json({ message: profileError.message }, { status: 400 })
  }

  return NextResponse.json({ message: "User created successfully!" })
}
