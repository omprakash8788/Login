import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

`;

const LoginForm = styled.form`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <LoginForm>
        <h2>Login</h2>
        <InputContainer>
          <label
            style={{ display: "flex", justifyContent: "left" }}
            htmlFor="loginId"
          >
            Email Address
          </label>
          <Input
            type="text"
            id="loginId"
            placeholder="Enter your email address"
          />
        </InputContainer>
        <InputContainer>
          <label
            style={{ display: "flex", justifyContent: "left" }}
            htmlFor="password"
          >
            Password
          </label>
          <Input required id="password" placeholder="Enter your password" />
        </InputContainer>
        <CheckboxContainer>
          <input
            type="checkbox"
            id="rememberMe"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </CheckboxContainer>
        <CheckboxContainer>
          <input type="checkbox" id="Agree" />
          <label htmlFor="Agree">Agree to <span style={{color:"red"}}>Terms & Conditions</span></label>
        </CheckboxContainer>
        <Button type="submit">Login</Button>
        <p>
          Don't have an account? <RegisterButton>Register here</RegisterButton>
        </p>
      </LoginForm>
    </Container>
  );
};

export default Login;







