/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Global styles
const globalStyles = theme => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${theme.fonts.primary};
    line-height: 1.6;
    color: ${theme.colors.dark};
    background-color: ${theme.colors.background};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.secondary};
    line-height: 1.2;
    margin-bottom: 0.5em;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing(4)};
  }
  
  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: ${theme.spacing(6)};
    color: ${theme.colors.secondary};
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    
    &::after {
      content: '';
      position: absolute;
      width: 80px;
      height: 4px;
      background: ${theme.colors.primary};
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <About />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
