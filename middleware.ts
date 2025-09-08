import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // List of known valid routes (expand as you add more pages)
  const validRoutes = [
    '/',
    '/demo',
    '/landing-page', 
    '/test',
    '/test-glitch',
    '/not-found',
    // Static assets
    '/favicon.ico',
    '/images',
    '/data',
    '/logos',
    '/models',
    // Add more valid routes as needed
  ]

  const isValidRoute = validRoutes.some(route => 
    pathname === route || 
    pathname.startsWith(route + '/') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  )

  // If accessing a non-existent route, add custom headers for our "hidden" 404
  if (!isValidRoute) {
    const response = NextResponse.next()
    
    // Add custom headers to indicate this is our classified access page
    response.headers.set('X-SCP-Status', 'classified-access')
    response.headers.set('X-SCP-Session', Math.random().toString(36).substring(2, 15).toUpperCase())
    response.headers.set('X-SCP-Timestamp', new Date().toISOString())
    response.headers.set('X-SCP-Access-Level', 'RESTRICTED')
    
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files) 
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
