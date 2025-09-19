import { NextResponse } from 'next/server'

// Route detection utilities
function isKnownRoute(pathname) {
  // Static routes that should NOT trigger hidden access
  const staticRoutes = [
    '/',
    '/landing-page',
    '/studio'
  ]
  
  // Check if it's a static route
  if (staticRoutes.includes(pathname)) {
    return true
  }
  
  // Check API routes
  if (pathname.startsWith('/api/')) {
    return true
  }
  
  // Check static assets
  if (pathname.startsWith('/_next/') || 
      pathname.startsWith('/public/') ||
      pathname.includes('.') && (pathname.endsWith('.js') || pathname.endsWith('.css') || pathname.endsWith('.png') || pathname.endsWith('.jpg') || pathname.endsWith('.jpeg') || pathname.endsWith('.webp') || pathname.endsWith('.svg') || pathname.endsWith('.ico') || pathname.endsWith('.woff') || pathname.endsWith('.woff2') || pathname.endsWith('.otf') || pathname.endsWith('.ttf') || pathname.endsWith('.glb') || pathname.endsWith('.gltf'))) {
    return true
  }
  
  // Check dynamic routes like /services/[slug]
  if (pathname.startsWith('/services/') && pathname.split('/').length === 3) {
    return true
  }
  
  // If we get here, it's an unknown route
  return false
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname
  console.log('🔥 MIDDLEWARE EXECUTING:', pathname)
  
  // Skip middleware for known static assets and API routes to avoid infinite loops
  if (pathname.startsWith('/_next/') || 
      pathname.startsWith('/api/') ||
      pathname.includes('.') && (pathname.endsWith('.js') || pathname.endsWith('.css') || pathname.endsWith('.png') || pathname.endsWith('.jpg') || pathname.endsWith('.jpeg') || pathname.endsWith('.webp') || pathname.endsWith('.svg') || pathname.endsWith('.ico') || pathname.endsWith('.woff') || pathname.endsWith('.woff2') || pathname.endsWith('.otf') || pathname.endsWith('.ttf') || pathname.endsWith('.glb') || pathname.endsWith('.gltf'))) {
    console.log('🔄 Skipping asset/API route:', pathname)
    return NextResponse.next()
  }
  
  // Check if this is a known route
  const isKnown = isKnownRoute(pathname)
  
  if (!isKnown) {
    console.log('🚨 UNKNOWN ROUTE DETECTED - REDIRECTING to hidden endpoint:', pathname)
    const hiddenUrl = new URL('/api/hidden-access', request.url)
    hiddenUrl.searchParams.set('originalPath', pathname)
    hiddenUrl.searchParams.set('sessionId', 'MW-' + Date.now())
    hiddenUrl.searchParams.set('timestamp', new Date().toISOString())
    hiddenUrl.searchParams.set('userAgent', request.headers.get('user-agent') || 'unknown')
    hiddenUrl.searchParams.set('ip', request.ip || 'unknown')
    
    return NextResponse.redirect(hiddenUrl)
  }
  
  console.log('🔄 Continuing to next handler for known route:', pathname)
  return NextResponse.next()
}