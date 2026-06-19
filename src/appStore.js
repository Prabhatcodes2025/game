import { useEffect, useState } from 'react'
import { defaultApps } from './data'

const STORAGE_KEY = 'all-yono-apps'
const CHANGE_EVENT = 'all-yono-apps-changed'

function isValidApp(app) {
  return (
    app &&
    typeof app.id === 'string' &&
    typeof app.name === 'string' &&
    typeof app.downloadUrl === 'string' &&
    (app.section === 'all' || app.section === 'new')
  )
}

export function getStoredApps() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultApps))
      return defaultApps
    }

    const parsed = JSON.parse(saved)
    return Array.isArray(parsed) && parsed.every(isValidApp)
      ? parsed
      : defaultApps
  } catch {
    return defaultApps
  }
}

export function saveApps(apps) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps))
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

export function useApps() {
  const [apps, setApps] = useState(() => getStoredApps())

  useEffect(() => {
    const syncApps = () => setApps(getStoredApps())
    window.addEventListener('storage', syncApps)
    window.addEventListener(CHANGE_EVENT, syncApps)

    return () => {
      window.removeEventListener('storage', syncApps)
      window.removeEventListener(CHANGE_EVENT, syncApps)
    }
  }, [])

  return apps
}
