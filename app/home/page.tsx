// app/home/page.tsx
import PostList from '../../components/PostList'
import { Post } from '../types'
import { CSSProperties } from 'react'

const samplePosts: Post[] = [
  {
    id: 1,
    title: "Zerg early game rush strategy (StarCraft 2)",
    content: "6 pool into speedling expand - Here's the exact build order and timings...",
    author: "zerg_master",
    votes: 156,
    comments: 34,
    time: "3 hours ago",
    game: "StarCraft 2",
    category: "Build Order",
    difficulty: "Intermediate"
  },
  {
    id: 2,
    title: "How to counter Spirit Breaker as support (Dota 2)",
    content: "Glimmer Cape timing and positioning tips to save your carry...",
    author: "support_main",
    votes: 89,
    comments: 21,
    time: "5 hours ago",
    game: "Dota 2",
    category: "Counter Strategy",
    difficulty: "Intermediate"
  },
  {
    id: 3,
    title: "Minecraft 1.20: Ultimate villager trading hall setup",
    content: "Step-by-step guide to getting max level trades in 30 minutes...",
    author: "block_gamer",
    votes: 312,
    comments: 67,
    time: "1 day ago",
    game: "Minecraft",
    category: "Farm Design",
    difficulty: "Beginner"
  },
  {
    id: 4,
    title: "League of Legends: Jungle pathing for patch 14.5",
    content: "Full clear into gank top - 3:15 camp respawn timings explained...",
    author: "jungle_diff",
    votes: 203,
    comments: 45,
    time: "8 hours ago",
    game: "League of Legends",
    category: "Pathing",
    difficulty: "Advanced"
  },
  {
    id: 5,
    title: "Valorant: Best Astra smoke lineups on Bind",
    content: "One-way smokes and post-plant lineups from B long...",
    author: "smoke_God",
    votes: 178,
    comments: 29,
    time: "12 hours ago",
    game: "Valorant",
    category: "Lineups",
    difficulty: "Advanced"
  },
  {
    id: 6,
    title: "Elden Ring: Early game rune farm for beginners",
    content: "Get to level 50 in first hour without fighting any bosses...",
    author: "tarnished_one",
    votes: 567,
    comments: 98,
    time: "2 days ago",
    game: "Elden Ring",
    category: "Farm",
    difficulty: "Beginner"
  }
]

export default function HomePage() {
  return (
    <div>
      <div style={styles.filters}>
        <select style={styles.filterSelect}>
          <option>All Games</option>
          <option>StarCraft 2</option>
          <option>Dota 2</option>
          <option>Minecraft</option>
          <option>League of Legends</option>
          <option>Valorant</option>
          <option>Elden Ring</option>
        </select>
        
        <select style={styles.filterSelect}>
          <option>All Categories</option>
          <option>Build Order</option>
          <option>Counter Strategy</option>
          <option>Farm Design</option>
          <option>Pathing</option>
          <option>Lineups</option>
        </select>
        
        <select style={styles.filterSelect}>
          <option>All Difficulties</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>
      
      <PostList posts={samplePosts} />
    </div>
  )
}

const styles: { [key: string]: CSSProperties } = {
  filters: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
  },
  filterSelect: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    backgroundColor: 'white',
    flex: 1,
  }
}