import React, { useState } from "react";
import styled from "styled-components";
import { SidebarProducts } from "../../dummyData";
import { Link } from "react-router-dom";
import NavbarProfile from "../navbar/NavbarProfile";
import VirolLogoDark from "../../static/images/VirolLogoDark.svg";
import VirolLogo from "../../static/images/VirolLogo.svg";
import onClickOutside from "react-onclickoutside";

const DivContainer = styled.div`
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.bgSecondary};
  width: 209px;
  height: 1024px;
  border-radius: 0px;
  position: fixed;
  top: 0;
 

  .SidebarLink {
    text-decoration: none;
    &:hover {
      color: white;
    }
    &:target {
      background: #212e3f;
      text-decoration: none;
      width: 97%;
      border-right: 7px solid #ff8d03;
    }
  }

  .navbarProfileDiv {
    display: none;

    @media only screen and (max-width: 600px) {
      display: block;
      padding-top: 30px;
      margin-bottom: 20px;
    }
    @media only screen and (min-width: 600px ) {
      display: block;
      padding-top: 30px;
      margin-bottom: 20px;
    }
  }

  .SidebarSpan {
    color: ${(props) => props.theme.colors.text};
    /* color: #d3dcec; */

    margin-left: 15px;
    font-size: 16px;
    width: 150px;
    height: 21px;
    font-weight: 400;
    line-height: 21.28px;
    font-family: "Segoe UI";
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.text};
    }
  }

  .SidebarSpan.active {
    color: #d3dcec; 
  }

  .SidebarIconImg {
    stroke: red;

    &:hover{
      .st0{
        stroke: red;
      }
    }
 
  }

  .SidebarlistContainer {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.text};
    height: 5vh;
    cursor: pointer;

    &:hover {
      background: #212e3f;
      text-decoration: none;
      width: 97%;
      border-right: 7px solid #ff8d03;
    }
  }

  .SidebarlistContainer.active {
    /* display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.text};
    height: 5vh;
    cursor: pointer; */

    color: #d3dcec;
    background: #212e3f;
    text-decoration: none;
    width: 97%;
    border-right: 7px solid #ff8d03;
  }

  .Sidebarlist {
    display: flex;
    padding: 20px;
    &:hover * {
      color: #d3dcec;
    }
  }

  .SidebarUI {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 80px;
  padding-top: 20px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bgSecondary};

  @media only screen and (max-width: 600px) {
    display: none;
  }


  @media only screen and (min-width: 600px ){
    display: none;
  }
  
  @media only screen and (min-width: 830px){
    display: block;
  }
`;

function SideBar({ mode, isMobile, setShowSidebar }) { 
  const [selectedValue, setSelectedValue] = useState("");

  SideBar.handleClickOutside = () => setShowSidebar(false);

  const handleSidebarLink = (value) => {
    setSelectedValue(value);
    setShowSidebar(false);
  };

  return (
    <>
      <DivContainer>
        <Image src={mode ? VirolLogoDark : VirolLogo} />
        {isMobile && <div className="navbarProfileDiv">
          <NavbarProfile mode={mode} />
        </div> }

        <ul className="SidebarUI">
          {SidebarProducts.map((item) => {
            return (
              <Link
                to={item.pathname}
                className="SidebarLink"
                key={item.id}
                onClick={() => handleSidebarLink(item.id)}
              >
                <li
                  // className="SidebarlistContainer"
                  className={
                    item.id === selectedValue
                      ? "SidebarlistContainer active"
                      : "SidebarlistContainer"
                  }
                >
                  <div className="Sidebarlist">
                    <img
                      src={mode ? item.darkModeIcon : item.icon}
                      className="SidebarIconImg"
                      alt="IconName"
                    />
                    <span
                      className={
                        item.id === selectedValue
                          ? "SidebarSpan active"
                          : "SidebarSpan"
                      }
                    >
                      {item.iconName}
                    </span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </DivContainer>
    </>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SideBar.handleClickOutside,
};

export default onClickOutside(SideBar, clickOutsideConfig);
