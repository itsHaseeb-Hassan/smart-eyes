import React from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import userprofile from "../static/images/Icons/User_Profile_Icon.svg";
import Buttons from "./Buttons";
import { useDispatch, useSelector } from "react-redux";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 1%;
  margin-top: 3%;
`;

const UserContainer = styled.div`
  width: 60%;
  border: 1px solid ${(props) => props.theme.colors.borders};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bgSecondary};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const FromWrapper = styled.form`
  margin: 2%;
  width: 100%;
  display: flex;

  .div1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .label {
    color: ${(props) => props.theme.colors.text};
    width: 100%;
    margin-bottom: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 35%;
  border: 1px solid ${(props) => props.theme.colors.borders};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bgSecondary};
  height: 292px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .profileImg {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }
`;

const AddSubUsers = () => {
  //   const dispatch = useDispatch();
  //   const [formData, setFormData] = React.useState({
  //     firstname: "",
  //     lastname: "",
  //     email: "",
  //     username: "",
  //     number: "",
  //     password: "",
  //   });

  //   const handleInput = (e) => {
  //     console.log(e.target.value);
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const subUserData = {
  //       firstname: formData.firstname,
  //       lastname: formData.lastname,
  //       email: formData.email,
  //       username: formData.username,
  //       number: formData.number,
  //       password: formData.password,
  //     };
  //     dispatch();
  //   };
  //   console.log(formData);
  return (
    <>
      <Div>
        <UserContainer>
          <FromWrapper>
            <div className="div1">
              <label className="label"> First Name </label>
              <InputForm
                type={"text"}
                placeholder={"First Name...."}
                width={"93"}
                marginRight={"10"}
                // name="firstname"
                // value={formData.firstname}
                // onChange={handleInput}
              />
            </div>
            <div className="div1">
              <label className="label"> Last Name </label>
              <InputForm
                type={"text"}
                placeholder={"Last Name...."}
                width={"93"}
                marginRight={"10"}
                // name="lastname"
                // value={formData.lastname}
                // onChange={handleInput}
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
                // name="email"
                // value={formData.email}
                // onChange={handleInput}
              />
            </div>
            <div className="div1">
              <label className="label"> Username </label>
              <InputForm
                type={"text"}
                placeholder={"Username...."}
                width={"93"}
                marginRight={"10"}
                // name="username"
                // value={formData.username}
                // onChange={handleInput}
              />
            </div>
          </FromWrapper>
          <FromWrapper>
            <div className="div1">
              <label className="label"> Contact Number </label>
              <InputForm
                type={"text"}
                placeholder={"Contact..."}
                width={"93"}
                marginRight={"10"}
                // name="number"
                // value={formData.number}
                // onChange={handleInput}
              />
            </div>
            <div className="div1">
              <label className="label"> Password </label>
              <InputForm
                type={"password"}
                placeholder={"Password...."}
                width={"93"}
                marginRight={"10"}
                autocomplete={"off"}
                // name="password"
                // value={formData.password}
                // onChange={handleInput}
              />
            </div>
          </FromWrapper>
        </UserContainer>

        <ImageContainer>
          <img className="profileImg" src={userprofile} alt="Profile" />
          <Buttons name={"Add profile Image"} size={"90"} />
        </ImageContainer>
      </Div>
      <Buttons
        name={"Create User"}
        size={"20"}
        marginLeft={0}
        // onClick={handleSubmit}
      />
    </>
  );
};

export default AddSubUsers;
