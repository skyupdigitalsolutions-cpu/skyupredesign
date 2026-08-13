// pages/admin/export-invoice/+guard.js
export { guard }

import { redirect } from 'vike/abort'

async function guard(pageContext) {
  const token = typeof window !== 'undefined'
    ? localStorage.getItem('adminToken')
    : null

  if (!token) {
    throw redirect('/admin')
  }

  let payload
  try {
    payload = JSON.parse(atob(token.split('.')[1]))
  } catch {
    throw redirect('/admin') // malformed token
  }

  // Only admin can access the export invoice generator
  if (payload.role !== 'admin') {
    throw redirect('/admin')
  }
}