import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '../components';
import { Form } from '../styles/Form';
import { emailPattern } from '../utils/helpers';
import { authContext } from '../shared/providers/auth-context';

const Auth = () => {
  const auth = useContext(authContext);
  const { register, handleSubmit, watch, errors } = useForm();
  // handleSubmit(
  //   auth.login(e, history, { name: team, password: password })
  // )

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('input values', watch().username);
  };

  return (
    <Form
      className="auth-form"
      onSubmit={(event) => handleSubmit(onSubmit(event))}
    >
      <Input
        name="username"
        label="Användarnamn (E-post)"
        ref={register({
          required: true,
          pattern: { value: emailPattern, message: 'Ogiltig epost.' }
        })}
        error={errors.username}
      />
      <button type="submit">Logga in</button>
    </Form>
  );
};

export default Auth;
