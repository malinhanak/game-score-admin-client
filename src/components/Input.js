import React from 'react';
import { InputErrors } from '../utils/InputErrors';
import {
  ErrorWrapper,
  Wrapper,
  Label,
  Input as InputStyles
} from '../styles/Input';

const Input = React.forwardRef((props, ref) => {
  const { label, error, name } = props;
  return (
    <ErrorWrapper>
      <Wrapper>
        {label && (
          <Label htmlFor={name}>
            {label}{' '}
            {error && error.type === 'required' && <required>*</required>}
          </Label>
        )}
        <InputStyles className={error && 'error'} ref={ref} {...props} />
        <div className="border"></div>
      </Wrapper>
      <InputErrors error={error} />
    </ErrorWrapper>
  );
});

export default Input;
