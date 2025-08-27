/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const footerStyles = css`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.light};
  padding: ${props => props.theme.spacing(8)} ${props => props.theme.spacing(4)} ${props => props.theme.spacing(2)};
`;

const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing(6)};
  margin-bottom: ${props => props.theme.spacing(6)};
`;

const footerSection = css`
  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.25rem;
    margin-bottom: ${props => props.theme.spacing(3)};
    position: relative;
    padding-bottom: ${props => props.theme.spacing(1)};
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50px;
      height: 2px;
      background: ${props => props.theme.colors.primary};
    }
  }
  
  p {
    color: #ddd;
    margin-bottom: ${props => props.theme.spacing(2)};
    line-height: 1.6;
  }
`;

const contactItem = css`
  display: flex;
  margin-bottom: ${props => props.theme.spacing(3)};
  
  .icon {
    color: ${props => props.theme.colors.primary};
    margin-right: ${props => props.theme.spacing(2)};
    margin-top: 4px;
  }
  
  .content {
    p, a {
      color: #ddd;
      text-decoration: none;
      transition: color 0.3s ease;
      margin: 0;
      
      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
    
    a {
      display: block;
    }
  }
`;

const socialLinks = css`
  display: flex;
  gap: ${props => props.theme.spacing(2)};
  margin-top: ${props => props.theme.spacing(3)};
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: ${props => props.theme.colors.light};
    transition: all 0.3s ease;
    
    &:hover {
      background: ${props => props.theme.colors.primary};
      transform: translateY(-3px);
    }
  }
`;

const quickLinks = css`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: ${props => props.theme.spacing(2)};
      
      a {
        color: #ddd;
        text-decoration: none;
        transition: color 0.3s ease, padding-left: 0;
        display: block;
        
        &:hover {
          color: ${props => props.theme.colors.primary};
          padding-left: 8px;
        }
        
        &::before {
          content: '→';
          color: ${props => props.theme.colors.primary};
          margin-right: 8px;
          opacity: 0;
          transition: opacity 0.3s ease, margin-right 0.3s ease;
        }
        
        &:hover::before {
          opacity: 1;
          margin-right: 5px;
        }
      }
    }
  }
`;

const newsletterForm = css`
  .form-group {
    margin-bottom: ${props => props.theme.spacing(3)};
    
    input {
      width: 100%;
      padding: ${props => props.theme.spacing(2)};
      border: none;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.9);
      font-family: inherit;
      font-size: 0.95rem;
      
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
      }
    }
  }
`;

const copyright = css`
  text-align: center;
  padding-top: ${props => props.theme.spacing(4)};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
  font-size: 0.9rem;
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer css={footerStyles}>
      <div css={containerStyles}>
        <div css={footerSection}>
          <h3>About ZFit</h3>
          <p>ZFit is a premier fitness center dedicated to helping you achieve your health and fitness goals through personalized training programs and state-of-the-art facilities.</p>
          <div css={socialLinks}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
        
        <div css={[footerSection, quickLinks]}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div css={footerSection}>
          <h3>Contact Info</h3>
          <div css={contactItem}>
            <div className="icon"><FaMapMarkerAlt /></div>
            <div className="content">
              <p>123 Fitness Street<br />New York, NY 10001</p>
            </div>
          </div>
          <div css={contactItem}>
            <div className="icon"><FaPhoneAlt /></div>
            <div className="content">
              <a href="tel:+1234567890">(123) 456-7890</a>
            </div>
          </div>
          <div css={contactItem}>
            <div className="icon"><FaEnvelope /></div>
            <div className="content">
              <a href="mailto:info@zfit.com">info@zfit.com</a>
            </div>
          </div>
          <div css={contactItem}>
            <div className="icon"><FaClock /></div>
            <div className="content">
              <p>Mon-Fri: 6:00 AM - 10:00 PM<br />
              Sat-Sun: 7:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
        
        <div css={footerSection}>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates, fitness tips, and special offers.</p>
          <div css={newsletterForm}>
            <div className="form-group">
              <input type="email" placeholder="Your Email Address" />
            </div>
            <button 
              type="button" 
              css={{
                width: '100%',
                padding: '12px 24px',
                backgroundColor: props => props.theme.colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: props => props.theme.colors.accent,
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div css={copyright}>
        <p>&copy; {currentYear} ZFit. All Rights Reserved. | Designed with ❤️ by <a href="#">Your Name</a></p>
      </div>
    </footer>
  );
};

export default Footer;
