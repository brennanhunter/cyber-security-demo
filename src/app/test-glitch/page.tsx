'use client'
import styles from './glitch.module.css'

export default function TestGlitch() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#313131', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
    }}>
      <span 
        className={styles.glitchText}
        data-text="GLITCH"
      >
        GLITCH
      </span>
    </div>
  )
}
