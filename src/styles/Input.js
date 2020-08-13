import styled from 'styled-components';

export const ErrorWrapper = styled.section`
  display: flex;

  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  margin: 1rem auto 2rem auto;
`;

export const Wrapper = styled.section`
  display: flex;
  position: relative;

  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 3px solid ${(props) => props.theme.colors.geyser};

  font-size: 0.8rem;
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
    background-color: ${(props) => props.theme.colors.rum};
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
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: 700;

  color: ${(props) => props.theme.colors.rum};

  & > required {
    color: ${(props) => props.theme.colors.milanoRed};
  }
`;
