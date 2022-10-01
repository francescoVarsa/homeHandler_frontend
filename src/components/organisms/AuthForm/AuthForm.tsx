import { Grid } from "@mui/material";
import { FormEvent, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { authApi } from "../../../service/api/Auth";
import Button from "../../atoms/Button/Button";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import { SignInForm } from "../../molecules/SignInForm/SignInForm";
import { SignUpForm } from "../../molecules/SignUpForm/SignUpForm";
import styles from "./AuthForm.module.scss";

type AuthFormProps = {
  formType: "signUp" | "login";
  authHandler: Function;
};

type RegistrationData = {
  name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function AuthForm({ formType, authHandler }: AuthFormProps) {
  const { t } = useTranslation();

  const loginFormRef = useRef<any>(null);
  const signUpFormRef = useRef<any>(null);

  // Registration api call
  const [signUpTrigger] = authApi.useSignUpMutation();

  const handleRegistration = async ({
    email,
    name,
    last_name,
    password,
  }: RegistrationData) => {
    const credentials = { email, name, last_name, password };
    const res = await signUpTrigger(credentials).unwrap();
    console.log(res);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formType === "login") {
      loginFormRef.current.onSubmit(authHandler);
    } else {
      signUpFormRef.current.onSubmit(handleRegistration);
    }
  };

  return (
    <Grid
      component={"form"}
      onSubmit={handleSubmit}
      container
      display={"flex"}
      justifyContent={"center"}
      spacing={0}
      rowGap={4}
    >
      {formType === "login" ? (
        <SignInForm ref={loginFormRef} />
      ) : (
        <SignUpForm ref={signUpFormRef} />
      )}

      <Grid item md={12}>
        <Link
          className={styles.link}
          to={formType === "login" ? "/signUp" : "/login"}
        >
          <Paragraph
            color={"purple"}
            text={
              formType === "login"
                ? t("authPages:no-account-registered")
                : t("authPages:account-already-registered")
            }
          />{" "}
        </Link>
      </Grid>
      <Grid item md={12}>
        <Button
          type={"submit"}
          variant={"outlined"}
          size={"large"}
          color={"purple"}
          text={
            formType === "signUp"
              ? t("authPages:form-button-label-signUp")
              : t("authPages:form-button-label-login")
          }
        />
      </Grid>
    </Grid>
  );
}
