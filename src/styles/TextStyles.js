import styled from 'styled-components';

export const TextStyles = styled.article`
  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
    margin-bottom: ${(props) => props.mb || '0.5rem'};

    color: ${(props) => props.theme.colors.rum};
    text-transform: uppercase;
  }
  h1 {
    font-size: 2.35rem;
  }
  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
  }
  h3 {
    opacity: 0.4;
    font-size: 0.7rem;
  }

  p {
    margin-top: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.mineShaft};
  }
`;
