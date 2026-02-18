import { Suspense } from "react"
import ProfileContent from "./ProfileContent"

export default async function ProfilePage({params}: {  params: Promise<{ slug: string }>}) {

  return (
    <Suspense fallback={<div>Loading profile...</div>}>
      <ProfileContent params={params} />
    </Suspense>
  )
}
