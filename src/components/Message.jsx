import React, { useContext, useEffect } from 'react';
import { EmpruntContext } from '../context/EmpruntContext';

const Message = () => {
  const { message, setMessage } = useContext(EmpruntContext);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null); 
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  if (!message) return null;

  const messageClass = message.type === 'success' ? 'alert-success' : 'alert-danger';

  return (
    <div
      className={`alert ${messageClass}`}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        minWidth: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '15px',
      }}
      role="alert"
    >
      {message.text}
    </div>
  );
};

export default Message;
