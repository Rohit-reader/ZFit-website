/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import Button from './shared/Button';

const formStyles = theme => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
`;

const formGroupStyles = theme => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
`;

const labelStyles = theme => css`
  font-weight: 500;
  color: ${theme.colors.secondary};
`;

const inputStyles = theme => css`
  padding: ${theme.spacing(1.5)};
  border: 1px solid #ddd;
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.fonts.primary};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2);
  }
`;

const selectStyles = theme => css`
  ${inputStyles(theme)}
`;

const errorStyles = theme => css`
  color: ${theme.colors.error};
  font-size: 0.875rem;
  margin-top: ${theme.spacing(0.5)};
`;

const planDetailsStyles = theme => css`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing(3)};
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing(3)};
  border-left: 4px solid ${theme.colors.primary};
  
  h4 {
    color: ${theme.colors.secondary};
    margin-top: 0;
    margin-bottom: ${theme.spacing(1)};
  }
  
  .price {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing(1)};
  }
  
  ul {
    margin: ${theme.spacing(2)} 0;
    padding-left: ${theme.spacing(2.5)};
    
    li {
      margin-bottom: ${theme.spacing(0.5)};
      color: ${theme.colors.gray};
    }
  }
`;

const successMessageStyles = theme => css`
  background-color: #e6f7e6;
  color: #2e7d32;
  padding: ${theme.spacing(3)};
  border-radius: ${theme.borderRadius.md};
  text-align: center;
  margin-bottom: ${theme.spacing(3)};
  
  h4 {
    margin-top: 0;
    margin-bottom: ${theme.spacing(1)};
  }
`;

const RegistrationForm = ({ plan, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    place: '',
    timing: '',
    age: '',
    gender: 'male',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    
    if (!formData.place.trim()) {
      newErrors.place = 'Place is required';
    }
    
    if (!formData.age) {
       newErrors.age = 'Age is required';
     } else if (parseInt(formData.age) < 16 || parseInt(formData.age) > 99) {
       newErrors.age = 'Age must be between 16 and 99';
     }
    
    if (!formData.timing.trim()) {
      newErrors.timing = 'Preferred timing is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare registration data
      const registrationData = {
        ...formData,
        date: new Date().toISOString(),
        plan: {
          id: plan.id,
          name: plan.name,
          price: plan.price,
          duration: plan.duration
        },
        id: Date.now()
      };
      
      // SIMPLIFIED: Always save to localStorage first
      const existingData = JSON.parse(localStorage.getItem('registrations') || '[]');
      const newData = [...existingData, registrationData];
      localStorage.setItem('registrations', JSON.stringify(newData));
      console.log('Registration saved to localStorage:', registrationData);
      
      // Try to send data to server API as well (but don't wait for it)
      fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
        signal: AbortSignal.timeout(5000)
      }).then(response => {
        if (response.ok) {
          console.log('Also saved to database');
        }
      }).catch(err => {
        console.warn('Server error, using localStorage only:', err);
      });
      
      // Show success message
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          place: '',
          timing: '',
          age: '',
          gender: 'male',
        });
        setSubmitSuccess(false);
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'Unable to save your registration. Please try again later.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitSuccess ? (
        <div css={successMessageStyles}>
          <h4>Registration Successful!</h4>
          <p>Thank you for registering with ZFit. We'll contact you shortly with more details.</p>
        </div>
      ) : (
        <>
          <div css={planDetailsStyles}>
            <h4>{plan.name} Plan</h4>
            <div className="price">₹{plan.price} / {plan.duration}</div>
            <p>Features:</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <form css={formStyles} onSubmit={handleSubmit}>
            <div css={formGroupStyles}>
              <label css={labelStyles} htmlFor="name">Full Name</label>
              <input
                css={inputStyles}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.name && <span css={errorStyles}>{errors.name}</span>}
            </div>
            
            <div css={formGroupStyles}>
              <label css={labelStyles} htmlFor="email">Email</label>
              <input
                css={inputStyles}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
              {errors.email && <span css={errorStyles}>{errors.email}</span>}
            </div>
            
            <div css={formGroupStyles}>
              <label css={labelStyles} htmlFor="phone">Phone Number</label>
              <input
                css={inputStyles}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your 10-digit phone number"
              />
              {errors.phone && <span css={errorStyles}>{errors.phone}</span>}
            </div>
            
            <div css={formGroupStyles}>
              <label css={labelStyles} htmlFor="place">Place</label>
              <input
                css={inputStyles}
                type="text"
                id="place"
                name="place"
                value={formData.place}
                onChange={handleChange}
                placeholder="Enter your city/locality"
              />
              {errors.place && <span css={errorStyles}>{errors.place}</span>}
            </div>
            
            <div css={formGroupStyles}>
              <label css={labelStyles} htmlFor="age">Age</label>
              <input
                css={inputStyles}
                type="number"
                id="age"
                name="age"
                min="16"
                max="99"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
              />
              {errors.age && <span css={errorStyles}>{errors.age}</span>}
            </div>
            
            <div css={formGroupStyles}>
              <label css={labelStyles} htmlFor="gender">Gender</label>
              <select
                css={selectStyles}
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span css={errorStyles}>{errors.gender}</span>}
            </div>
            
            <div css={formGroupStyles}>
              <label css={labelStyles} htmlFor="timing">Preferred Timing</label>
              <select
                css={selectStyles}
                id="timing"
                name="timing"
                value={formData.timing}
                onChange={handleChange}
              >
                <option value="">Select preferred timing</option>
                <option value="morning">Morning (6 AM - 10 AM)</option>
                <option value="afternoon">Afternoon (10 AM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 8 PM)</option>
                <option value="night">Night (8 PM - 11 PM)</option>
              </select>
              {errors.timing && <span css={errorStyles}>{errors.timing}</span>}
            </div>
            
            {errors.submit && <div css={errorStyles}>{errors.submit}</div>}
            
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register Now'}
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;