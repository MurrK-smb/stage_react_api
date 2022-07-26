import React, { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Input from "../Input/Input";
import PopupServerError from "../PopupServerError/PopupServerError";

const Login = ({
  isOpen,
  onClose,
  onSwitch,
  popupRedirectText,
  isLoadingText,
  startLoadingText,
  formValidity,
  onFormUpdate,
  onInputUpdate,
  errorMessage,
  handleLoginSubmit,
  popupServerError,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (evt) => {
    onInputUpdate(evt);
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    onInputUpdate(evt);
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    startLoadingText();
    evt.preventDefault();
    handleLoginSubmit(password, email);
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  return (
    <>
      <PopupWithForm
        name="signin"
        title="Sign in"
        isOpen={isOpen}
        onClose={onClose}
        onSwitch={onSwitch}
        popupRedirectText={popupRedirectText}
        buttonText={"Sign in"}
        loadingText={"Loading.."}
        isLoadingText={isLoadingText}
        onSubmit={handleSubmit}
        formValidity={formValidity}
        onFormUpdate={onFormUpdate}
        popupServerError={popupServerError}
      >
        <Input
          type={"email"}
          idName={"email-signin-input"}
          name={"email"}
          fieldName={"field_email"}
          placeholder={"Enter email"}
          value={email}
          onChange={handleEmailChange}
          errorMessage={errorMessage}
          labelText={"Email"}
        />
        <Input
          type={"password"}
          idName={"password-signin-input"}
          name={"password"}
          fieldName={"field_password"}
          placeholder={"Enter password"}
          minLength={"8"}
          maxLength={"20"}
          value={password}
          onChange={handlePasswordChange}
          errorMessage={errorMessage}
          labelText={"Password"}
        />
        <PopupServerError popupServerError={popupServerError} />
      </PopupWithForm>
    </>
  );
};

export default Login;
