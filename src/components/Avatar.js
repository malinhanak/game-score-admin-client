import React from 'react';
import styled from 'styled-components';

const COLORS = ['#776d8a', '#6d8a6e', '#6d7e8a', '#8a6d72'];

const Avatar = ({ name, index }) => {
  const getInitials = (name) => {
    const username = name.split(' ');
    return `${username[0].charAt(0)}${username[1].charAt(0)}`;
  };
  return <Styles index={index}>{getInitials(name)}</Styles>;
};

const Styles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  width: 50px;
  height: 50px;

  padding: 0.5rem 0.5rem;
  margin: 0 0 0 0;

  background-color: ${(props) => COLORS[props.index]};
  color: ${(props) => props.theme.colors.white};

  font-family: 'Roboto', sans-serif;
  font-weight: 900;
`;

export default Avatar;
