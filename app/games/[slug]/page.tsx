// app/games/[slug]/page.tsx
import { Suspense } from "react"
import { GameStrategies } from "./GameStrategies"

export default function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  // Don't await params here - pass the Promise to the component
  return (
    <Suspense fallback={<div>Loading strategies…</div>}>
      <GameStrategies params={params} />
    </Suspense>
  )
}