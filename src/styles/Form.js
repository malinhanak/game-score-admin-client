import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 2rem;

  margin: 0 auto;

  &.auth-form {
    width: 280px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.19);
    box-shadow: 0px 0px 15px 7px rgba(0, 0, 0, 0.19);
  }
`;
