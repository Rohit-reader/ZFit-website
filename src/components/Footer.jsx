/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const footerStyles = theme => css`
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  color: #f5f5f5;
  padding: ${theme.spacing(8)} ${theme.spacing(4)};
  border-top: 2px solid ${theme.colors.primary};
  display: flex;
  flex-direction: column;
`;

const containerStyles = theme => css`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing(6)};
  margin-bottom: ${theme.spacing(6)};
`;

const footerSection = theme => css`
  h3 {
    color: ${theme.colors.primary};
    font-size: 1.4rem;
    margin-bottom: ${theme.spacing(3)};
    font-weight: 600;
  }

  p {
    margin-bottom: ${theme.spacing(2)};
    line-height: 1.7;
    color: #ccc;
  }
`;

const contactItem = theme => css`
  display: flex;
  margin-bottom: ${theme.spacing(3)};
  gap: ${theme.spacing(2)};
  align-items: flex-start;

  .icon {
    color: ${theme.colors.primary};
    font-size: 1.2rem;
    margin-top: 4px;
    flex-shrink: 0;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &:hover .icon {
    color: ${theme.colors.accent};
    transform: scale(1.2);
  }

  .content a, .content p {
    margin: 0;
    color: #ddd;
    font-size: 0.95rem;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const socialLinks = theme => css`
  display: flex;
  gap: ${theme.spacing(3)};
  margin-top: ${theme.spacing(3)};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    color: ${theme.colors.primary};
    transition: all 0.3s ease;
    font-size: 1.2rem;

    &:hover {
      background: ${theme.colors.primary};
      color: #fff;
      transform: translateY(-4px);
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
    }
  }
`;

const quickLinks = theme => css`
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: ${theme.spacing(2)};

      a {
        color: #ccc;
        font-size: 0.95rem;
        text-decoration: none;
        display: inline-block;
        position: relative;
        transition: color 0.3s ease, transform 0.2s ease;

        &:hover {
          color: ${theme.colors.primary};
          transform: translateX(5px);
        }
      }
    }
  }
`;

const copyright = theme => css`
  text-align: center;
  padding-top: ${theme.spacing(4)};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
  font-size: 0.85rem;

  a {
    color: ${theme.colors.primary};
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
    <footer css={footerStyles(theme)}>
      <div css={containerStyles(theme)}>
        <div css={footerSection(theme)}>
          <h3>About ZFit</h3>
          <p>ZFit is your ultimate fitness destination with expert trainers, world-class equipment, and a community that motivates you every day.</p>
          <div css={socialLinks(theme)}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div css={[footerSection(theme), quickLinks(theme)]}>
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

        <div css={footerSection(theme)}>
          <h3>Contact Info</h3>
          <div css={contactItem(theme)}>
            <div className="icon"><FaMapMarkerAlt /></div>
            <div className="content">
            <h2>Perundurai Branch</h2>
                <p>2nd Floor, Upstairs of Trends Clothing Store<br />Kunnathur – Perundurai Road, Near Poorvika Mobiles<br/>Perundurai, Tamil Nadu – 638052</p><br/>
                <h2>Karur Branch</h2>
                <p>P Square<br/>G.R Nagar, North Gandhi Gramam<br/>Gandhigramam, Karur<br/>Tamil Nadu – 639004</p>
            </div>
          </div>
          <div css={contactItem(theme)}>
            <div className="icon"><FaPhoneAlt /></div>
            <div className="content">
            <h2>Perundurai Branch</h2>
            <a href="tel:+90953 53595">90953 53595</a>
            </div>
          </div>
          <div css={contactItem(theme)}>
            <div className="icon"><FaEnvelope /></div>
            <div className="content"><a href="mailto:info@zfit.com">info@zfit.com</a></div>
          </div>
          <div css={contactItem(theme)}>
            <div className="icon"><FaClock /></div>
            <div className="content"><p>Perundurai Branch - Everyday : 5AM - 10PM <br/>Karur Branch - Everyday: 5AM - 9.30PM</p></div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
