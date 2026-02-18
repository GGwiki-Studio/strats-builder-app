// app/games/[slug]/GameStrategies.tsx
import { supabase } from "@/lib/supabase"
import { use } from "react"

export function GameStrategies({ params }: { params: Promise<{ slug: string }> }) {
  // Use the `use` hook to unwrap the Promise inside the component
  const { slug } = use(params)
  
  return <GameStrategiesContent slug={slug} />
}

async function GameStrategiesContent({ slug }: { slug: string }) {
  const { data: game, error: gameError } = await supabase
    .from("games")
    .select("*")
    .eq("slug", slug)
    .single()

  if (gameError || !game) return <div>Game not found</div>

  const { data: strategies, error } = await supabase
    .from("strategies")
    .select(`
      *,
      maps ( id, name, slug )
    `)
    .eq("game_id", game.id)

  if (error) throw error

  return (
    <div>
      <h1>{game.name}</h1>
      {strategies?.map((strategy) => (
        <div key={strategy.id}>
          <h2>{strategy.title}</h2>
          <p>Map: {strategy.maps?.name}</p>
        </div>
      ))}
    </div>
  )
}