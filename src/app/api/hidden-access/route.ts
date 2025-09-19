import { NextRequest } from 'next/server'

/**
 * Hidden Access API Endpoint
 * Handles redirected unknown routes and generates dynamic "classified" pages
 * Returns true HTTP 200 responses with variable content lengths
 */

// Dynamic page names that change based on the original route
const CLASSIFIED_PAGE_NAMES = [
  'CLASSIFIED_OPERATIONS',
  'GHOST_PROTOCOL_ALPHA',
  'SHADOW_NETWORK_BETA', 
  'BLACKOUT_DIRECTIVE_GAMMA',
  'PHANTOM_ARCHIVE_DELTA',
  'CIPHER_VAULT_EPSILON',
  'STEALTH_MODULE_ZETA',
  'COVERT_CHANNEL_ETA',
  'DARK_WEB_THETA',
  'SECURE_PERIMETER_IOTA',
  'QUANTUM_SHIELD_KAPPA',
  'NEURAL_FIREWALL_LAMBDA',
  'BIOMETRIC_MATRIX_MU',
  'ENCRYPTION_NEXUS_NU',
  'THREAT_VECTOR_XI'
] as const

// Content types for random data generation
const DATA_STREAM_TYPES = [
  'ENCRYPTED_DATA_STREAM',
  'BIOMETRIC_SCAN_RESULT', 
  'NETWORK_TRACE_LOG',
  'SECURITY_AUDIT_REPORT',
  'THREAT_ANALYSIS_MATRIX',
  'QUANTUM_ENCRYPTION_KEY',
  'NEURAL_PATTERN_SCAN',
  'BEHAVIORAL_ALGORITHM',
  'CRYPTOGRAPHIC_HASH',
  'SECURITY_CLEARANCE_DATA'
] as const

interface AccessSession {
  sessionId: string
  originalPath: string
  timestamp: string
  userAgent: string
  ip: string
  pageName: string
  contentLength: number
  dataStreamType: string
}

/**
 * Generate a classified page name based on the original path
 */
function generatePageName(originalPath: string): string {
  // Create a simple hash from the path to ensure consistency
  let hash = 0
  for (let i = 0; i < originalPath.length; i++) {
    const char = originalPath.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  
  // Use hash to select a page name, but add some randomness
  const baseIndex = Math.abs(hash) % CLASSIFIED_PAGE_NAMES.length
  const randomOffset = Math.floor(Math.random() * 3) - 1 // -1, 0, or 1
  const finalIndex = (baseIndex + randomOffset + CLASSIFIED_PAGE_NAMES.length) % CLASSIFIED_PAGE_NAMES.length
  
  return CLASSIFIED_PAGE_NAMES[finalIndex]
}

/**
 * Generate random hexadecimal data for padding content
 */
function generateRandomData(length: number): string {
  const chars = '0123456789ABCDEF'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

/**
 * Generate variable-length content for the response
 */
function generateVariableContent(): { type: string, data: string, metadata: string } {
  // Random content length between 100 and 2000 characters
  const contentLength = Math.floor(Math.random() * 1900) + 100
  
  // Select random data stream type
  const dataType = DATA_STREAM_TYPES[Math.floor(Math.random() * DATA_STREAM_TYPES.length)]
  
  // Generate the main data block
  const mainData = generateRandomData(contentLength)
  
  // Add some structured metadata
  const metadata = [
    `ENCRYPTION_LEVEL: AES-${[128, 256, 512][Math.floor(Math.random() * 3)]}`,
    `CLASSIFICATION: ${['TOP_SECRET', 'CONFIDENTIAL', 'RESTRICTED'][Math.floor(Math.random() * 3)]}`,
    `CLEARANCE_REQUIRED: ${['ALPHA', 'BETA', 'GAMMA', 'DELTA'][Math.floor(Math.random() * 4)]}`,
    `ACCESS_PROTOCOL: ${['BIOMETRIC', 'NEURAL_SCAN', 'QUANTUM_KEY'][Math.floor(Math.random() * 3)]}`,
    `THREAT_LEVEL: ${Math.floor(Math.random() * 10) + 1}`
  ].join('\n')
  
  return {
    type: dataType,
    data: mainData,
    metadata
  }
}

/**
 * Generate the complete HTML response for the hidden page
 */
function generateHiddenPageHTML(session: AccessSession, content: { type: string, data: string, metadata: string }): string {
  // Generate additional random padding to vary the total response size
  const paddingLength = Math.floor(Math.random() * 500) + 100
  const htmlPadding = `<!-- ${generateRandomData(paddingLength)} -->`
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SCP • ${session.pageName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        /* Import your site's exact CSS variables and classes */
        :root {
          --background: #0a0a0a;
          --foreground: #ededed;
          --steel-pink: #D108CE;
          --finn-purple: #511F64;
          --raisin-black: #212227;
          --deep-purple: #2D1B69;
          --cyber-cyan: #00F5FF;
          --electric-blue: #7DF9FF;
          --neon-pink: #FF073A;
          --ghost-white: #F8F8FF;
          --charcoal-gray: #1e293b;
        }

        body {
          background: var(--raisin-black);
          color: var(--foreground);
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Your exact gradient classes */
        .gradient-primary {
          background: linear-gradient(135deg, var(--steel-pink) 0%, var(--finn-purple) 100%);
        }

        .gradient-secondary {
          background: linear-gradient(135deg, var(--finn-purple) 0%, var(--deep-purple) 100%);
        }

        .gradient-cyber {
          background: linear-gradient(135deg, var(--cyber-cyan) 0%, var(--electric-blue) 100%);
        }

        /* Your exact pulse-glow animation */
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite alternate;
        }

        @keyframes pulse-glow {
          from {
            box-shadow: 0 0 10px var(--steel-pink), 0 0 20px var(--steel-pink), 0 0 30px var(--steel-pink);
          }
          to {
            box-shadow: 0 0 20px var(--cyber-cyan), 0 0 30px var(--cyber-cyan), 0 0 40px var(--cyber-cyan);
          }
        }

        /* Your exact glitch effect */
        .glitch {    
          cursor: pointer;
          position: relative;
          color: var(--steel-pink);
          z-index: 550;
          display: inline-block;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          font-size: inherit;
          font-weight: inherit;
          line-height: inherit;
          letter-spacing: inherit;
        }

        .glitch::before {
          color: var(--steel-pink);
          animation: glitchTop 2.3s infinite;
          animation-delay: calc(var(--random, 0) * 0.5s);
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          will-change: transform;
        }

        .glitch::after {
          color: var(--steel-pink);
          animation: glitchBottom 3.1s infinite;
          animation-delay: calc(var(--random, 0) * 0.7s);
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          will-change: transform;
        }

        @keyframes glitchTop {
          0%, 82% {
            transform: translate(0, 0);
          }
          83% {
            transform: translate(0.08em, -0.03em);
          }
          84% {
            transform: translate(-0.12em, 0.07em) skew(-3deg);
          }
          85% {
            transform: translate(0.2em, -0.01em);
          }
          86% {
            transform: translate(-0.03em, 0.08em) skew(5deg);
          }
          87% {
            transform: translate(0.15em, -0.04em);
          }
          88% {
            transform: translate(-0.09em, 0.02em) skew(-7deg);
          }
          89% {
            transform: translate(0.06em, -0.06em);
          }
          90%, 100% {
            transform: translate(0, 0);
          }
        }  

        @keyframes glitchBottom {
          0%, 79% {
            transform: translate(0, 0);
          }
          80% {
            transform: translate(-0.05em, 0.03em);
          }
          81% {
            transform: translate(0.1em, -0.08em) skew(4deg);
          }
          82% {
            transform: translate(-0.15em, 0.05em);
          }
          83% {
            transform: translate(0.08em, -0.02em) skew(-6deg);
          }
          84% {
            transform: translate(-0.03em, 0.09em);
          }
          85% {
            transform: translate(0.18em, -0.03em) skew(8deg);
          }
          86% {
            transform: translate(-0.07em, 0.04em);
          }
          87% {
            transform: translate(0.05em, -0.07em) skew(-4deg);
          }
          88% {
            transform: translate(-0.11em, 0.06em);
          }
          89% {
            transform: translate(0.13em, -0.01em) skew(3deg);
          }
          90% {
            transform: translate(-0.04em, 0.08em);
          }
          91%, 100% {
            transform: translate(0, 0);
          }
        }

        /* Your site's button styles */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.3s;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--steel-pink) 0%, var(--finn-purple) 100%);
          color: white;
        }

        .btn-primary:hover {
          box-shadow: 0 10px 25px rgba(209, 8, 206, 0.25);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: linear-gradient(135deg, var(--cyber-cyan) 0%, var(--electric-blue) 100%);
          color: var(--raisin-black);
          font-weight: 600;
        }

        .btn-secondary:hover {
          box-shadow: 0 10px 25px rgba(0, 245, 255, 0.25);
          transform: translateY(-1px);
        }

        /* Grid pattern background like your 404 page */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(209, 8, 206, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(209, 8, 206, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Terminal styling matching your design system */
        .terminal {
          background: linear-gradient(135deg, 
            rgba(209, 8, 206, 0.15), 
            rgba(81, 31, 100, 0.1), 
            rgba(45, 27, 105, 0.15));
          backdrop-filter: blur(16px);
          border: 1px solid rgba(209, 8, 206, 0.4);
          border-radius: 16px;
          padding: 24px;
          margin: 24px 0;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(209, 8, 206, 0.2);
        }

        .status-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          margin: 2rem 0;
        }

        .status-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(209, 8, 206, 0.3);
          border-radius: 8px;
          padding: 1rem;
          transition: all 0.3s ease;
        }

        .status-card:hover {
          border-color: var(--cyber-cyan);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.2);
          transform: translateY(-2px);
        }

        .data-stream {
          background: rgba(0, 0, 0, 0.4);
          border-left: 4px solid var(--steel-pink);
          border-radius: 0 8px 8px 0;
          padding: 1.5rem;
          margin: 1.5rem 0;
          position: relative;
        }

        .hex-data {
          background: rgba(0, 0, 0, 0.6);
          border-radius: 8px;
          padding: 1rem;
          font-size: 0.75rem;
          line-height: 1.6;
          word-break: break-all;
          max-height: 200px;
          overflow-y: auto;
          color: #94a3b8;
          font-family: 'JetBrains Mono', monospace;
        }

        /* Scramble text effect simulation */
        .scramble-text {
          position: relative;
        }

        .scramble-text:hover::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          color: var(--cyber-cyan);
          animation: scramble 0.6s ease-out;
        }

        @keyframes scramble {
          0% { content: attr(data-scramble); }
          100% { content: attr(data-text); }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .status-grid {
            grid-template-columns: 1fr;
          }
        }
    </style>
</head>
<body class="bg-grid-pattern">
    ${htmlPadding}
    
    <div class="max-w-4xl mx-auto p-4 min-h-screen">
      <!-- Main Terminal -->
      <div class="terminal">
          <div class="border-b border-steel-pink pb-4 mb-6">
              <h1 class="glitch text-4xl font-bold mb-2" data-text="⚠️ S.C.P SECURE TERMINAL v3.7.1">⚠️ S.C.P SECURE TERMINAL v3.7.1</h1>
              <div class="text-cyber-cyan font-medium text-sm uppercase tracking-wider">CLASSIFIED ACCESS DETECTED</div>
          </div>
          
          <div class="status-grid">
              <div class="status-card">
                  <div class="text-xs text-gray-400 uppercase tracking-wide mb-2">Session ID</div>
                  <div class="text-steel-pink font-mono font-semibold">${session.sessionId}</div>
              </div>
              <div class="status-card">
                  <div class="text-xs text-gray-400 uppercase tracking-wide mb-2">Access Time</div>
                  <div class="text-cyber-cyan font-mono font-semibold">${session.timestamp}</div>
              </div>
              <div class="status-card">
                  <div class="text-xs text-gray-400 uppercase tracking-wide mb-2">Original Path</div>
                  <div class="text-steel-pink font-mono font-semibold">${session.originalPath}</div>
              </div>
              <div class="status-card">
                  <div class="text-xs text-gray-400 uppercase tracking-wide mb-2">Current Page</div>
                  <div class="glitch text-steel-pink font-mono font-semibold" data-text="${session.pageName}">${session.pageName}</div>
              </div>
              <div class="status-card">
                  <div class="text-xs text-gray-400 uppercase tracking-wide mb-2">HTTP Status</div>
                  <div class="text-green-400 font-mono font-semibold">200 OK</div>
              </div>
              <div class="status-card">
                  <div class="text-xs text-gray-400 uppercase tracking-wide mb-2">Response Length</div>
                  <div class="text-cyber-cyan font-mono font-semibold">${session.contentLength} bytes</div>
              </div>
          </div>
      </div>

      <!-- Data Stream Terminal -->
      <div class="terminal">
          <div class="border-b border-steel-pink pb-4 mb-6">
              <h2 class="text-2xl font-bold text-steel-pink mb-2">🔒 CLASSIFIED DATA STREAM</h2>
              <div class="text-cyber-cyan text-sm uppercase tracking-wider">TYPE: ${content.type}</div>
          </div>
          
          <div class="bg-black bg-opacity-40 rounded-lg p-4 mb-4 border border-cyber-cyan border-opacity-20">
              <div class="text-steel-pink font-semibold mb-2">SECURITY METADATA:</div>
              <pre class="text-cyber-cyan text-sm">${content.metadata}</pre>
          </div>
          
          <div class="data-stream">
              <div class="flex items-center gap-2 mb-4 text-steel-pink font-semibold">
                  <div class="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse"></div>
                  <span>DATA STREAM ACTIVE - ${content.type}</span>
              </div>
              
              <div class="hex-data" id="hexData">${content.data}</div>
              
              <div class="text-right mt-4 text-cyber-cyan font-medium">
                  [${content.data.length} bytes transmitted]
              </div>
          </div>
      </div>

      <!-- Access Granted Terminal -->
      <div class="terminal">
          <div class="border-b border-steel-pink pb-4 mb-6">
              <h2 class="text-2xl font-bold text-steel-pink">🛡️ ACCESS GRANTED</h2>
          </div>
          
          <p class="text-gray-300 mb-6 leading-relaxed">
              You have successfully accessed a <span class="text-steel-pink font-semibold">classified section</span> of our security perimeter.
              This access attempt has been <span class="text-cyber-cyan font-semibold">logged and monitored</span> for security analysis.
          </p>
          
          <div class="flex gap-4 flex-wrap">
              <a href="/" class="btn-primary pulse-glow px-6 py-3 rounded-lg font-medium" id="returnBtn">
                  <span class="scramble-text" data-text="← Return to Base">← Return to Base</span>
              </a>
              <a href="/demo" class="btn-secondary px-6 py-3 rounded-lg font-medium" id="demoBtn">
                  <span class="scramble-text" data-text="Explore Security Demo →">Explore Security Demo →</span>
              </a>
          </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-8 pt-6 border-t border-steel-pink border-opacity-20 text-sm">
          <div class="text-steel-pink font-semibold mb-2">S.C.P CYBERSECURITY • SECURE CONTAIN PROTECT</div>
          <div class="text-gray-400 mb-1">This access attempt has been logged for security analysis</div>
          <div class="text-steel-pink">All connections are monitored and encrypted</div>
      </div>
    </div>

    <script>
        // Enhanced logging
        console.log('🔐 SCP CLASSIFIED ACCESS:', {
            session: '${session.sessionId}',
            page: '${session.pageName}',
            path: '${session.originalPath}',
            timestamp: '${session.timestamp}',
            responseLength: ${session.contentLength},
            classification: '${content.type}'
        });
        
        // Simulate your ACTUAL ScrambleText component behavior
        function createScrambleEffect(element) {
            const originalText = element.getAttribute('data-text') || element.textContent;
            const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
            const speed = 50; // matching your component's default speed
            
            // Function to generate random characters (matching your randomChars function)
            function randomChars(length) {
                let result = '';
                for (let i = 0; i < length; i++) {
                    result += scrambleChars.charAt(Math.floor(Math.random() * scrambleChars.length));
                }
                return result;
            }
            
            let prefixLength = 0;
            
            // Start with completely random characters (matching your component)
            element.textContent = randomChars(originalText.length);
            
            const interval = setInterval(() => {
                const prefix = originalText.slice(0, prefixLength);
                const suffix = randomChars(originalText.length - prefixLength);
                element.textContent = prefix + suffix;
                
                prefixLength++;
                
                if (prefixLength > originalText.length) {
                    element.textContent = originalText;
                    clearInterval(interval);
                }
            }, speed);
        }

        // Wait for DOM to be ready, then add scramble effects
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOM loaded, setting up scramble effects...');
            
            // Add scramble effect to buttons (matching your hero section pattern)
            const returnBtn = document.getElementById('returnBtn');
            const demoBtn = document.getElementById('demoBtn');
            
            console.log('Found buttons:', { returnBtn, demoBtn });
            
            if (returnBtn) {
                returnBtn.addEventListener('mouseenter', () => {
                    console.log('Return button hovered');
                    const scrambleEl = returnBtn.querySelector('.scramble-text');
                    console.log('Found scramble element:', scrambleEl);
                    if (scrambleEl) createScrambleEffect(scrambleEl);
                });
            }

            if (demoBtn) {
                demoBtn.addEventListener('mouseenter', () => {
                    console.log('Demo button hovered');
                    const scrambleEl = demoBtn.querySelector('.scramble-text');
                    console.log('Found scramble element:', scrambleEl);
                    if (scrambleEl) createScrambleEffect(scrambleEl);
                });
            }
        });

        // Also try without DOMContentLoaded as fallback
        setTimeout(() => {
            const returnBtn = document.getElementById('returnBtn');
            const demoBtn = document.getElementById('demoBtn');
            
            if (returnBtn && !returnBtn.hasAttribute('data-scramble-setup')) {
                returnBtn.setAttribute('data-scramble-setup', 'true');
                returnBtn.addEventListener('mouseenter', () => {
                    const scrambleEl = returnBtn.querySelector('.scramble-text');
                    if (scrambleEl) createScrambleEffect(scrambleEl);
                });
            }

            if (demoBtn && !demoBtn.hasAttribute('data-scramble-setup')) {
                demoBtn.setAttribute('data-scramble-setup', 'true');
                demoBtn.addEventListener('mouseenter', () => {
                    const scrambleEl = demoBtn.querySelector('.scramble-text');
                    if (scrambleEl) createScrambleEffect(scrambleEl);
                });
            }
        }, 100);

        // Simulate typing effect for hex data
        const hexData = document.getElementById('hexData');
        if (hexData) {
            const originalText = hexData.textContent;
            hexData.textContent = '';
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < originalText.length) {
                    hexData.textContent += originalText.charAt(i);
                    i++;
                    hexData.scrollTop = hexData.scrollHeight;
                } else {
                    clearInterval(typeInterval);
                }
            }, 20);
        }

        // Enhanced glitch randomization
        document.querySelectorAll('.glitch').forEach(el => {
            el.style.setProperty('--random', Math.random());
        });
    </script>
</body>
</html>`
}

/**
 * Log the access attempt for analytics
 */
async function logAccess(session: AccessSession): Promise<void> {
  // In production, this would log to a database or analytics service
  console.log(`[SCP HIDDEN ACCESS] ${session.timestamp} - Session: ${session.sessionId} - Path: ${session.originalPath} - Page: ${session.pageName} - Length: ${session.contentLength} bytes`)
  
  // You could extend this to:
  // - Store in database
  // - Send to analytics service
  // - Trigger security alerts for suspicious patterns
  // - Update threat intelligence feeds
}

export async function GET(request: NextRequest) {
  try {
    // Extract session information from query parameters
    const searchParams = request.nextUrl.searchParams
    const originalPath = searchParams.get('originalPath') || '/unknown'
    const sessionId = searchParams.get('sessionId') || Math.random().toString(36).substring(2, 15).toUpperCase()
    const timestamp = searchParams.get('timestamp') || new Date().toISOString()
    const userAgent = searchParams.get('userAgent') || 'unknown'
    const ip = searchParams.get('ip') || 'unknown'
    
    // Generate dynamic content
    const content = generateVariableContent()
    const pageName = generatePageName(originalPath)
    
    // Create session object
    const session: AccessSession = {
      sessionId,
      originalPath,
      timestamp,
      userAgent,
      ip,
      pageName,
      contentLength: 0, // Will be set after HTML generation
      dataStreamType: content.type
    }
    
    // Generate the HTML response
    const htmlResponse = generateHiddenPageHTML(session, content)
    session.contentLength = htmlResponse.length
    
    // Log the access attempt
    await logAccess(session)
    
    // Return the response with proper headers
    return new Response(htmlResponse, {
      status: 200, // True HTTP 200 - not a 404!
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Length': htmlResponse.length.toString(),
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        
        // SCP-specific headers
        'X-SCP-Status': 'classified-access',
        'X-SCP-Session': sessionId,
        'X-SCP-Page': pageName,
        'X-SCP-Original-Path': originalPath,
        'X-SCP-Response-Type': 'hidden-endpoint',
        'X-SCP-Content-Length': htmlResponse.length.toString(),
        'X-SCP-Timestamp': timestamp,
        
        // Security headers
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'no-referrer'
      }
    })
    
  } catch (error) {
    console.error('[SCP HIDDEN ACCESS ERROR]:', error)
    
    // Even errors return 200 to maintain the illusion
    return new Response('SYSTEM ERROR - ACCESS TEMPORARILY RESTRICTED', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'X-SCP-Status': 'system-error',
        'X-SCP-Response-Type': 'error-fallback'
      }
    })
  }
}