import React from "react";
import LogoImage from "../static/images/image 3.png";
import { FormInputs } from "../components/Athentication/FormInputs";
import {
  LogoWrapper,
  Image,
  FormContainer,
  FormTitle,
  FormLabel,
  FormButton,
} from "../static/CSS/Style";

export const ChangePasswordScreen = () => {
  return (
    <div>
      <LogoWrapper>
        <Image src={LogoImage} alt="logo image" />
      </LogoWrapper>
      <FormContainer theme={{ width: "840px", height: "469px" }}>
        <FormTitle>Change Password</FormTitle>
        <FormLabel>Enter New Password</FormLabel>
        <FormInputs type="password" />
        <FormLabel>Enter Confirm Password</FormLabel>
        <FormInputs type="password" />
        <div>
          <FormButton>Login</FormButton>
        </div>
      </FormContainer>
    </div>
  );
};
