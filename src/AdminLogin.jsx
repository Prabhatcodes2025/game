import { useState } from 'react'
import { ArrowLeft, Eye, EyeOff, LockKeyhole, LogIn, User } from 'lucide-react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { isAdminLoggedIn, loginAdmin } from './auth'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  if (isAdminLoggedIn()) {
    return <Navigate to="/admin" replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!username.trim() || !password) {
      setError('Enter your username and password.')
      return
    }

    if (!loginAdmin(username.trim(), password)) {
      setError('Invalid username or password.')
      return
    }

    navigate('/admin', { replace: true })
  }

  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-brand-600"
        >
          <ArrowLeft size={17} />
          Back to homepage
        </Link>

        <div className="mt-7 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-soft">
            <LockKeyhole size={27} />
          </span>
          <h1 className="mt-4 text-2xl font-extrabold text-brand-900">
            Admin Login
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Sign in to manage homepage applications.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <label className="block text-sm font-bold text-slate-700">
            Username
            <span className="mt-1.5 flex items-center rounded-lg border border-slate-300 bg-white focus-within:border-brand-500">
              <User size={18} className="ml-3 shrink-0 text-slate-400" />
              <input
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value)
                  setError('')
                }}
                autoComplete="username"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 font-medium outline-none"
                placeholder="Enter username"
              />
            </span>
          </label>

          <label className="block text-sm font-bold text-slate-700">
            Password
            <span className="mt-1.5 flex items-center rounded-lg border border-slate-300 bg-white focus-within:border-brand-500">
              <LockKeyhole size={18} className="ml-3 shrink-0 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  setError('')
                }}
                autoComplete="current-password"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 font-medium outline-none"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                className="mr-2 rounded-md p-2 text-slate-400 hover:bg-slate-100"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </span>
          </label>

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2.5 text-sm font-bold text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-brand-700"
          >
            <LogIn size={18} />
            Login as Admin
          </button>
        </form>
      </section>
    </main>
  )
}
