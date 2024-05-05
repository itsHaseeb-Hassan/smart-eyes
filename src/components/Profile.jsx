import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import InputForm from "./InputForm";
import image from "../static/images/image_01.png";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 1%;
  margin-top: 3%;

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
  }

  /* @media only screen and (min-width: 600px ) {
        flex-direction: column-reverse;
        width: 100%;
        height: 100%;
    }

    @media only screen and (min-width: 830px){
        flex-direction: row;
        height: 100%;
    } */
`;

const ProfileContainer = styled.div`
  width: 60%;
  border: 1px solid ${(props) => props.theme.colors.borders};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bgSecondary};
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 98%;
    padding: 0 !important;
    margin: 0 !important;
  }

  /* @media only screen and (min-width: 600px ) {
        flex-direction: column;
        width: 98%;
        padding: 0 !important;
        margin: 0 !important;
    }

    @media only screen and (min-width: 830px){
        flex-direction: column;
        height: 100vh;
    } */
`;

const FromWrapper = styled.form`
  margin: 2%;
  width: 100%;
  display: flex;

  @media only screen and (max-width: 600px) {
    margin: 0;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  /* @media only screen and (min-width: 600px ) {
        margin: 0;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media only screen and (min-width: 830px){
        flex-direction: row;
        margin: 0 !important;
    } */

  .div1 {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media only screen and (max-width: 600px) {
      padding: 10px 0px;
    }

    /* 
        @media only screen and (min-width: 600px ) {
            padding: 10px 0px;
        }

        @media only screen and (min-width: 830px){ 
            margin: 0 !important;
            padding: 0 !important;
        } */
  }

  .label {
    color: ${(props) => props.theme.colors.text};
    width: 100%;
    margin-bottom: 10px;
  }
`;

const HR = styled.hr`
  background: #5c5b5b;
  width: 95%;
  margin: 2%;
`;

const H3 = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 20px;
  font-weight: 700;
  margin: 2%;
`;

const ImageContainer = styled.div`
  width: 35%;
  border: 1px solid ${(props) => props.theme.colors.borders};
  padding: 40px 0px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bgSecondary};
  /* height: 292px; */
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    height: 10%;
    padding: 0px 15px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  /* 
    @media only screen and (min-width: 600px ) {
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        height: 10%;
        padding: 0px 15px;
        object-fit: cover;
        margin-bottom: 20px;
    } */

  .profileImg {
    width: 35%;
    height: 60%;
    object-fit: cover;
    border-radius: 50%;

    @media only screen and (max-width: 600px) {
      width: 25%;
      height: 100%;
    }

    /* @media only screen and (min-width: 600px ) {
            width: 25%;
            height: 100%;
        } */

    .profileImg {
      width: 140px;
      height: 140px;
      border-radius: 50%;
    }
  }
`;

const Profile = () => {
  return (
    <>
      <Div>
        <ProfileContainer>
          <FromWrapper>
            <div className="div1">
              <label className="label"> First Name </label>
              <InputForm
                type={"text"}
                placeholder={"First Name...."}
                width={"93"}
                marginRight={"10"}
              />
            </div>
            <div className="div1">
              <label className="label"> Last Name </label>
              <InputForm
                type={"text"}
                placeholder={"Last Name...."}
                width={"93"}
                marginRight={"10"}
              />
            </div>
          </FromWrapper>
          <FromWrapper>
            <div className="div1">
              <label className="label"> Email </label>
              <InputForm
                type={"email"}
                placeholder={"Email..."}
                width={"93"}
                marginRight={"10"}
              />
            </div>
            <div className="div1">
              <label className="label"> Username </label>
              <InputForm
                type={"text"}
                placeholder={"Username...."}
                width={"93"}
                marginRight={"10"}
              />
            </div>
          </FromWrapper>
          <FromWrapper>
            <div className="div1">
              <label className="label"> Contact number </label>
              <InputForm
                type={"text"}
                placeholder={"Contact...."}
                width={"45"}
                marginRight={"10"}
              />
            </div>
          </FromWrapper>

          <HR />

          <H3> Password Reset: </H3>

          <FromWrapper>
            <div className="div1">
              <label className="label"> Existing Password </label>
              <InputForm
                type={"text"}
                placeholder={"Existing Password..."}
                width={"96"}
                marginRight={"10"}
              />
            </div>
          </FromWrapper>

          <FromWrapper>
            <div className="div1">
              <label className="label"> New Password </label>
              <InputForm
                type={"password"}
                placeholder={"Password..."}
                width={"93"}
                marginRight={"10"}
              />
            </div>
            <div className="div1">
              <label className="label"> Confirm Password </label>
              <InputForm
                type={"password"}
                placeholder={"Confirm_Password...."}
                width={"93"}
                marginRight={"10"}
              />
            </div>
          </FromWrapper>
        </ProfileContainer>

        <ImageContainer>
          <img className="profileImg" src={image} alt="Profile" />
          <Buttons name={"UPDATE"} size={"25"} />
        </ImageContainer>
      </Div>

      <Buttons name={"SAVE CHANGES"} size={"15"} marginLeft={0} />
    </>
  );
};

export default Profile;
