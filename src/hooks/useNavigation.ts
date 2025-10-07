'use client'

import { useState, useEffect } from 'react'
import { getServicesForNavigation } from '@/lib/sanity-queries'

interface ServiceNav {
  name: string
  href: string
}

interface TeamNav {
  name: string
  href: string
  hasSubmenu: true
  submenuItems: ServiceNav[]
}

interface NavSection {
  name: string
  href: string
  hasDropdown?: boolean
  items?: (TeamNav | ExternalNav | RegularNav)[]
}

interface ExternalNav {
  name: string
  href: string
  external: true
}

interface RegularNav {
  name: string
  href: string
}

// Interface for service data from Sanity
interface SanityService {
  title: string
  slug: {
    current: string
  }
  category?: {
    title: string
    slug: {
      current: string
    }
  }
}

// Static navigation sections that don't change
const staticNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Offensive Security Training', href: '/offsec-training' },
]

const staticDropdowns = {
  'Why S.C.P': {
    name: 'Why S.C.P',
    href: '/why-scp',
    hasDropdown: true,
    items: [
      { name: 'Awards & Recognition', href: '/awards' },
      { name: 'Partners', href: '/partners' },
      { name: 'Customers', href: '/customers' },
      { name: 'Press', href: '/press' },
    ]
  },
  'Company': {
    name: 'Company',
    href: '/company',
    hasDropdown: true,
    items: [
      { name: 'Our Mission', href: '/mission' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Careers & Internships', href: '/careers' },
      { name: 'Security', href: '/security' },
    ]
  },
  'Resources': {
    name: 'Resources',
    href: '/resources',
    hasDropdown: true,
    items: [
      { name: 'Sandboxed DB', href: 'https://xploit-db.domain', external: true },
      { name: 'Research Lab', href: '/research-lab' },
      { name: 'Blog', href: '/blog' },
      { name: 'Webinars', href: '/webinars' },
    ]
  },
  'Community': {
    name: 'Community',
    href: '/community',
    hasDropdown: true,
    items: [
      { name: 'CTF', href: 'https://ctf.domain', external: true },
      { name: 'Hackademy', href: 'https://hackademy.domain', external: true },
      { name: 'Sponsors', href: '/sponsors' },
      { name: 'Events', href: '/events' },
      { name: 'Bounty Hunter Program', href: '/hunt-down' },
    ]
  }
}

// Team display names and routes
const teamConfig = {
  'pentest-team': { name: 'Pentest Team', href: '/pentest-team' },
  'appsec-team': { name: 'AppSec Team', href: '/appsec-team' },
  'purple-team': { name: 'Purple Team', href: '/purple-team' },
  'red-team': { name: 'Red Team', href: '/red-team' },
  'tiger-team': { name: 'Tiger Team', href: '/tiger-team' },
  'blackops-team': { name: 'BlackOps Team', href: '/blackops-team' }
}

export function useNavigation() {
  const [navigation, setNavigation] = useState<NavSection[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function buildNavigation() {
      try {
        setIsLoading(true)
        
        // Fetch services from Sanity
        const services = await getServicesForNavigation()
        
        // Group services by category
        const servicesByCategory = services.reduce((acc: Record<string, ServiceNav[]>, service: SanityService) => {
          const categoryTitle = service.category?.title || 'Other Services'
          if (!acc[categoryTitle]) {
            acc[categoryTitle] = []
          }
          acc[categoryTitle].push({
            name: service.title,
            href: `/${service.slug.current}`
          })
          return acc
        }, {})

        // Build category navigation with submenus
        const categories: TeamNav[] = Object.entries(servicesByCategory).map(([categoryTitle, categoryServices]) => ({
          name: categoryTitle,
          href: `/${categoryTitle.toLowerCase().replace(/\s+/g, '-')}`,
          hasSubmenu: true as const,
          submenuItems: categoryServices as ServiceNav[]
        }))

        // Build services dropdown
        const servicesSection: NavSection = {
          name: 'Services',
          href: '/services',
          hasDropdown: true,
          items: categories
        }

        // Combine all navigation
        const fullNavigation: NavSection[] = [
          ...staticNavigation,
          servicesSection,
          staticDropdowns['Why S.C.P'],
          staticDropdowns['Company'],
          staticDropdowns['Resources'],
          staticDropdowns['Community']
        ]

        setNavigation(fullNavigation)
        setError(null)
      } catch (err) {
        setError('Failed to load navigation')
        
        // Fallback to static navigation
        setNavigation([
          ...staticNavigation,
          {
            name: 'Services',
            href: '/services',
            hasDropdown: true,
            items: []
          },
          staticDropdowns['Why S.C.P'],
          staticDropdowns['Company'],
          staticDropdowns['Resources'],
          staticDropdowns['Community']
        ])
      } finally {
        setIsLoading(false)
      }
    }

    buildNavigation()
  }, [])

  return { navigation, isLoading, error }
}