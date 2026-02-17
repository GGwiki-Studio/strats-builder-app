import { supabase } from "@/lib/supabase"

export async function getStrategiesWithRelations() {
  const { data, error } = await supabase
    .from("strategies")
    .select(`
      *,
      games ( id, name, slug ),
      maps ( id, name, slug )
    `)

  if (error) throw error

  return data
}