// app/post/[id]/page.tsx
import VoteButtons from '@/app/components/VoteButtons'
import { Post } from '@/app/types'
import { CSSProperties } from 'react'

// Sample data (replace with Supabase later)
const samplePosts: Record<number, Post> = {
  1: {
    id: 1,
    title: "Zerg early game rush strategy (StarCraft 2)",
    content: "6 pool into speedling expand - Here's the exact build order and timings. The key is to delay your opponent's natural expansion while taking map control...",
    author: "zerg_master",
    votes: 156,
    comments: 34,
    time: "3 hours ago",
    game: "StarCraft 2",
    category: "Build Order",
    difficulty: "Intermediate"
  },
  2: {
    id: 2,
    title: "How to counter Spirit Breaker as support (Dota 2)",
    content: "Glimmer Cape timing and positioning tips to save your carry. Always keep vision on the map and save your stun for when he charges...",
    author: "support_main",
    votes: 89,
    comments: 21,
    time: "5 hours ago",
    game: "Dota 2",
    category: "Counter Strategy",
    difficulty: "Intermediate"
  },
  3: {
    id: 3,
    title: "Minecraft 1.20: Ultimate villager trading hall setup",
    content: "Step-by-step guide to getting max level trades in 30 minutes. You need a curing chamber, zombie, and at least 10 villagers to start...",
    author: "block_gamer",
    votes: 312,
    comments: 67,
    time: "1 day ago",
    game: "Minecraft",
    category: "Farm Design",
    difficulty: "Beginner"
  }
}

// Sample comments
const sampleComments = [
  {
    id: 1,
    postId: 1,
    author: "experienced_dev",
    content: "Great build order! I'd add that you should scout at 13 supply to confirm.",
    votes: 12,
    time: "1 hour ago"
  },
  {
    id: 2,
    postId: 1,
    author: "js_fanatic",
    content: "What's the response if they wall off?",
    votes: 8,
    time: "45 minutes ago"
  },
  {
    id: 3,
    postId: 2,
    author: "beginner_coder",
    content: "This saved my game, thanks!",
    votes: 3,
    time: "30 minutes ago"
  }
]

// FIXED: params type
type PageProps = {
  params: Promise<{
    id: string
  }>
}

// FIXED: Make sure it's a default export with async
export default async function Page({ params }: PageProps) {
  const { id } = await params
  const postId = parseInt(id)
  const post = samplePosts[postId]
  const comments = sampleComments.filter(c => c.postId === postId)

  if (!post) {
    return (
      <div style={styles.notFound}>
        <h1>404</h1>
        <p>Post not found</p>
        <a href="/" style={styles.homeLink}>← Back to home</a>
      </div>
    )
  }

  // Helper for difficulty color
  const getDifficultyColor = (difficulty?: string) => {
    switch(difficulty) {
      case 'Beginner': return '#4caf50';
      case 'Intermediate': return '#ff9800';
      case 'Advanced': return '#f44336';
      default: return '#787c7e';
    }
  }

  return (
    <div style={styles.container}>
      {/* Back button */}
      <a href="/" style={styles.backLink}>
        ← Back to all posts
      </a>

      {/* Post */}
      <div style={styles.postCard}>
        <div style={styles.postHeader}>
          <div style={styles.voteSection}>
            <VoteButtons votes={post.votes} />
          </div>
          <div style={styles.postTitleSection}>
            <h1 style={styles.postTitle}>{post.title}</h1>
            
            {/* Tags */}
            <div style={styles.tags}>
              {post.game && (
                <span style={styles.gameTag}>🎮 {post.game}</span>
              )}
              {post.category && (
                <span style={styles.categoryTag}>📋 {post.category}</span>
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
            
            <div style={styles.postMeta}>
              <span>Posted by u/{post.author}</span>
              <span style={styles.sep}>•</span>
              <span>{post.time}</span>
            </div>
          </div>
        </div>
        
        <div style={styles.postContent}>
          <p>{post.content}</p>
        </div>
      </div>

      {/* Comment form */}
      <div style={styles.commentForm}>
        <textarea 
          placeholder="Share your thoughts on this strategy..."
          style={styles.commentInput}
          rows={3}
        />
        <button style={styles.commentButton}>
          Comment
        </button>
      </div>

      {/* Comments section */}
      <div style={styles.commentsSection}>
        <h3 style={styles.commentsTitle}>
          Comments ({comments.length})
        </h3>
        
        {comments.length === 0 ? (
          <p style={styles.noComments}>No comments yet. Be the first to discuss this strategy!</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} style={styles.comment}>
              <div style={styles.commentVote}>
                <VoteButtons votes={comment.votes} />
              </div>
              <div style={styles.commentContent}>
                <div style={styles.commentMeta}>
                  <span style={styles.commentAuthor}>u/{comment.author}</span>
                  <span style={styles.sep}>•</span>
                  <span style={styles.commentTime}>{comment.time}</span>
                </div>
                <p style={styles.commentText}>{comment.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '20px',
    color: '#0079d3',
    textDecoration: 'none',
    fontSize: '14px',
  },
  postCard: {
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
  },
  postHeader: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
  },
  voteSection: {
    flexShrink: 0,
  },
  postTitleSection: {
    flex: 1,
  },
  postTitle: {
    margin: '0 0 8px 0',
    fontSize: '24px',
    color: '#1a1a1b',
  },
  tags: {
    display: 'flex',
    gap: '8px',
    marginBottom: '8px',
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
  postMeta: {
    fontSize: '12px',
    color: '#787c7e',
    display: 'flex',
    gap: '4px',
  },
  sep: {
    margin: '0 4px',
  },
  postContent: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#1a1a1b',
    paddingLeft: '48px',
  },
  commentForm: {
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '20px',
  },
  commentInput: {
    width: '100%',
    padding: '12px',
    fontSize: '14px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    marginBottom: '12px',
    fontFamily: 'inherit',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
  commentButton: {
    backgroundColor: '#0079d3',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    float: 'right',
  },
  commentsSection: {
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
  },
  commentsTitle: {
    margin: '0 0 16px 0',
    fontSize: '16px',
    color: '#1a1a1b',
    paddingBottom: '8px',
    borderBottom: '1px solid #e0e0e0',
  },
  noComments: {
    color: '#787c7e',
    fontSize: '14px',
    textAlign: 'center',
    padding: '20px',
  },
  comment: {
    display: 'flex',
    gap: '12px',
    padding: '12px 0',
    borderBottom: '1px solid #f0f0f0',
  },
  commentVote: {
    flexShrink: 0,
  },
  commentContent: {
    flex: 1,
  },
  commentMeta: {
    fontSize: '12px',
    color: '#787c7e',
    marginBottom: '4px',
    display: 'flex',
    gap: '4px',
  },
  commentAuthor: {
    fontWeight: 'bold',
    color: '#1a1a1b',
  },
  commentTime: {
    color: '#787c7e',
  },
  commentText: {
    margin: '0',
    fontSize: '14px',
    color: '#1a1a1b',
  },
  notFound: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  homeLink: {
    display: 'inline-block',
    marginTop: '20px',
    color: '#0079d3',
    textDecoration: 'none',
  }
}