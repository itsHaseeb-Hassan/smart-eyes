import React from "react";
import logoImage from "../static/images/image 3.png";
import {
  LogoWrapper,
  Image,
  FormContainer,
  FormTitle,
  FormLabel,
  FormButton,
} from "../static/CSS/Style";
import { FormInputs } from "../components/Athentication/FormInputs.jsx";

export const ForgotPageScreen = () => {
  return (
    <>
      <LogoWrapper>
        <Image src={logoImage} alt="logo image" />
      </LogoWrapper>
      <FormContainer theme={{ width: "840px", height: "355px" }}>
        <FormTitle>Forgot Password</FormTitle>
        <FormLabel>Enter Your Email</FormLabel>
        <FormInputs type="email" />
        <div>
          <FormButton>Send Verification Code</FormButton>
        </div>
      </FormContainer>
    </>
  );
};
