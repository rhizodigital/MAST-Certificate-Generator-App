import { defineMiddleware } from 'astro:middleware';

const COOKIE = 'cert_session';

function token(user: string, pass: string) {
  return Buffer.from(`cert:${user}:${pass}`).toString('base64');
}

export const onRequest = defineMiddleware((context, next) => {
  const { url, cookies, redirect } = context;
  const path = url.pathname;

  // Public routes — no auth needed
  if (path === '/login' || path === '/logout' || path.startsWith('/_astro/') || path.startsWith('/favicon')) {
    return next();
  }

  const user     = (process.env.AUTH_USERNAME ?? 'admin').trim();
  const pass     = (process.env.AUTH_PASSWORD ?? 'changeme123').trim();
  const expected = token(user, pass);
  const session  = cookies.get(COOKIE)?.value ?? '';

  if (session !== expected) {
    return redirect('/login');
  }

  return next();
});
