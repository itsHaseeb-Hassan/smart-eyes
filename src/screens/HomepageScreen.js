import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";
import SideBarResponse from "../components/sidebar/SideBarResponse";

const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  overflow: hidden; 
  flex: 1;
  height: 100%; 

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    overflow-x: hidden;
  }
  @media only screen and (min-width: 600px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 830px){
    flex-direction: row; 
  }

  .sidebarResponsiveDiv { 
    position: relative;
    margin-bottom: 10px;

    @media only screen and (max-width: 600px) {
      display: block;
      display: flex;
      top: 0%;
    }

    @media only screen and (min-width: 600px) {
      display: block;
      display: flex;
      top: 0%;
    }

    @media only screen and (min-width: 830px){
      position: fixed;
    }

  }

  .mobile-nav {
    width: 100%;
    height: 40px; 
  }

  .mobile-nav-btn {
    color: #000;
    outline: none;
    border: none;
    margin: 0 10px;
    font-size: 45px;
    cursor: pointer;
  }
`;



const MainDiv = styled.div`
  width: calc(100% - 209px);
  flex: 2;
  padding: 0;
  margin: 10px 15px;
  margin-left: 210px;
  overflow: hidden;
  height: 100%; 

  @media only screen and (max-width: 600px) {
    margin: 5px !important;
    width: 98%;
    overflow: hidden;
  }

  @media only screen and (min-width: 600px) {
    margin: 5px !important;
    width: 98%;
    overflow: hidden;
  }

  @media only screen and (min-width: 830px){ 
  margin-left: 230px !important;  
  margin-top: 1% !important;
  }

`;

const HomepageScreen = ({
  mode,
  setMode,
  isMobile,
  showSidebar,
  setShowSidebar,
}) => { 
  return (
    <Div>
      {!isMobile && (
        <SideBar
          isMobile={isMobile}
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          mode={mode}
        />
      )}

      <div className="sidebarResponsiveDiv">
        <SideBarResponse
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          isMobile={isMobile}
          mode={mode}
        />
      </div>

      <MainDiv>
        <Navbar mode={mode} setMode={setMode} isMobile={isMobile} />
        <Outlet />
      </MainDiv>
    </Div>
  );
};

export default HomepageScreen;
