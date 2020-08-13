import React from 'react';

export const InputErrors = ({ error }) => {
  return (
    <>
      {error && error.type === 'pattern' && (
        <span className="error">{error.message}</span>
      )}
      {error && error.type === 'minLength' && (
        <span className="error">{error.message}</span>
      )}
      {error && error.type === 'maxLength' && (
        <span className="error">{error.message}</span>
      )}
    </>
  );
};
