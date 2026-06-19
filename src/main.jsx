import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Admin from './Admin'
import AdminLogin from './AdminLogin'
import { isAdminLoggedIn } from './auth'
import './index.css'

const path = window.location.pathname

if (path === '/admin' && !isAdminLoggedIn()) {
  window.location.replace('/admin-login')
}

const Page =
  path === '/admin'
    ? Admin
    : path === '/admin-login'
      ? AdminLogin
      : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
