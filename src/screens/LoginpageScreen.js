import React, { useEffect } from "react";
import LogoImage from "../static/images/image 3.png";
import { getLoginDetails } from "../store/actions/LoginActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  LogoWrapper,
  Image,
  FormContainer,
  FormTitle,
  FormLabel,
  FormButton,
  ForgotLink,
} from "../static/CSS/Style";
import { FormInputs } from "../components/Athentication/FormInputs";
export const LoginpageScreen = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.LoginDetails?.login?.access);
  console.log(token);
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {
      email,
      password,
    };
    dispatch(getLoginDetails(data));
  };
  useEffect(() => {
    token && navigate("/");
  }, [token]);
  return (
    <>
      <LogoWrapper>
        <Image src={LogoImage} alt="logo image" />
      </LogoWrapper>
      <FormContainer
        theme={{ width: "840px", height: "515px" }}
        onSubmit={handleForm}
      >
        <FormTitle>Login To Your Account</FormTitle>
        <FormLabel>Enter Your Email</FormLabel>
        <FormInputs type="email" name="email" />
        <FormLabel>Enter Your Password</FormLabel>
        <FormInputs type="password" name="password" />
        <div>
          <FormButton>Login</FormButton>
        </div>
        <ForgotLink to="/Forgot">Forgot Password? Click Here</ForgotLink>
      </FormContainer>
    </>
  );
};
