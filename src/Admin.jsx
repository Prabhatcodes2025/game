import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ImagePlus,
  LogOut,
  Pencil,
  Plus,
  RotateCcw,
  Save,
  Trash2,
  X,
} from 'lucide-react'
import { defaultApps } from './data'
import { saveApps, useApps } from './appStore'
import { logoutAdmin } from './auth'

const emptyForm = {
  name: '',
  bonus: '',
  withdrawal: '',
  downloadUrl: '',
  section: 'all',
  icon: '',
}

function normalizeAmount(value) {
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed.startsWith('₹') ? trimmed : `₹${trimmed}`
}

function createId() {
  return globalThis.crypto?.randomUUID?.() ?? `app-${Date.now()}`
}

export default function Admin() {
  const navigate = useNavigate()
  const apps = useApps()
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')

  const visibleApps = useMemo(
    () => apps.filter((app) => filter === 'both' || app.section === filter),
    [apps, filter],
  )

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setError('')
  }

  const resetForm = () => {
    setForm(emptyForm)
    setEditingId(null)
    setError('')
  }

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file.')
      return
    }

    const reader = new FileReader()
    reader.onload = () => updateField('icon', String(reader.result))
    reader.readAsDataURL(file)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.downloadUrl.trim()) {
      setError('App name and download link are required.')
      return
    }

    const existing = apps.find((app) => app.id === editingId)
    const nextApp = {
      ...existing,
      id: editingId || createId(),
      name: form.name.trim(),
      bonus: normalizeAmount(form.bonus),
      withdrawal: normalizeAmount(form.withdrawal),
      downloadUrl: form.downloadUrl.trim(),
      section: form.section,
      icon: form.icon.trim(),
      initials: existing?.initials || form.name.trim().slice(0, 2).toUpperCase(),
      gradient: existing?.gradient || 'from-emerald-800 to-green-500',
    }

    saveApps(
      editingId
        ? apps.map((app) => (app.id === editingId ? nextApp : app))
        : [...apps, nextApp],
    )
    resetForm()
  }

  const editApp = (app) => {
    setEditingId(app.id)
    setForm({
      name: app.name,
      bonus: app.bonus?.replace('₹', '') || '',
      withdrawal: app.withdrawal?.replace('₹', '') || '',
      downloadUrl: app.downloadUrl,
      section: app.section,
      icon: app.icon || '',
    })
    setError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const deleteApp = (id) => {
    if (!window.confirm('Delete this app card?')) return
    saveApps(apps.filter((app) => app.id !== id))
    if (editingId === id) resetForm()
  }

  const restoreDefaults = () => {
    if (!window.confirm('Restore all default demo apps?')) return
    saveApps(defaultApps)
    resetForm()
  }

  const handleLogout = () => {
    logoutAdmin()
    navigate('/admin-login', { replace: true })
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
              All Yono App
            </p>
            <h1 className="text-xl font-extrabold sm:text-2xl">App Admin</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-bold hover:bg-slate-50"
            >
              <ArrowLeft size={17} />
              <span className="hidden sm:inline">Homepage</span>
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-bold text-white hover:bg-red-700"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[380px_1fr]">
        <section className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold">
              {editingId ? 'Edit App' : 'Add New App'}
            </h2>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Cancel editing"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-bold">
              App name *
              <input
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-medium outline-none focus:border-brand-500"
                placeholder="Example: Yono Rummy"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="block text-sm font-bold">
                Signup Bonus
                <input
                  value={form.bonus}
                  onChange={(event) => updateField('bonus', event.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-medium outline-none focus:border-brand-500"
                  placeholder="50"
                />
              </label>
              <label className="block text-sm font-bold">
                Min Withdrawal
                <input
                  value={form.withdrawal}
                  onChange={(event) =>
                    updateField('withdrawal', event.target.value)
                  }
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-medium outline-none focus:border-brand-500"
                  placeholder="100"
                />
              </label>
            </div>

            <label className="block text-sm font-bold">
              Download link *
              <input
                value={form.downloadUrl}
                onChange={(event) =>
                  updateField('downloadUrl', event.target.value)
                }
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-medium outline-none focus:border-brand-500"
                placeholder="https://example.com/download"
              />
            </label>

            <label className="block text-sm font-bold">
              Section
              <select
                value={form.section}
                onChange={(event) => updateField('section', event.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-medium outline-none focus:border-brand-500"
              >
                <option value="all">All Apps</option>
                <option value="new">New Apps</option>
              </select>
            </label>

            <label className="block text-sm font-bold">
              Logo image URL
              <input
                value={form.icon}
                onChange={(event) => updateField('icon', event.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-medium outline-none focus:border-brand-500"
                placeholder="https://example.com/logo.png"
              />
            </label>

            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 px-3 py-3 text-sm font-bold text-slate-600 hover:border-brand-500 hover:text-brand-600">
              <ImagePlus size={18} />
              Upload logo image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="sr-only"
              />
            </label>

            {form.icon && (
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                <img
                  src={form.icon}
                  alt="Logo preview"
                  className="h-14 w-14 rounded-lg object-contain"
                />
                <button
                  type="button"
                  onClick={() => updateField('icon', '')}
                  className="text-xs font-bold text-red-600"
                >
                  Remove image
                </button>
              </div>
            )}

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-bold text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-extrabold text-white hover:bg-green-700"
            >
              {editingId ? <Save size={17} /> : <Plus size={17} />}
              {editingId ? 'Save Changes' : 'Add App'}
            </button>
          </form>
        </section>

        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold">Manage Apps</h2>
              <p className="text-sm text-slate-500">{apps.length} saved apps</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold"
              >
                <option value="both">All sections</option>
                <option value="all">All Apps</option>
                <option value="new">New Apps</option>
              </select>
              <button
                type="button"
                onClick={restoreDefaults}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold hover:bg-slate-50"
              >
                <RotateCcw size={16} /> Restore defaults
              </button>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {visibleApps.map((app) => (
              <article
                key={app.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4"
              >
                {app.icon ? (
                  <img
                    src={app.icon}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded-lg object-contain sm:h-16 sm:w-16"
                  />
                ) : (
                  <div
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${app.gradient} font-black text-white sm:h-16 sm:w-16`}
                  >
                    {app.initials}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="truncate font-extrabold">{app.name}</h3>
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-extrabold uppercase text-blue-700">
                      {app.section === 'new' ? 'New Apps' : 'All Apps'}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-bold text-orange-600">
                    Bonus: {app.bonus || 'Not set'} · Withdrawal:{' '}
                    {app.withdrawal || 'Not set'}
                  </p>
                  <p className="mt-1 truncate text-xs text-slate-400">
                    {app.downloadUrl}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    onClick={() => editApp(app)}
                    className="rounded-lg p-2 text-blue-700 hover:bg-blue-50"
                    aria-label={`Edit ${app.name}`}
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteApp(app.id)}
                    className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                    aria-label={`Delete ${app.name}`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
