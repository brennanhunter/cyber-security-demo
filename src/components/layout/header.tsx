'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavigation } from '@/hooks/useNavigation';

interface BaseNavItem {
  name: string;
  href: string;
}

interface ExternalNavItem extends BaseNavItem {
  external: true;
}

interface SubmenuNavItem extends BaseNavItem {
  hasSubmenu: true;
  submenuItems: BaseNavItem[];
}

interface RegularNavItem extends BaseNavItem {
  external?: false;
  hasSubmenu?: false;
}

type NavItem = ExternalNavItem | SubmenuNavItem | RegularNavItem;

// Type guard functions
const isSubmenuItem = (item: NavItem): item is SubmenuNavItem => {
  return 'hasSubmenu' in item && item.hasSubmenu === true;
};

const isExternalItem = (item: NavItem): item is ExternalNavItem => {
  return 'external' in item && item.external === true;
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  
  // Get dynamic navigation from Sanity
  const { navigation, isLoading } = useNavigation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
    setActiveSubmenu(null);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 300); // 300ms grace period
    setCloseTimeout(timeout);
  };

  const handleDropdownEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  const handleSubmenuLeave = () => {
    // Only close the submenu, not the entire dropdown
    setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  return (
    <header className="sticky top-0 left-0 right-0 z-[9999] bg-transparent backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10 mix-blend-screen">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mr-16">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo-transparent.png" 
                alt="S.C.P Logo" 
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12 flex-1 justify-center">
            {isLoading ? (
              // Loading skeleton
              <div className="flex items-center space-x-12">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-6 w-20 bg-gray-700/30 rounded animate-pulse"></div>
                ))}
              </div>
            ) : (
              navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300 text-base font-medium py-2 px-1 font-alliance"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Simple Dropdown Menu */}
                {item.hasDropdown && item.items && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-raisin-black/85 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-3"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.items.map((subItem) => (
                      <div key={subItem.name} className="relative">
                        {isSubmenuItem(subItem) ? (
                          <>
                            <div
                              className="flex items-center justify-between px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer font-alliance"
                              onMouseEnter={() => setActiveSubmenu(subItem.name)}
                            >
                              <Link href={subItem.href} className="flex-1">
                                {subItem.name}
                              </Link>
                              <ChevronDown className="ml-2 h-3 w-3 -rotate-90" />
                            </div>
                            
                            {/* Simple Submenu */}
                            {activeSubmenu === subItem.name && subItem.submenuItems && (
                              <div 
                                className="absolute top-0 left-full w-64 bg-raisin-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-3 z-50"
                                onMouseEnter={() => setActiveSubmenu(subItem.name)}
                                onMouseLeave={handleSubmenuLeave}
                              >
                                {subItem.submenuItems.map((submenuItem: BaseNavItem) => (
                                  <Link
                                    key={submenuItem.name}
                                    href={submenuItem.href}
                                    className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-alliance"
                                  >
                                    {submenuItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : isExternalItem(subItem) ? (
                          <a
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-alliance"
                          >
                            {subItem.name} ↗
                          </a>
                        ) : (
                          <Link
                            href={subItem.href}
                            className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-alliance"
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-16">
            <Link
              href="/demo"
              className="px-8 py-3 border border-[#D108CE] text-[#D108CE] hover:bg-[#D108CE] hover:text-white transition-all duration-300 rounded-lg text-base font-medium pulse-glow hover:shadow-lg hover:shadow-[#D108CE]/25 whitespace-nowrap font-alliance"
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
              {isLoading ? (
                // Mobile loading skeleton
                <div className="space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-700/30 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              ) : (
                navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-300 hover:text-white text-base font-medium flex-1 rounded-lg hover:bg-white/5 transition-all duration-200 font-alliance"
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
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && item.items && activeDropdown === item.name && (
                    <div className="pl-8 space-y-1 mt-2">
                      {item.items.map((subItem) => (
                        <div key={subItem.name}>
                          {isSubmenuItem(subItem) ? (
                            <>
                              <div
                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer font-alliance"
                                onClick={() => handleDropdownToggle(`mobile-${subItem.name}`)}
                              >
                                <Link href={subItem.href} className="flex-1">
                                  {subItem.name}
                                </Link>
                                <ChevronDown 
                                  className={`h-3 w-3 transition-transform duration-300 ${
                                    activeDropdown === `mobile-${subItem.name}` ? 'rotate-180' : ''
                                  }`} 
                                />
                              </div>
                              
                              {/* Mobile Submenu */}
                              {activeDropdown === `mobile-${subItem.name}` && (
                                <div className="pl-4 space-y-1 mt-1">
                                  {subItem.submenuItems.map((submenuItem: BaseNavItem) => (
                                    <Link
                                      key={submenuItem.name}
                                      href={submenuItem.href}
                                      className="block px-4 py-2 text-xs text-gray-500 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-alliance"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {submenuItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : isExternalItem(subItem) ? (
                            <a
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-alliance"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name} ↗
                            </a>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-alliance"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
              )}
              
              {/* Mobile CTA Button */}
              <div className="pt-6 pb-2">
                <Link
                  href="/demo"
                  className="block w-full text-center px-8 py-4 border border-[#D108CE] text-[#D108CE] hover:bg-[#D108CE] hover:text-white transition-all duration-300 rounded-lg text-base font-medium font-alliance"
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
