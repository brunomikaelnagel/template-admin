import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('admin-template-auth');

  if (cookie && Boolean(cookie.value)) {
    const pathname = new URL(request.url).pathname;

    if (pathname === "/login") {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else if (new URL(request.url).pathname !== "/login") {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ["/", "/login"]
};
