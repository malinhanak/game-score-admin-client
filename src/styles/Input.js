import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  position: relative;

  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  margin: 1rem auto;

  &:first-of-type {
    margin: 1rem auto 0 auto;
  }

  & > required {
    color: red;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  border: none;
  border-bottom: 3px solid ${(props) => props.theme.colors.mineShaft};

  font-size: 1rem;
  color: ${(props) => props.theme.colors.mineShaft};

  &:focus {
    outline: none;
  }

  & ~ div.border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background-color: ${(props) => props.theme.colors.accent};
    transition: 0.4s;
  }

  &:focus ~ div.border {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }

  &.error ~ div.border {
    background-color: ${(props) => props.theme.colors.errors};
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 0.7rem;
  /* TODO: Set color */
`;
