/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

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

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedPlan: '',
    paymentMethod: 'credit_card',
    termsAccepted: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);

  const handlePlanSelect = (planId) => {
    const plan = plans.find(p => p.id === planId);
    setSelectedPlanDetails(plan);
    setFormData(prev => ({
      ...prev,
      selectedPlan: planId
    }));
    setShowPaymentForm(true);
    
    // Scroll to payment form
    setTimeout(() => {
      const paymentSection = document.getElementById('payment-section');
      if (paymentSection) {
        paymentSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.selectedPlan) {
      newErrors.selectedPlan = 'Please select a plan';
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('http://localhost:5000/api/registrations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            selectedPlan: formData.selectedPlan,
            paymentMethod: formData.paymentMethod
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        console.log('Registration successful:', data);
        setSubmitSuccess(true);
      } catch (error) {
        console.error('Registration error:', error);
        setErrors({
          ...errors,
          submit: error.message || 'Failed to submit registration. Please try again.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const successContainer = css`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  h2 {
    color: #ff6b35;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
  }
  
  p {
    margin-bottom: 1rem;
    color: #333;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const successDetails = css`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: left;
  
  h3 {
    color: #ff6b35;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const buttonGroup = css`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const formStyles = css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Poppins', sans-serif;
    color: #333;
    background-color: #ffffff;

    h2 {
      text-align: center;
      color: #000000;
      margin-bottom: 1rem;
      font-size: 2.5rem;
      font-weight: 700;
    }

    .plan-description {
      text-align: center;
      color: #666666;
      margin-bottom: 3rem;
      font-size: 1.1rem;
    }
  
    .plan-cards {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }

    .plan-card {
      background: #ffffff;
      border-radius: 12px;
      padding: 2rem;
      width: 100%;
      max-width: 350px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      position: relative;
      border: 2px solid #f0f0f0;
      display: flex;
      flex-direction: column;
      height: 100%;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(255, 120, 0, 0.15);
        border-color: #ff7800;
      }

      &.popular {
        border-color: #ff7800;
        box-shadow: 0 0 0 2px #ff7800;
        .popular-tag {
          background: #ff7800;
          color: white;
        }
      }

      &.selected {
        border-color: #ff7800;
        .select-plan-btn {
          background-color: #ff7800;
          color: white;
        }
      }

      h3 {
        color: #2c3e50;
        margin-bottom: 1rem;
        font-size: 1.8rem;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .price {
        font-size: 2.5rem;
        font-weight: 700;
        color: #ff7800;
        margin: 1rem 0;

        span {
          font-size: 1rem;
          font-weight: 400;
          color: #666666;
        }
      }

      .features {
        list-style: none;
        padding: 0;
        margin: 2rem 0;
        text-align: left;

        li {
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          color: #333;

          &::before {
            content: '✓';
            color: #ff7800;
            margin-right: 0.75rem;
            font-weight: bold;
          }
        }
      }

      .select-plan-btn {
        background: #000000;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: auto;
        width: 100%;
        font-size: 1rem;

        &:hover {
          background: #ff7800;
          transform: translateY(-2px);
        }

        &:active {
          transform: translateY(0);
        }
      }

      .popular-tag {
        position: absolute;
        top: -12px;
        right: 20px;
        background: #ff7800;
        color: white;
        padding: 0.25rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }

    .payment-section {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid #eee;

      h3 {
        color: #ff7800;
        margin-bottom: 1.5rem;
        text-align: center;
      }

      .selected-plan {
        text-align: center;
        font-size: 1.1rem;
        margin-bottom: 2rem;
        color: #333333;
      }
    }

    .registration-form {
      max-width: 600px;
      margin: 0 auto;
    }

    .form-group {
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #333333;
      }

      input[type="text"],
      input[type="email"],
      input[type="tel"],
      select {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #dddddd;
        border-radius: 6px;
        font-size: 1rem;
        transition: all 0.3s ease;
        background-color: #ffffff;

        &:focus {
          outline: none;
          border-color: #ff7800;
          box-shadow: 0 0 0 2px rgba(255, 120, 0, 0.2);
        }

        &.error-border {
          border-color: #ff0000;
        }
      }
    }

    .payment-methods {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;

      .payment-method {
        flex: 1;
        padding: 1rem;
        border: 1px solid #dddddd;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;

        &:hover {
          border-color: #ff7800;
        }

        &.selected {
          border-color: #ff7800;
          background-color: rgba(255, 120, 0, 0.05);
        }

        input[type="radio"] {
          margin-right: 0.5rem;
        }
      }
    }

    .credit-card-form {
      margin: 1.5rem 0;
      padding: 1.5rem;
      background: #f9f9f9;
      border-radius: 6px;

      .card-details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-top: 1rem;
      }

      .card-input {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #dddddd;
        border-radius: 6px;
        font-size: 1rem;
      }
    }

    .terms-group {
      margin: 2rem 0;
      padding: 1rem;
      background: #f9f9f9;
      border-radius: 6px;

      .checkbox-label {
        display: flex;
        align-items: flex-start;
        font-weight: normal;
        cursor: pointer;

        input[type="checkbox"] {
          margin-right: 0.75rem;
          margin-top: 0.25rem;
        }

        a {
          color: #ff7800;
          text-decoration: none;
          font-weight: 500;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .submit-btn {
      background: #000000;
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 6px;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
      margin-top: 1rem;

      &:hover {
        background: #ff7800;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }

      &:disabled {
        background: #cccccc;
        cursor: not-allowed;
        transform: none;
      }
    }

    .error {
      color: #ff0000;
      font-size: 0.85rem;
      margin-top: 0.25rem;
      display: block;
    }

    .success-message {
      text-align: center;
      background: rgba(75, 181, 67, 0.1);
      color: #333333;
      padding: 1.5rem;
      border-radius: ${theme => theme.borderRadius.sm};
      margin: 2rem 0;
      line-height: 1.6;

      p {
        margin: 0.5rem 0;
      }

      strong {
        color: ${theme => theme.colors.dark};
      }
    }

    .login-link {
      text-align: center;
      margin-top: 2rem;

      .back-home {
        display: inline-flex;
        align-items: center;
        color: ${theme => theme.colors.primary};
        font-weight: 500;
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
          color: ${theme => theme.colors.accent};
          text-decoration: none;

          &::before {
            transform: translateX(-3px);
          }
        }

        &::before {
          content: '←';
          margin-right: 0.5rem;
          transition: transform 0.3s ease;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 1.5rem;
      margin: 1rem;

      .plan-cards {
        grid-template-columns: 1fr;
      }

      .credit-card-form .card-details {
        grid-template-columns: 1fr;
      }
    }
  `;

  if (submitSuccess) {
    return (
      <section css = {SectionStyles} id = "registration">
      <div css={formStyles}>
        <div css={successContainer}>
          <h2>🎉 Registration Successful!</h2>
          <p>Thank you for registering with ZFit, {formData.fullName}!</p>
          <p>We've sent a confirmation email to <strong>{formData.email}</strong> with your plan details.</p>
          <div css={successDetails}>
            <h3>Your Plan: {selectedPlanDetails?.name || formData.selectedPlan}</h3>
            <p>You'll receive a welcome email shortly with next steps to get started.</p>
            <p>If you have any questions, please contact us at support@zfit.com</p>
          </div>
          <div css={buttonGroup}>
            <Link to="/programs" css={[buttonStyle, {marginRight: '1rem'}]}>
              View Programs
            </Link>
            <Link to="/" css={[buttonStyle, {background: '#fff', color: '#ff6b35', border: '2px solid #ff6b35'}]}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      </section>
    );
  }

  return (
    
    <div css={formStyles}>
      <h2>Choose Your Fitness Plan</h2>
      <p className="plan-description">Select the perfect plan that fits your fitness goals and budget.</p>
      
      <div className="plan-cards">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`plan-card ${plan.popular ? 'popular' : ''} ${formData.selectedPlan === plan.id ? 'selected' : ''}`}
            onClick={() => handlePlanSelect(plan.id)}
          >
            {plan.popular && <div className="popular-tag">Most Popular</div>}
            <h3>{plan.name}</h3>
            <div className="price">
              ₹{plan.price.toLocaleString('en-IN')}<span>/{plan.duration}</span>
            </div>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button 
              type="button"
              className={`select-plan-btn ${formData.selectedPlan === plan.id ? 'selected' : ''}`}
            >
              {formData.selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>

      {errors.selectedPlan && <div className="error">{errors.selectedPlan}</div>}

      {showPaymentForm && selectedPlanDetails && (
        <div id="payment-section" className="payment-section">
          <h3>Complete Your Registration</h3>
          <p className="selected-plan">
            Selected: <strong>{selectedPlanDetails.name}</strong> (₹{selectedPlanDetails.price.toLocaleString('en-IN')}/{selectedPlanDetails.duration})
          </p>
          
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.fullName ? 'error-border' : ''}
              />
              {errors.fullName && <div className="error">{errors.fullName}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={errors.email ? 'error-border' : ''}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className={errors.phone ? 'error-border' : ''}
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>

            <div className="form-group">
              <label>Payment Method *</label>
              <div className="payment-methods">
                <label className={`payment-method ${formData.paymentMethod === 'credit_card' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit_card"
                    checked={formData.paymentMethod === 'credit_card'}
                    onChange={handleChange}
                  />
                  Credit/Debit Card
                </label>
                <label className={`payment-method ${formData.paymentMethod === 'paypal' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleChange}
                  />
                  PayPal
                </label>
              </div>
            </div>

            {formData.paymentMethod === 'credit_card' && (
              <div className="credit-card-form">
                <div className="form-group">
                  <label>Card Number *</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="card-input"
                  />
                </div>
                <div className="card-details">
                  <div className="form-group">
                    <label>Expiry Date *</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="card-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV *</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="card-input"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="form-group terms-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />
                <span>I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> *</span>
              </label>
              {errors.termsAccepted && <div className="error">{errors.termsAccepted}</div>}
            </div>

            <div className="form-group">
              {errors.submit && (
              <div css={{ 
                color: '#e74c3c', 
                backgroundColor: '#fde8e8',
                padding: '1rem',
                borderRadius: '4px',
                margin: '1rem 0',
                textAlign: 'center'
              }}>
                {errors.submit}
              </div>
            )}
            <button 
              type="submit" 
              disabled={isSubmitting}
              css={[buttonStyle, { 
                marginTop: '1.5rem',
                width: '100%',
                backgroundColor: isSubmitting ? '#ff9c7d' : '#ff6b35',
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }]}
            >
              {isSubmitting ? 'Processing...' : `Complete Registration - ₹${selectedPlanDetails.price.toLocaleString('en-IN')}`}
            </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Registration;
