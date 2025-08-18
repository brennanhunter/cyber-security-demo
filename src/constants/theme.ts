// SCP Brand Colors
export const colors = {
  primary: {
    steelPink: '#D108CE',
    finnPurple: '#511F64',
    raisinBlack: '#212227',
  },
  accent: {
    deepPurple: '#2D1B69',
    cyberCyan: '#00F5FF',
    electricBlue: '#7DF9FF',
    neonPink: '#FF073A',
    ghostWhite: '#F8F8FF',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #D108CE 0%, #511F64 100%)',
    secondary: 'linear-gradient(135deg, #511F64 0%, #2D1B69 100%)',
    cyber: 'linear-gradient(135deg, #00F5FF 0%, #7DF9FF 100%)',
    danger: 'linear-gradient(135deg, #FF073A 0%, #D108CE 100%)',
  }
} as const

// Animation Durations
export const animations = {
  fast: '0.15s',
  normal: '0.3s',
  slow: '0.5s',
  slower: '0.75s',
  glitch: '0.5s',
  pulse: '2s',
  loading: '1.5s',
} as const

// Breakpoints (matching Tailwind defaults)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Z-index scale
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const
