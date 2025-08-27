/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyles = (theme, variant = 'primary') => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(1.5)} ${theme.spacing(4)};
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  font-size: 1rem;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  ${variant === 'primary' && `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.light};
    
    &:hover {
      background-color: ${theme.colors.accent};
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.md};
    }
  `}
  
  ${variant === 'secondary' && `
    background-color: transparent;
    color: ${theme.colors.light};
    border-color: ${theme.colors.light};
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.md};
    }
  `}
  
  ${variant === 'outline' && `
    background-color: transparent;
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    
    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.light};
      transform: translateY(-2px);
    }
  `}
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button css={theme => buttonStyles(theme, variant)} {...props}>
      {children}
    </button>
  );
};

export default Button;
