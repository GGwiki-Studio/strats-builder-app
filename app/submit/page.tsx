// app/submit/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CSSProperties } from 'react'

export default function SubmitPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [game, setGame] = useState('')
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app: save to Supabase
    console.log('Strategy post submitted:', { 
      title, 
      content, 
      game, 
      category, 
      difficulty 
    })
    
    // Redirect home
    router.push('/home')
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Share a Game Strategy on GG-WIKI</h1>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label style={styles.label}>Title *</label>
          <input
            type="text"
            placeholder="e.g., Zerg early rush build order"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        
        <div style={styles.row}>
          <div style={styles.field}>
            <label style={styles.label}>Game *</label>
            <select 
              value={game} 
              onChange={(e) => setGame(e.target.value)}
              style={styles.select}
              required
            >
              <option value="">Select game</option>
              <option>StarCraft 2</option>
              <option>Dota 2</option>
              <option>Minecraft</option>
              <option>League of Legends</option>
              <option>Valorant</option>
              <option>Elden Ring</option>
              <option>CS2</option>
              <option>Other</option>
            </select>
          </div>
          
          <div style={styles.field}>
            <label style={styles.label}>Category *</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              style={styles.select}
              required
            >
              <option value="">Select category</option>
              <option>Build Order</option>
              <option>Counter Strategy</option>
              <option>Farm Design</option>
              <option>Pathing</option>
              <option>Lineups</option>
              <option>Speedrun</option>
              <option>PvP Tactics</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        
        <div style={styles.field}>
          <label style={styles.label}>Difficulty *</label>
          <div style={styles.difficultyGroup}>
            {['Beginner', 'Intermediate', 'Advanced'].map(level => (
              <label key={level} style={styles.radioLabel}>
                <input
                  type="radio"
                  name="difficulty"
                  value={level}
                  checked={difficulty === level}
                  onChange={(e) => setDifficulty(e.target.value)}
                  required
                />
                {level}
              </label>
            ))}
          </div>
        </div>
        
        <div style={styles.field}>
          <label style={styles.label}>Strategy Details *</label>
          <textarea
            placeholder="Explain the strategy, timing, key points..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={styles.textarea}
            rows={8}
            required
          />
        </div>
        
        <div style={styles.buttons}>
          <button type="button" onClick={() => router.back()} style={styles.cancel}>
            Cancel
          </button>
          <button type="submit" style={styles.submit}>
            Post Strategy
          </button>
        </div>
      </form>
    </div>
  )
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    marginBottom: '16px',
  },
  field: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '6px',
    color: '#1a1a1b',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    backgroundColor: 'white',
  },
  difficultyGroup: {
    display: 'flex',
    gap: '20px',
    padding: '8px 0',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontFamily: 'inherit',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
    marginTop: '8px',
  },
  cancel: {
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  submit: {
    padding: '10px 20px',
    backgroundColor: '#0079d3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  }
}