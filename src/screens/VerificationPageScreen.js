import React from "react";
import logoImage from "../static/images/image 3.png";
import { FormInputs } from "../components/Athentication/FormInputs.jsx";
import {
  LogoWrapper,
  Image,
  FormContainer,
  FormTitle,
  FormLabel,
  FormButton,
} from "../static/CSS/Style";
export const VerificationPageScreen = () => {
  return (
    <div>
      <LogoWrapper>
        <Image src={logoImage} alt="logo image" />
      </LogoWrapper>
      <FormContainer theme={{ width: "840px", height: "355px" }}>
        <FormTitle>Enter Verification Code</FormTitle>
        <FormLabel>Verification Code</FormLabel>
        <FormInputs type="text" />
        <div>
          <FormButton>Send Verification Code</FormButton>
        </div>
      </FormContainer>
    </div>
  );
};
