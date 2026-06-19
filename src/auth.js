const AUTH_KEY = 'all-yono-admin-authenticated'

export function isAdminLoggedIn() {
  return localStorage.getItem(AUTH_KEY) === 'true'
}

export function loginAdmin(username, password) {
  const isValid = username === 'admin' && password === 'admin123'
  if (isValid) localStorage.setItem(AUTH_KEY, 'true')
  return isValid
}

export function logoutAdmin() {
  localStorage.removeItem(AUTH_KEY)
}
