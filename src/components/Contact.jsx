/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import Button from './shared/Button';

const sectionStyles = theme => css`
  padding: ${theme.spacing(10)} ${theme.spacing(4)};
  background-color: ${theme.colors.background};
`;

const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const gridStyles = theme => css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing(6)};
  margin-top: ${theme.spacing(6)};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const formStyles = theme => css`
  background: ${theme.colors.light};
  padding: ${theme.spacing(6)};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: ${theme.spacing(4)};
    color: ${theme.colors.secondary};
  }
  
  .form-group {
    margin-bottom: ${theme.spacing(4)};
    
    label {
      display: block;
      margin-bottom: ${theme.spacing(1)};
      font-weight: 500;
      color: ${theme.colors.secondary};
    }
    
    input,
    textarea {
      width: 100%;
      padding: ${theme.spacing(2)};
      border: 1px solid #ddd;
      border-radius: ${theme.borderRadius.sm};
      font-family: inherit;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      
      &:focus {
        outline: none;
        border-color: ${theme.colors.primary};
        box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2);
      }
    }
    
    textarea {
      min-height: 150px;
      resize: vertical;
    }
  }
`;

const infoStyles = theme => css`
  h3 {
    font-size: 1.75rem;
    margin-bottom: ${theme.spacing(4)};
    color: ${theme.colors.secondary};
  }
  
  p {
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacing(4)};
    line-height: 1.7;
  }
`;

const contactInfo = theme => css`
  .contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: ${theme.spacing(4)};
    
    .icon {
      color: ${theme.colors.primary};
      font-size: 1.5rem;
      margin-right: ${theme.spacing(3)};
      margin-top: 4px;
    }
    
    .content {
      h4 {
        font-size: 1.1rem;
        margin-bottom: ${theme.spacing(1)};
        color: ${theme.colors.secondary};
      }
      
      p, a {
        color: ${theme.colors.gray};
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: ${theme.colors.primary};
        }
      }
      
      a {
        display: block;
      }
    }
  }
`;

const Contact = () => {
  return (
    <section css={sectionStyles} id="contact">
      <div css={containerStyles}>
        <h2 className="section-title">Contact Us</h2>
        
        <div css={gridStyles}>
          <div css={formStyles}>
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" required></textarea>
              </div>
              
              <Button type="submit" variant="primary">Send Message</Button>
            </form>
          </div>
          
          <div css={infoStyles}>
            <h3>Get in Touch</h3>
            <p>Have questions about our programs or want to schedule a tour? Reach out to us using the form or contact information below.</p>
            
            <div css={contactInfo}>
              <div className="contact-item">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="content">
                  <h4>Our Location</h4>
                  <p>123 Fitness Street<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div className="content">
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">(123) 456-7890</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="content">
                  <h4>Email</h4>
                  <a href="mailto:info@zfit.com">info@zfit.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">
                  <FaClock />
                </div>
                <div className="content">
                  <h4>Working Hours</h4>
                  <p>Monday - Friday: 6:00 AM - 10:00 PM<br />
                  Saturday - Sunday: 7:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
