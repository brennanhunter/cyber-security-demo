'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Offensive Security Training', href: '/training' },
  { 
    name: 'Services', 
    href: '/services',
    hasDropdown: true,
    items: [
      { name: 'Penetration Testing', href: '/services/penetration-testing' },
      { name: 'Red Team Operations', href: '/services/red-team' },
      { name: 'Security Awareness Training', href: '/services/training' },
      { name: 'Compliance Services', href: '/services/compliance' },
    ]
  },
  { 
    name: 'Why S.C.P', 
    href: '/why-scp',
    hasDropdown: true,
    items: [
      { name: 'Our Approach', href: '/why-scp/approach' },
      { name: 'Case Studies', href: '/why-scp/case-studies' },
      { name: 'Certifications', href: '/why-scp/certifications' },
    ]
  },
  { 
    name: 'Company', 
    href: '/company',
    hasDropdown: true,
    items: [
      { name: 'About Us', href: '/company/about' },
      { name: 'Leadership', href: '/company/leadership' },
      { name: 'Careers', href: '/company/careers' },
      { name: 'Contact', href: '/company/contact' },
    ]
  },
  { 
    name: 'Resources', 
    href: '/resources',
    hasDropdown: true,
    items: [
      { name: 'Blog', href: '/resources/blog' },
      { name: 'Whitepapers', href: '/resources/whitepapers' },
      { name: 'Tools', href: '/resources/tools' },
      { name: 'Reports', href: '/resources/reports' },
    ]
  },
  { 
    name: 'Community', 
    href: '/community',
    hasDropdown: true,
    items: [
      { name: 'Events', href: '/community/events' },
      { name: 'Forum', href: '/community/forum' },
      { name: 'Newsletter', href: '/community/newsletter' },
    ]
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-[9999] bg-raisin-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mr-16">
            <Link href="/" className="flex items-center">
              <div className="glitch text-2xl font-bold tracking-wider">
                S.C.P
              </div>
              <div className="ml-3 text-xs text-gray-400 font-mono hidden sm:block">
                Secure Contain Protect
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12 flex-1 justify-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300 text-base font-medium py-2 px-1"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.items && openDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-3 w-64 bg-raisin-black/85 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-3"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-16">
            <Link
              href="/demo"
              className="px-8 py-3 border border-[#D108CE] text-[#D108CE] hover:bg-[#D108CE] hover:text-white transition-all duration-300 rounded-lg text-base font-medium pulse-glow hover:shadow-lg hover:shadow-[#D108CE]/25 whitespace-nowrap"
            >
              Schedule A Demonstration
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white p-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-raisin-black/90 backdrop-blur-xl border-t border-white/10 shadow-xl shadow-black/20">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-300 hover:text-white text-base font-medium flex-1 rounded-lg hover:bg-white/5 transition-all duration-200"
                      onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                      >
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-300 ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && item.items && openDropdown === item.name && (
                    <div className="pl-8 space-y-1 mt-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-6 pb-2">
                <Link
                  href="/demo"
                  className="block w-full text-center px-8 py-4 border border-[#D108CE] text-[#D108CE] hover:bg-[#D108CE] hover:text-white transition-all duration-300 rounded-lg text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Schedule A Demonstration
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
