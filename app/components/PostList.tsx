// app/components/PostList.tsx
import PostCard from './PostCard'
import { PostListProps } from '../types'

export default function PostList({ posts }: PostListProps) {
  if (!posts || posts.length === 0) {
    return (
      <div style={styles.empty}>
        <p>No posts yet. Be the first to post!</p>
        <a href="/submit" style={styles.link}>Create a post →</a>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  empty: {
    textAlign: 'center' as const,
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  link: {
    color: '#0079d3',
    textDecoration: 'none',
  }
}