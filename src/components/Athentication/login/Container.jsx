import React, { useEffect, useState } from "react";
import LogoImage from "../../../static/images/image 3.png";
import { FormInputs } from "./FormInputs";
import {
  LogoWrapper,
  Image,
  FormContainer,
  FormTitle,
  FormLabel,
  FormButton,
  ForgotLink,
} from "../../../static/CSS/Style";
export const Container = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  console.log("my name is haseeb");
  return (
    <>
      <LogoWrapper>
        <Image src={LogoImage} alt="logo image" />
      </LogoWrapper>
      <FormContainer
        theme={{ width: "840px", height: "515px" }}
        onSubmit={handleSubmit}
      >
        <FormTitle>Login To Your Account</FormTitle>
        <FormLabel>Enter Your Email</FormLabel>
        <FormInputs
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel>Enter Your Password</FormLabel>
        <FormInputs
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton>Login</FormButton>
        <ForgotLink to="/Forgot">Forgot Password? Click Here</ForgotLink>
      </FormContainer>
    </>
  );
};
