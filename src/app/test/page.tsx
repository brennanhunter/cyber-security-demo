import '../glitch.css'

export default function TestGlitch() {
  return (
    <div style={{ 
      background: '#313131', 
      color: '#FFF', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      textTransform: 'uppercase'
    }}>
      <h1 style={{
        fontSize: '60px',
        letterSpacing: '8px',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        Ensuring Maximum{' '}
        <span className="glitch" data-text="Security">Security</span>
        {' '}with Smart{' '}
        <span className="glitch" data-text="Containment">Containment</span>
        {' '}Strategies for Unmatched{' '}
        <span className="glitch" data-text="Protection">Protection</span>
        , Every Time.
      </h1>
    </div>
  )
}
