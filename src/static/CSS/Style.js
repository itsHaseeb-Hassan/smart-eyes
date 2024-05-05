import styled from "styled-components";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: ${(props) => props.theme.colors.bgPrimary}; 
    ::-webkit-scrollbar {
        display: none;
    }
    @import url('https://fonts.cdnfonts.com/css/segoe-ui-4');
  *{
   font-family: 'Segoe UI', sans-serif;
  
  }
  }
`;

export const darktheme = {
  colors: {
    primary: "#707070",
    bgSecondary: "#25374B",
    bgDefault: "#2A3F5A",
    borders: "#707070",
    text: "#D3DCEC",
    bgPrimary: "#212E3F",
  },
};

export const theme = {
  colors: {
    primary: "#F2F2F2",
    bgSecondary: "#F2F2F2",
    bgDefault: "#F3F3F3",
    borders: "#707070",
    text: "#212E3F",

    bgPrimary: "#FFFFFF",
  },
};
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.form`
  text-align: center;
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  border: 1px solid #707070;
  border-radius: 10px;
  margin: auto auto 30px auto;
  @media (max-width: 600px) {
    width: 350px;
    height: ${(props) => {
      if (props.theme.height === "515px") {
        return "265";
      } else if (props.theme.height === "469px") {
        return "245";
      } else if (props.theme.height === "355px") {
        return "185";
      }
    }}px;
    margin-top: 10%;
  }
  @media (min-width: 600px) {
    width: 650px;
  }
  @media (min-width: 768px) {
    width: 840px;
  }
`;
export const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 515px;
  height: 34px;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  border: 0px;
  @media (max-width: 600px) {
    width: 249px;
    height: 20px;
    padding: 5px;
  }
`;
export const Image = styled.img``;

export const FormTitle = styled.h3`
  border-bottom: 1px solid #707070;
  padding: 20px 0px;
  font-weight: 700px;
  font-size: 23px;
  text-align: center;
  color: white;
  @media (max-width: 600px) {
    padding: 7px;
    font-size: 16px;
  }
`;
export const FormLabel = styled.label`
  display: block;
  font-weight: 400;
  font-size: 16px;
  color: white;
  margin: 40px auto 8px auto;
  @media (max-width: 600px) {
    margin: 5px auto 8px auto;
    font-size: 12px;
  }
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #ff8d03;
  border: none;
  font-weight: 700;
  font-size: 16px;
  width: 535px;
  margin: 46px auto 37px auto;
  height: 54px;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 255px;
    height: 30px;
    margin: 20px auto 5px auto;
    padding: 5px;
    font-size: 12px;
  }
`;
export const ForgotLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const TabContainer = styled.div`
  display: flex;
`;
export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 141px;
  border-radius: 5px;
  color: white;
  background-color: ${({ isActive }) => (isActive ? "#ff8d03" : "#2a3f5a")};
  cursor: pointer;
  @media (max-width: 769px) {
    width: 100px;
  }
`;
export const Button = styled.button`
  display: inline-block;
  height: 25px;
  width: 59px;
  border-radius: 5px;
  color: white;
  margin: auto auto auto 5px;
  background-color: ${(props) => (props.active ? "#ff8d03" : "#2a3f5a")};
  border: 1px solid #ff8d03;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
export const WrapperCard = styled.div`
  margin: 25px 49px auto 10px;
  border-bottom: 1px solid gray;
  width: 95%;
  display: flex;
  justify-content: space-between;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: ${(props) => {
    if (props.numBoxes === 2) {
      return "wrap";
    } else if (props.numBoxes === 3) {
      return "wrap";
    } else if (props.numBoxes === 4) {
      return "wrap";
    } else {
      return "wrap";
    }
  }};
  margin: 14px 0px 25px 5px;
`;

export const Box = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 10px;
  width: ${(props) => {
    if (props.boxWidth === 556) {
      return "46%";
    } else if (props.boxWidth === 360) {
      return "30%";
    } else if (props.boxWidth === 275) {
      return "22%";
    } else {
      return "20%";
    }
  }};

  height: ${(props) => {
    if (props.boxHeight === 405) {
      return "405px";
    } else if (props.boxHeight === 262) {
      return "262px";
    } else if (props.boxHeight === 200) {
      return "200px";
    } else {
      return "150px";
    }
  }};
  margin: 5px;
  border: 1px solid #707070;
  margin-right: ${(props) => {
    if (props.boxWidth === 556) {
      return "35px";
    } else if (props.boxWidth === 360) {
      return "27px";
    } else if (props.boxWidth === 275) {
      return "25px";
    } else {
      return "20px";
    }
  }};
  .Boxdiv {
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
  }
  /* .reactplayer {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  } */
  @media (min-width: 320px) and (max-width: 480px) {
    width: 38%;
    height: 200px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: ${(props) => {
      if (props.boxWidth === 556) {
        return "42%";
      } else if (props.boxWidth === 360) {
        return "27%";
      } else if (props.boxWidth === 275) {
        return "19%";
      } else {
        return "20%";
      }
    }};
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: ${(props) => {
      if (props.boxWidth === 556) {
        return "40%";
      } else if (props.boxWidth === 360) {
        return "27%";
      } else if (props.boxWidth === 275) {
        return "19%";
      } else {
        return "20%";
      }
    }};
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: ${(props) => {
      if (props.boxWidth === 556) {
        return "44%";
      } else if (props.boxWidth === 360) {
        return "29%";
      } else if (props.boxWidth === 275) {
        return "20%";
      } else {
        return "20%";
      }
    }};
  }
  @media (min-width: 1201px) and (max-width: 1300px) {
    width: ${(props) => {
      if (props.boxWidth === 556) {
        return "45%";
      } else if (props.boxWidth === 360) {
        return "29%";
      } else if (props.boxWidth === 275) {
        return "21%";
      } else {
        return "20%";
      }
    }};
  }
`;

export const StyledTable = styled.table`
  width: 95%;
  border-collapse: collapse;
  font-size: 16px;
  margin: 1%;
  & thead th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  & thead th:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
export const TableHeading = styled.th`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bgSecondary};
  text-align: left;
  padding: 10px 20px;
`;

export const THead = styled.thead`
  width: 100%;
  overflow-wrap: break-word;

  @media only screen and (max-width: 600px) {
    width: 100%;
    overflow-wrap: break-word;
  }

  @media only screen and (min-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 830px) {
    width: 100%;
  }
`;
export const TableData = styled.td`
  padding: 10px 20px;
  border-bottom: 1px solid #707070;
  color: ${(props) => props.theme.colors.text};
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    font-size: 8px;
    padding: 10px 6px;
  }
`;

export const WrapperTimer = styled.div`
  width: 14rem;
  height: 3rem;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ff8d03;
  .countdown {
    margin: 0px;
    padding: 0px;
  }

  @media only screen and (max-width: 600px) {
    width: 55%;
  }
  @media only screen and (min-width: 600px) {
    width: 55%;
  }
  @media only screen and (min-width: 830px) {
    width: 14rem;
    justify-content: space-between;
    /* margin-right: 45px !important; */
    overflow-wrap: break-word;
  }
`;

//  Sites and Camera css
export const Div = styled.div`
  display: flex;
  width: 95%;
  margin: 1%;
  margin-top: 3%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-wrap: wrap;
    margin-left: 15px;
  }

  @media only screen and (min-width: 600px) {
    width: 100%;
    flex-wrap: wrap;
    margin-left: 15px;
  }

  @media only screen and (min-width: 830px) {
    width: 95%;
  }
`;

export const DivContainer = styled.div`
  width: 212px;
  border: 1px solid ${(props) => props.theme.colors.borders};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bgSecondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  padding-left: 5px;
  height: 180px;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 40%;
    margin-bottom: 3%;
    margin-right: 1%;
    height: 100%;
  }

  @media only screen and (min-width: 600px) {
    width: 26.5%;
    margin-bottom: 3%;
    margin-right: 2%;
    height: 100%;
  }

  @media only screen and (min-width: 830px) {
    width: 212px;
  }

  .addCameraDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 130px;
  }

  .addCamera {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
  }

  .plusIcon {
    width: 32px;
    height: 32px;
  }
`;

export const CameraDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 90%;

  .title {
    font-size: 20px;
    font-weight: 700;

    @media only screen and (max-width: 600px) {
      font-size: 18px;
      width: 100%;
      text-align: left;
    }

    @media only screen and (min-width: 600px) {
      font-size: 18px;
      width: 100%;
      text-align: left;
    }
  }

  .location {
    width: 100%;

    @media only screen and (max-width: 600px) {
      width: 100%;
      overflow-wrap: break-word;
    }

    @media only screen and (min-width: 600px) {
      width: 100%;
    }
  }
`;

// SubUsers CSS Section

export const SubUsersMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 1%;

  @media only screen and (max-width: 600px) {
    width: 98%;
  }

  @media only screen and (min-width: 600px) {
    width: 98%;
  }

  .subUsersMainDivContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${(props) => props.theme.colors.text};

    @media only screen and (max-width: 600px) {
      display: flex;
      width: 98%;
    }

    @media only screen and (min-width: 600px) {
      display: flex;
      width: 98%;
    }

    .SubUserSearchDiv {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 30%;
      height: 100%;

      @media only screen and (max-width: 600px) {
        width: 60%;
      }

      @media only screen and (min-width: 600px) {
        width: 60%;
      }
    }

    .manageSubUsers {
      width: 100%;

      @media only screen and (max-width: 600px) {
        width: 70%;
      }

      @media only screen and (min-width: 600px) {
        width: 70%;
      }
    }

    .searchSubUsers {
      border: 1px solid ${(props) => props.theme.colors.borders};
      height: 70%;
      width: 100%;
      border-radius: 5px;
      padding: 0px 10px;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const SubUsersSpan = styled.span`
  display: flex;
  align-items: center;

  .EditButtonIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff8d03;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    padding: 1px;
    margin-right: 5px;
  }
  .EditButtonIcon img {
    color: ${(props) => props.theme.colors.text};
    background: transparent;
  }

  .DeleteButtonIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d54444;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    padding: 1px;
  }
`;
