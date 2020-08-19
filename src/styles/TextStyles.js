import styled, { css } from 'styled-components';

const common = css`
  margin: 0;
  padding: 0;

  color: ${(props) => props.theme.colors.rum};
`;

export const Styles = styled.h1`
  ${common}

  &.level-1 {
    text-transform: uppercase;
    font-size: 2.35rem;
    margin-bottom: ${(props) => (props.mb ? props.mb : '0.5rem')};
  }

  &.level-2 {
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;

    margin-bottom: ${(props) => (props.mb ? props.mb : '0.5rem')};
  }

  &.level-3 {
    text-transform: uppercase;
    opacity: 0.4;
    font-size: 0.7rem;

    margin-bottom: ${(props) => (props.mb ? props.mb : '0.5rem')};
  }

  &.paragraph {
    margin-top: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.mineShaft};
  }
`;
