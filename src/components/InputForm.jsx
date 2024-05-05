import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: ${({ width }) => width || 100}%;
  background: ${({ background }) => background}; 
  color: ${(props) => props.theme.colors.text};
  border-radius: ${({ borderRadius }) => borderRadius || 10}px;
  height: 32px;
  border: none;
  outline: none;
  padding-left: ${({ paddingLeft }) => paddingLeft || 10}px;
  display: flex;
  justify-content: space-between;
  margin-right: ${({ marginRight }) => marginRight || 10}px;
`;

const InputForm = ({
  type,
  placeholder,
  width,
  marginRight,
  background,
  autocomplete,
  borderRadius,
  paddingLeft,
  color,
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      width={width}
      marginRight={marginRight}
      background={background}
      autocomplete={autocomplete}
      borderRadius={borderRadius}
      paddingLeft={paddingLeft}
      color={color}
    />
  );
};

export default InputForm;
