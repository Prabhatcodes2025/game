import { Navigate } from 'react-router-dom'
import Admin from './Admin'
import { isAdminLoggedIn } from './auth'

export default function ProtectedAdmin() {
  return isAdminLoggedIn() ? (
    <Admin />
  ) : (
    <Navigate to="/admin-login" replace />
  )
}
