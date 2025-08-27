import { useState, useEffect } from 'react';
import styled from "@emotion/styled";

const Nav = styled.nav`
  position: fixed;
  top: ${props => (props.visible ? '0' : '-80px')};
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing(2)} ${(props) => props.theme.spacing(4)};
  background: ${(props) => props.theme.colors.primary};
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: top 0.3s ease-in-out;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: ${(props) => props.theme.spacing(4)};
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    padding: ${(props) => props.theme.spacing(1)} 0;
    position: relative;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${(props) => props.theme.colors.accent};
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme.colors.accent};
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const navbarHeight = 70; // Height of your navbar
    
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        // At the top of the page, show navbar
        setVisible(true);
      } else if (currentScroll > lastScroll && currentScroll > navbarHeight) {
        // Scrolling down and not at top, hide navbar
        setVisible(false);
      } else if (currentScroll < lastScroll) {
        // Scrolling up, show navbar
        setVisible(true);
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav visible={visible}>
      <Logo href="#home" onClick={(e) => scrollToSection(e, 'home')}>
        ZFit
      </Logo>
      <Links>
        <NavLink><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></NavLink>
        <NavLink><a href="#programs" onClick={(e) => scrollToSection(e, 'programs')}>Programs</a></NavLink>
        <NavLink><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></NavLink>
        <NavLink><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></NavLink>
      </Links>
    </Nav>
  );
}
