const theme = {
  colors: {
    primary: '#FF6B35',     // Orange accent
    secondary: '#2D3142',   // Dark blue
    accent: '#EF8354',      // Lighter orange
    light: '#FFFFFF',
    dark: '#1A1A1D',
    gray: '#4F4F51',
    background: '#F8F9FA',
    success: '#4BB543',
    error: '#FF3333'
  },
  fonts: {
    primary: '"Poppins", sans-serif',
    secondary: '"Montserrat", sans-serif'
  },
  spacing: (factor) => `${factor * 8}px`,
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px'
  }
};

export default theme;
