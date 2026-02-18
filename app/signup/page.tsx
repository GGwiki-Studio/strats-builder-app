'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message)
      } else {
        router.push('/signin')
      }
    } catch (err) {
      setError('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">Create your account</h1>
        <p className="form-subtitle">Sign up to GGWIKI and start adding strategies</p>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={handleSubmit} className="form-form">
          <div className="form-field">
            <label className="form-label">Username</label>
            <input
              type="text"
              placeholder="Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="form-button" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <div className="form-footer">
          <p>Already have an account?</p>
          <a href="/signin" className="form-link">Sign in</a>
        </div>
      </div>
    </div>
  )
}
