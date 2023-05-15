import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#ED6D23'
      },
      boxShadow: {
        top: 'var(--top-shadow-elevation-medium)',
        bottom: 'var(--bottom-shadow-elevation-medium)'
      },
      keyframes: {
        glitch: {
          '0%, 100%': { background: 'url("/HarrsoftHeader.png")', opacity: '1', backgroundSize: 'cover' },
          '92.2%': { background: 'url("/HarrsoftHeaderGlitch.png")', backgroundSize: 'cover' },
          '95.2%': { background: 'url("/HarrsoftHeaderGlitch.png")', opacity: '0', backgroundSize: 'cover' },
          '97.2%': { background: 'url("/HarrsoftHeader.png")', opacity: '1', backgroundSize: 'cover' }
        }
      },
      animation: {
        glitch: 'glitch 4s infinite'
      }
    }
  }
}
