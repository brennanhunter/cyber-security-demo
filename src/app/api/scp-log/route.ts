import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // This API endpoint logs the "404" access for analytics
  const timestamp = new Date().toISOString()
  const userAgent = request.headers.get('user-agent') || 'unknown'
  const ip = request.headers.get('x-forwarded-for') || 'unknown'
  const path = request.nextUrl.searchParams.get('path') || 'unknown'
  
  // Here you could log to a database or analytics service
  console.log(`[SCP CLASSIFIED ACCESS] ${timestamp} - IP: ${ip} - Path: ${path} - UA: ${userAgent}`)
  
  return NextResponse.json({
    status: 'logged',
    message: 'Access attempt recorded',
    timestamp,
    classification_level: 'restricted',
    response_code: 200 // Always return 200 for our hidden pages
  }, { 
    status: 200,
    headers: {
      'X-SCP-Status': 'classified-access',
      'X-SCP-Log': 'recorded'
    }
  })
}
