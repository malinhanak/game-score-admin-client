import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '../components';
import { Form, DefaultButton } from '../styles';
import { emailPattern } from '../utils/helpers';
import { authContext } from '../shared/providers/auth-context';

const Auth = ({ history }) => {
  const auth = useContext(authContext);
  const { register, handleSubmit, watch, errors } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (event) => {
    event.preventDefault();
    auth.login(history, {
      username: watch().username,
      password: watch().password
    });
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

      <Input
        name="password"
        type="password"
        label="Lösenord"
        ref={register({
          required: true
        })}
        error={errors.password}
      />
      <DefaultButton type="submit">Logga in</DefaultButton>
    </Form>
  );
};

export default Auth;
