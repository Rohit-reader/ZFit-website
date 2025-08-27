/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FaDumbbell, FaRunning, FaHeartbeat } from 'react-icons/fa';
import Button from './shared/Button';

const sectionStyles = theme => css`
  padding: ${theme.spacing(10)} ${theme.spacing(4)};
  background-color: ${theme.colors.background};
`;

const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const headerStyles = theme => css`
  text-align: center;
  margin-bottom: ${theme.spacing(8)};
  
  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacing(2)};
  }
  
  p {
    color: ${theme.colors.gray};
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const programsGridStyles = theme => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing(4)};
  margin-top: ${theme.spacing(6)};
`;

const programCardStyles = theme => css`
  background: ${theme.colors.light};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
  
  .icon {
    font-size: 3rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing(3)};
  }
  
  .content {
    padding: ${theme.spacing(4)};
    text-align: center;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.colors.secondary};
  }
  
  p {
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacing(3)};
    line-height: 1.6;
  }
`;

const Programs = () => {
  const programs = [
    {
      icon: <FaDumbbell className="icon" />,
      title: "Strength Training",
      description: "Build muscle and increase strength with our expert-led strength training programs designed for all fitness levels.",
    },
    {
      icon: <FaRunning className="icon" />,
      title: "Cardio Workouts",
      description: "Improve your endurance and burn calories with our high-energy cardio sessions and state-of-the-art equipment.",
    },
    {
      icon: <FaHeartbeat className="icon" />,
      title: "Personal Training",
      description: "Get personalized workout plans and one-on-one coaching from our certified personal trainers.",
    },
  ];

  return (
    <section css={sectionStyles} id="programs">
      <div css={containerStyles}>
        <div css={headerStyles}>
          <h2>Our Programs</h2>
          <p>Choose from a variety of fitness programs designed to help you reach your goals, whether you're a beginner or an experienced athlete.</p>
        </div>
        
        <div css={programsGridStyles}>
          {programs.map((program, index) => (
            <div key={index} css={programCardStyles}>
              <div className="content">
                {program.icon}
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
