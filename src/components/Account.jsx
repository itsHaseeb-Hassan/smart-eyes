import React from "react";
import styled from "styled-components";
import userImageDark from "../static/images/Icons/DarkMode/SubUserDark.svg";
import UserImage from "../static/images/Icons/LightMode/SideBar_User_Icon.svg";
import LogoutDark from "../static/images/Icons/DarkMode/Logout_Icon.svg";
import Logout from "../static/images/Icons/LightMode/Logout_Icon.svg";
import { Link } from "react-router-dom";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 99;
`;

const AccountProfileContainer = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.borders};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bgSecondary};
  height: 100%;
  z-index: 99;
  display: flex;
  flex-direction: column;

  .myAccountDiv {
    display: flex;
    align-items: center;
    width: 99%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
  }

  .myAccountParagraph {
    width: 100%;
    margin-left: 20px;
  }

  .myAccountImg {
    margin-left: 10px;
  }
`;

const Account = ({
  mode,
  setDropdownMenu,
  setShowSidebar,
  showSidebar,
  dropdownMenu,
}) => {
  const handleClick = () => {
    setDropdownMenu(!dropdownMenu);
    setShowSidebar(!showSidebar);
  };

  return (
    <Div>
      <AccountProfileContainer>
        <Link
          to="/profile"
          style={{ textDecoration: "none" }}
          onClick={handleClick}
        >
          <div className="myAccountDiv">
            <img
              src={mode ? userImageDark : UserImage}
              alt=""
              className="myAccountImg"
            />
            <p className="myAccountParagraph"> My Account </p>
          </div>
        </Link>

        <Link
          to="/login"
          style={{ textDecoration: "none" }}
          onClick={handleClick}
        >
          <div className="myAccountDiv">
            <img
              src={mode ? LogoutDark : Logout}
              alt=""
              className="myAccountImg"
            />
            <p className="myAccountParagraph"> Log out </p>
          </div>
        </Link>
      </AccountProfileContainer>
    </Div>
  );
};

export default Account;
