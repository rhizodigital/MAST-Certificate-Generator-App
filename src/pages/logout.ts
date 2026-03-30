/**
 * Logout endpoint — clears the session cookie and redirects to login.
 * Access: GET /logout
 */
export const prerender = false;

import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ cookies, redirect }) => {
  cookies.delete('cert_session', { path: '/' });
  return redirect('/login');
};
