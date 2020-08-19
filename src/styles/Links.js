import styled from 'styled-components';

export const Links = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 0 1rem 1rem 1rem;

  a {
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: ${(props) => props.theme.colors.rum};

    margin: 1rem 0 0 0;
  }

  a.active {
    color: ${(props) => props.theme.colors.tradeWind};
  }
`;
