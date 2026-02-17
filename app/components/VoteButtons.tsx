// app/components/VoteButtons.tsx
'use client'

import { useState } from 'react'
import { VoteButtonsProps } from '../types'

type VoteType = -1 | 0 | 1

export default function VoteButtons({ votes: initialVotes }: VoteButtonsProps) {
  const [votes, setVotes] = useState<number>(initialVotes)
  const [userVote, setUserVote] = useState<VoteType>(0)

  const handleVote = (type: VoteType) => {
    if (userVote === type) {
      // Remove vote
      setVotes(votes - type)
      setUserVote(0)
    } else {
      // Change vote
      setVotes(votes - userVote + type)
      setUserVote(type)
    }
  }

  return (
    <div style={styles.container}>
      <button 
        onClick={() => handleVote(1)}
        style={{
          ...styles.button,
          ...(userVote === 1 ? styles.upvoted : {})
        }}
      >
        ▲
      </button>
      
      <span style={styles.voteCount}>{votes}</span>
      
      <button 
        onClick={() => handleVote(-1)}
        style={{
          ...styles.button,
          ...(userVote === -1 ? styles.downvoted : {})
        }}
      >
        ▼
      </button>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '4px',
  },
  button: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '0',
    color: '#878a8c',
  },
  voteCount: {
    fontSize: '14px',
    fontWeight: 'bold' as const,
    color: '#1a1a1b',
  },
  upvoted: {
    color: '#ff4500',
  },
  downvoted: {
    color: '#7193ff',
  }
}