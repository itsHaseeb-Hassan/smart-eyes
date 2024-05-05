import React, { useState } from "react";
import styled from "styled-components";
import profileImage from "../../static/images/profile_image.svg";

import DownArrow from "../../static/images/Icons/Down_Arrow_Icon.svg";
import Account from "../Account";

const Div = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  

  .navbarPofileImageDiv {
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 15px;
  }

  .navbarPofileImage {
    width: 100%;
    object-fit: cover;
  }

  .navbarProfileTitle {
    margin-left: 10px;
    color: ${(props) => props.theme.colors.text};
  }

  .navbarProfileOptions {
    display: flex;
    flex-direction: column;
  }

  .DropDownIcon {
    margin: 10px;
    cursor: pointer;
    background: ${(props) => props.theme.colors.bgSecondary};
    color: ${(props) => props.theme.colors.text};
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    position: absolute;
    border-radius: 5px;
    right: 50%;
    top: 200%;
    min-width: 160px;
    background: ${(props) => props.theme.colors.bgSecondary};
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

const NavbarProfile = ({ mode }) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleDropDown = () => {
    setDropdownMenu(!dropdownMenu);
    setShowSidebar(!showSidebar);
  };
  return (
    <Div>
      <div
        src={profileImage}
        alt="Profile Image"
        className="navbarPofileImageDiv"
      >
        <img src={profileImage} alt="" className="navbarPofileImage" />
      </div>
      <p className="navbarProfileTitle"> Rana Awais </p>

      <div className="dropdown">
        <img
          src={DownArrow}
          alt=""
          className="DropDownIcon"
          onClick={handleDropDown}
        />
        {dropdownMenu && showSidebar ? (
          <div className="dropdown-content">
            <Account
              mode={mode}
              setShowSidebar={setShowSidebar}
              setDropdownMenu={setDropdownMenu}
              dropdownMenu={dropdownMenu}
              showSidebar={showSidebar}
            />
          </div>
        ) : null}
      </div>
    </Div>
  );
};

export default NavbarProfile;
