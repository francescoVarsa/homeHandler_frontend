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
};

type LoginDataSchema = {
  username: string;
  password: string;
};

export default function AuthForm({ formType }: AuthFormProps) {
  const { t } = useTranslation();

  const loginFormRef = useRef<any>(null);
  const signUpFormRef = useRef<any>(null);

  // Login api call
  const [loginTrigger] = authApi.useLoginMutation();

  const handleLogin = async ({ username, password }: LoginDataSchema) => {
    const credentials = { username, password };

    const response = await loginTrigger(credentials).unwrap();
    console.log(response);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formType === "login") {
      loginFormRef.current.onSubmit(handleLogin);
    } else {
      signUpFormRef.current.onSubmit();
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
