/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { GiGymBag, GiMedal, GiTeamIdea } from 'react-icons/gi';

const sectionStyles = theme => css`
  padding: ${theme.spacing(12)} ${theme.spacing(4)};
  background-color: ${theme.colors.light};
`;

const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const gridStyles = theme => css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing(6)};
  align-items: center;
  margin-top: ${theme.spacing(8)};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const imageStyles = css`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const contentStyles = theme => css`
  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacing(3)};
    
    span {
      color: ${theme.colors.primary};
    }
  }
  
  p {
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacing(4)};
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

const featuresGrid = theme => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing(4)};
  margin-top: ${theme.spacing(6)};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const featureItem = theme => css`
  text-align: center;
  padding: ${theme.spacing(3)};
  border-radius: ${theme.borderRadius.md};
  background: ${theme.colors.background};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .icon {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing(2)};
  }
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.colors.secondary};
  }
  
  p {
    font-size: 0.95rem;
    margin-bottom: 0;
  }
`;

const About = () => {
  const features = [
    {
      icon: <GiGymBag className="icon" />,
      title: "Modern Equipment",
      description: "State-of-the-art fitness equipment from leading brands."
    },
    {
      icon: <GiMedal className="icon" />,
      title: "Certified Trainers",
      description: "Expert trainers with years of experience and certifications."
    },
    {
      icon: <GiTeamIdea className="icon" />,
      title: "Supportive Community",
      description: "Join a community that motivates and inspires you."
    }
  ];

  return (
    <section css={sectionStyles} id="about">
      <div css={containerStyles}>
        <h2 className="section-title">About <span>ZFit</span></h2>
        
        <div css={gridStyles}>
          <div css={imageStyles}>
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Gym interior" 
            />
          </div>
          
          <div css={contentStyles}>
            <h2>Your Journey to a Healthier Life Starts Here</h2>
            <p>
              At ZFit, we believe that fitness is not just about looking good, but feeling great and living a healthier, more fulfilling life. Our state-of-the-art facility and expert trainers are here to guide you every step of the way.
            </p>
            <p>
              Whether you're a beginner or an experienced athlete, our personalized approach ensures you'll get the most out of every workout. We're committed to creating a supportive environment where everyone feels welcome and motivated to achieve their fitness goals.
            </p>
            
            <div css={featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} css={featureItem}>
                  {feature.icon}
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
