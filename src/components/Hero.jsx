/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './shared/Button';

const heroStyles = theme => css`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.light};
  padding: 0 ${theme.spacing(4)};
`;

const contentStyles = css`
  max-width: 800px;
  margin: 0 auto;
`;

const titleStyles = theme => css`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: ${theme.spacing(3)};
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 2.2rem;
  }
`;

const subtitleStyles = theme => css`
  font-size: 1.25rem;
  margin-bottom: ${theme.spacing(4)};
  font-weight: 300;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const buttonGroupStyles = theme => css`
  display: flex;
  gap: ${theme.spacing(3)};
  justify-content: center;
  flex-wrap: wrap;
`;

const Hero = () => {
  return (
    <section css={heroStyles} id="home">
      <div css={contentStyles}>
        <h1 css={titleStyles}>
          Transform Your Body, <span css={{ color: theme => theme.colors.primary }}>Transform Your Life</span>
        </h1>
        <p css={subtitleStyles}>
          Join our premium fitness community and achieve your dream physique with our expert trainers and state-of-the-art facilities.
        </p>
        <div css={buttonGroupStyles}>
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
