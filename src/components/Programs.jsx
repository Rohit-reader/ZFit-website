/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import { FaDumbbell, FaRunning, FaHeartbeat, FaRupeeSign, FaCheck } from 'react-icons/fa';
import Button from './shared/Button';
import Modal from './shared/Modal';
import RegistrationForm from './RegistrationForm';

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

const plansGridStyles = theme => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing(4)};
  margin-top: ${theme.spacing(8)};
`;

const planCardStyles = (theme, isPopular) => css`
  background: ${theme.colors.light};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: ${isPopular ? `2px solid ${theme.colors.primary}` : '1px solid #eee'};
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
  
  .content {
    padding: ${theme.spacing(4)};
    text-align: center;
  }
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.colors.secondary};
  }
  
  .price {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing(2)};
    display: flex;
    align-items: center;
    justify-content: center;
    
    .currency {
      font-size: 1.5rem;
      margin-right: ${theme.spacing(0.5)};
    }
    
    .duration {
      font-size: 1rem;
      color: ${theme.colors.gray};
      font-weight: 400;
      margin-left: ${theme.spacing(1)};
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: ${theme.spacing(4)} 0;
    text-align: left;
    
    li {
      padding: ${theme.spacing(1)} 0;
      display: flex;
      align-items: center;
      
      svg {
        color: ${theme.colors.primary};
        margin-right: ${theme.spacing(1)};
        flex-shrink: 0;
      }
    }
  }
`;

const popularBadgeStyles = theme => css`
  position: absolute;
  top: ${theme.spacing(2)};
  right: ${theme.spacing(2)};
  background-color: ${theme.colors.primary};
  color: white;
  padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
  border-radius: ${theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const plansSectionStyles = theme => css`
  margin-top: ${theme.spacing(12)};
  
  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacing(2)};
  }
  
  p {
    text-align: center;
    color: ${theme.colors.gray};
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const Programs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  
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
  
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 1999,
      duration: 'month',
      features: [
        'Access to gym facilities',
        'Standard equipment usage',
        'Locker room access',
        '1 Free personal training session',
        'Access to basic group classes',
        'Free Wi-Fi',
        'Drinking water facility'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 3499,
      duration: 'month',
      features: [
        'All Basic Plan features',
        'Unlimited group classes (Yoga, Zumba, Aerobics)',
        'Steam and sauna access',
        '3 Personal training sessions',
        'Nutritional guidance',
        'Towel service',
        '10% discount on supplements'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 5999,
      duration: 'month',
      features: [
        'All Pro Plan features',
        'Unlimited personal training',
        '24/7 facility access',
        'Complimentary health check-up',
        '20% discount on supplements',
        'Free guest pass (2 per month)',
        'Priority booking for all classes',
        'Complimentary sports massage (1 per month)'
      ],
      popular: false
    }
  ];
  
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        
        <div css={plansSectionStyles} id="plans">
          <h2>Membership Plans</h2>
          <p>Choose the perfect membership plan that fits your fitness goals and budget.</p>
          
          <div css={plansGridStyles}>
            {plans.map((plan, index) => (
              <div key={index} css={theme => planCardStyles(theme, plan.popular)}>
                {plan.popular && <div css={popularBadgeStyles}>Most Popular</div>}
                <div className="content">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="currency"><FaRupeeSign /></span>
                    {plan.price}
                    <span className="duration">/{plan.duration}</span>
                  </div>
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheck />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={() => handlePlanSelect(plan)}>Select Plan</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Register for Membership"
      >
        {selectedPlan && <RegistrationForm plan={selectedPlan} onClose={closeModal} />}
      </Modal>
    </section>
  );
};

export default Programs;
