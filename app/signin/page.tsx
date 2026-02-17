// app/signin/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CSSProperties } from 'react'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate login (replace with Supabase later)
    setTimeout(() => {
      if (email && password) {
        console.log('Sign in attempt:', { email, password })
        router.push('/home') // Redirect to posts after login
      } else {
        setError('Please fill in all fields')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Sign in to GG-WIKI</h1>
        <p style={styles.subtitle}>Welcome back! Sign in to your account</p>
        
        {error && (
          <div style={styles.error}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          <button 
            type="submit" 
            style={styles.button}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div style={styles.footer}>
          <p>Don't have an account?</p>
          <a href="/signup" style={styles.link}>Sign up</a>
        </div>
        
        <div style={styles.demo}>
          <p style={styles.demoTitle}>Demo Credentials:</p>
          <p style={styles.demoText}>Email: demo@example.com</p>
          <p style={styles.demoText}>Password: password123</p>
        </div>
      </div>
    </div>
  )
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: 'calc(100vh - 200px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '40px',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '28px',
    color: '#1a1a1b',
  },
  subtitle: {
    margin: '0 0 24px 0',
    color: '#787c7e',
    fontSize: '14px',
  },
  error: {
    backgroundColor: '#fee',
    border: '1px solid #fcc',
    color: '#c00',
    padding: '12px',
    borderRadius: '4px',
    marginBottom: '20px',
    fontSize: '14px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#1a1a1b',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontFamily: 'inherit',
  },
  button: {
    backgroundColor: '#0079d3',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '12px',
  },
  footer: {
    marginTop: '24px',
    textAlign: 'center' as const,
    fontSize: '14px',
    color: '#787c7e',
    display: 'flex',
    gap: '4px',
    justifyContent: 'center',
  },
  link: {
    color: '#0079d3',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  demo: {
    marginTop: '30px',
    padding: '16px',
    backgroundColor: '#f6f7f8',
    borderRadius: '4px',
    fontSize: '13px',
  },
  demoTitle: {
    fontWeight: 'bold',
    margin: '0 0 8px 0',
    color: '#1a1a1b',
  },
  demoText: {
    margin: '4px 0',
    color: '#787c7e',
  }
}