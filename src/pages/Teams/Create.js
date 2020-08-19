import React, { useContext } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { Input } from '../../components';
import { Form, DefaultButton } from '../../styles';
import { storeContext } from '../../shared/providers/store-context';
import { year } from '../../utils/helpers';

const Create = () => {
  const store = useContext(storeContext);
  const { register, handleSubmit, watch, errors, reset } = useForm({
    mode: 'onChange'
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await store.createTeams({
      year: year,
      name: watch().name,
      password: watch().password,
      team: watch().team
    });
    reset(res);
  };

  return (
    <Wrapper>
      <Form onSubmit={(event) => handleSubmit(onSubmit(event))}>
        <Input
          name="name"
          label="Lagnamn"
          ref={register({
            required: true
          })}
          error={errors.name}
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

        <Input
          name="team"
          type="text"
          label="Medlemmar"
          ref={register({
            required: true
          })}
          error={errors.team}
        />
        <DefaultButton type="submit">Skapa lag</DefaultButton>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.white};

  padding: 1rem 1rem;

  border-radius: 10px 10px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
`;

export default Create;
