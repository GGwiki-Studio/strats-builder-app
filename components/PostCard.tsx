// app/components/PostCard.tsx
import VoteButtons from './VoteButtons'
import { PostCardProps } from '../app/types'

export default function PostCard({ post }: PostCardProps) {
  // Helper function for difficulty colors
  const getDifficultyColor = (difficulty?: string) => {
    switch(difficulty) {
      case 'Beginner': return '#4caf50';  // Green
      case 'Intermediate': return '#ff9800'; // Orange
      case 'Advanced': return '#f44336';  // Red
      default: return '#787c7e';
    }
  }

  return (
    <div style={styles.card}>
      <div style={styles.voteSection}>
        <VoteButtons votes={post.votes} />
      </div>
      
      <div style={styles.content}>
        <div style={styles.header}>
          <h3 style={styles.title}>
            <a href={`/post/${post.id}`} style={styles.titleLink}>
              {post.title}
            </a>
          </h3>
          
          {/* Game tags */}
          <div style={styles.tags}>
            {post.game && (
              <span style={styles.gameTag}>
                🎮 {post.game}
              </span>
            )}
            {post.category && (
              <span style={styles.categoryTag}>
                📋 {post.category}
              </span>
            )}
            {post.difficulty && (
              <span style={{
                ...styles.difficultyTag,
                backgroundColor: getDifficultyColor(post.difficulty),
                color: 'white'
              }}>
                {post.difficulty}
              </span>
            )}
          </div>
        </div>
        
        <p style={styles.postContent}>{post.content}</p>
        
        <div style={styles.meta}>
          <span>Posted by u/{post.author}</span>
          <span style={styles.sep}>•</span>
          <span>{post.time}</span>
          <span style={styles.sep}>•</span>
          <span style={styles.comments}>
            💬 {post.comments} comments
          </span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    display: 'flex',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '12px',
  },
  voteSection: {
    marginRight: '16px',
  },
  content: {
    flex: 1,
  },
  header: {
    marginBottom: '8px',
  },
  title: {
    margin: '0 0 6px 0',
    fontSize: '18px',
  },
  titleLink: {
    textDecoration: 'none',
    color: '#1a1a1b',
    fontWeight: 500,
  },
  tags: {
    display: 'flex',
    gap: '8px',
    marginBottom: '6px',
  },
  gameTag: {
    backgroundColor: '#e3f2fd',
    color: '#0d47a1',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: 'bold',
  },
  categoryTag: {
    backgroundColor: '#f3e5f5',
    color: '#4a148c',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: 'bold',
  },
  difficultyTag: {
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: 'bold',
  },
  postContent: {
    margin: '8px 0',
    color: '#4a4a4a',
    fontSize: '14px',
  },
  meta: {
    fontSize: '12px',
    color: '#787c7e',
    display: 'flex',
    gap: '4px',
  },
  sep: {
    margin: '0 4px',
  },
  comments: {
    cursor: 'pointer',
  }
}