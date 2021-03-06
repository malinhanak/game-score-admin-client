import { css } from 'styled-components';

export const cardStyle = css`
  width: 100%;

  padding: 1.2rem 1.2rem;
  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.white};
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
`;
