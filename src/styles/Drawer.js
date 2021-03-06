import styled from 'styled-components';

export const Drawer = styled.aside`
  position: fixed;
  left: 5rem;
  top: 5rem;
  z-index: 25;

  height: 40vh;
  width: 50%;
  max-width: 280px;

  background: ${(props) => props.theme.colors.white};
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.19);

  border-radius: 0 10px 10px 0;

  display: flex;
  flex-direction: column;

  ion-icon {
    margin: 1rem 1rem 0 auto;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.rum};
  }

  @media screen and (max-width: 768px) {
    top: auto;
    left: 10%;
    bottom: 6rem;

    height: 30vh;
    width: 80%;
    max-width: 300px;

    border-radius: 10px 10px 0 0;
  }
`;
