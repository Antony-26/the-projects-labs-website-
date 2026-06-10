export const theme = {
  colors: {
    navy: '#0D1B2A',
    navyLight: '#1A2E42',
    navyMid: '#162435',
    green: '#25D366',
    greenDark: '#1BA84E',
    greenLight: '#E8FAF0',
    white: '#FFFFFF',
    offWhite: '#F5F7FA',
    text: '#0D1B2A',
    textMuted: '#5A7184',
    textLight: '#8FA3B1',
    border: '#E2EAF0',
    borderDark: 'rgba(255,255,255,0.12)',
  },
  fonts: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '20px',
    xl: '32px',
    full: '999px',
  },
  shadow: {
    card: '0 2px 16px rgba(13,27,42,0.08)',
    cardHover: '0 8px 32px rgba(13,27,42,0.14)',
    green: '0 4px 20px rgba(37,211,102,0.25)',
  },
};

export type Theme = typeof theme;
