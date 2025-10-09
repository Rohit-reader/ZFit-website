/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { css } from '@emotion/react';
import { createPortal } from 'react-dom';

const modalOverlayStyles = theme => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${theme.spacing(2)};
`;

const modalContentStyles = theme => css`
  background-color: ${theme.colors.light};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: modalFadeIn 0.3s ease-out;
  
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const modalHeaderStyles = theme => css`
  padding: ${theme.spacing(3)} ${theme.spacing(4)};
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    margin: 0;
    color: ${theme.colors.secondary};
    font-size: 1.5rem;
  }
`;

const modalBodyStyles = theme => css`
  padding: ${theme.spacing(4)};
`;

const closeButtonStyles = theme => css`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${theme.colors.gray};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  if (!isOpen) return null;
  
  // Create a portal container if it doesn't exist
  if (!document.getElementById('modal-root')) {
    const modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);
  }

  return createPortal(
    <div css={modalOverlayStyles} onClick={onClose}>
      <div css={modalContentStyles} onClick={e => e.stopPropagation()}>
        <div css={modalHeaderStyles}>
          <h3>{title}</h3>
          <button css={closeButtonStyles} onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div css={modalBodyStyles}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;