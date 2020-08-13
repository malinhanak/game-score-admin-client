import React from 'react';
import { InputErrors } from '../utils/InputErrors';
import { Wrapper, Label, Input as InputStyles } from '../styles/Input';

export const Input = React.forwardRef((props, ref) => {
  const { label, error, name } = props;
  return (
    <Wrapper>
      {label && (
        <Label htmlFor={name}>
          {label} {error && error.type === 'required' && <required>*</required>}
        </Label>
      )}
      <InputStyles className={error && 'error'} ref={ref} {...props} />
      <div className="border"></div>
      <InputErrors error={error} />
    </Wrapper>
  );
});
