import { ReactNode } from 'react';
import ScrollToTop from './scroll-to-top';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  showLoadingAnimation?: boolean;
}

export default function PageWrapper({
  children,
  className = '',
  showLoadingAnimation = false,
}: PageWrapperProps) {
  return (
    <main 
      className={`min-h-screen bg-raisin-black text-ghost-white ${className}`}
      role="main"
      aria-label="Main content"
    >
      {/* Loading Animation Overlay */}
      {showLoadingAnimation && (
        <div className="fixed inset-0 z-[10000] bg-raisin-black/95 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <div className="glitch text-4xl font-bold mb-4" data-text="S.C.P">
              S.C.P
            </div>
            <div className="loading-dots text-steel-pink">
              Securing Connection
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="relative">
        {children}
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />
    </main>
  );
}
