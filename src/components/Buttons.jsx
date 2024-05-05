import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #ff8d03;
  margin: 3%;
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${(props) => props.size || 30}em;
  height: 40px;
  font-weight: 800;
  outline: none;
  color: ${(props) => props.theme.colors.darktext};
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  size: ${(props) => props.size || 0}%;
  border: none;

  /* if() */

  @media only screen and (max-width: 600px) {
    overflow: hidden;
    width: 10em;
  }
  @media only screen and (min-width: 600px) {
    width: 10rem;
    overflow: hidden;
  }

  @media only screen and (min-width: 830px) {
    width: 15rem;
    overflow: hidden;
  }
`;

const Buttons = ({ name, color, size, marginLeft, onClick }) => {
  return (
    <Button color={color} size={size} marginLeft={marginLeft} onClick={onClick}>
      {name}
    </Button>
  );
};

export default Buttons;
