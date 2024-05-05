import React  from "react";
import styled from "styled-components";
import VirolLogoDark from "../../static/images/VirolDark.png";
import VirolLogo from "../../static/images/Virol.png";
import SideBar from "./SideBar";
import Timer from "../Timer";

const Div = styled.div`
  display: flex;
  width: 100%;
  z-index: 99;
  align-items: center; 
  margin-left: 2%;

  @media only screen and (max-width: 600px) {
    display: block;
    width: 95%;
  }

  @media only screen and (min-width: 600px ) {
    display: block;
    width: 95%;

  }

  @media only screen and (min-width: 830px){
    display: none;
  }

  .toggleLogo {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 600px) {
      width: 98%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }


    @media only screen and (min-width: 600px ){ 
      width: 98%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .openToggleButton {
    width: 20%;
    height: 70px;
    background: none;
    border: none;
    color: black;
    font-size: 45px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
  }
`;

const Image = styled.img`
  position: absolute;
  left: 4%;
  z-index: -1;
  top: -3px;
  padding-top: 20px;
  color: ${(props) => props.theme.colors.text};
  background: transparent;
`;

// Main Function
const SideBarResponse = ({ mode, setShowSidebar, showSidebar, isMobile }) => {  
  return (
    <Div>
      {isMobile && (
        <div className="toggleLogo">
          <div>
            <button
              className="openToggleButton"
              onClick={() => {
                isMobile && setShowSidebar(!showSidebar);
              }}
            >
              &#8801;
            </button>
          </div>
          <Image src={mode ? VirolLogoDark : VirolLogo} />
          <Timer />
        </div>
      )}
      {showSidebar && isMobile && (
        <SideBar
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          mode={mode}
          isMobile={isMobile}
        />
      )}
    </Div>
  );
};

export default SideBarResponse;
