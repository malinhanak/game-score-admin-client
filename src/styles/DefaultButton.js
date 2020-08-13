import styled from 'styled-components';

export const DefaultButton = styled.button`
  background-color: ${(props) => props.theme.colors.rum};
  color: ${(props) => props.theme.colors.white};

  border: 0;
  border-radius: 10px;
  padding: 1rem 2rem;

  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  font-weight: 600;

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled};
    color: ${(props) => props.theme.colors.gray};
  }
`;
