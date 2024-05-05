import React from "react";
import styled from "styled-components";

import Moon from "../../static/images/Icons/LightMode/Moon_Icon.svg";
import MoonDark from "../../static/images/Icons/DarkMode/MoonDark.svg";
import IconComponent from "../IconComponent";
import NavbarProfile from "./NavbarProfile";
import Timer from "../Timer";

const DivContainer = styled.div`
  color: ${(props) => props.theme.colors.text}; 
  width: 95%;
  height: 54px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.borders};
  margin: 1%;
  background: ${(props) => props.theme.colors.bgSecondary};


  @media only screen and (max-width: 600px) {
    width: 95%;
    margin: 2%;
  }

  @media only screen and (min-width: 600px ) {
    width: 95%;
    margin: 2%;
  }

  @media only screen and (min-width: 830px){
    width: 96%;
    margin-left: 15px; 
  }

  .timerAndHeading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-right: 10px;

  }
  .NavbarContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-left: 1px solid ${(props) => props.theme.colors.borders}; 
  }
  .DarkMode {
    border-left: 1px solid ${(props) => props.theme.colors.borders};
    display: flex;
    align-items: center;
    height: 54px;
    justify-content: center;
    cursor: pointer;
    padding: 0px 20px;
  }
`;

const H4 = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  color: ${(props) => props.theme.colors.text};
  padding-left: 20px;
`;

const Navbar = ({ mode, setMode, isMobile }) => {  

  return (
    <DivContainer>
      <div className="timerAndHeading">
        <H4> Dashboard </H4>
        {isMobile ? null : <Timer />}
      </div>
      <div className="NavbarContainer">
        {isMobile ? null : <NavbarProfile mode={mode} />}

        <div className="DarkMode" onClick={() => setMode(!mode)}>
          {mode ? (
            <IconComponent src={MoonDark} />
          ) : (
            <IconComponent src={Moon} />
          )}
        </div>
      </div>
    </DivContainer>
  );
};

export default Navbar;
