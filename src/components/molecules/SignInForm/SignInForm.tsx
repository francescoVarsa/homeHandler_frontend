import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import EmailInputField from "../EmailInputField/EmailInputField";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Title from "../../atoms/Title/Title";
import styles from "./../../organisms/AuthForm/AuthForm.module.scss";

type SignInSchema = {
  email: string;
  password: string;
};

type SubmitHandler = (value: { username: string; password: string }) => void;

export const SignInForm = forwardRef((_, ref) => {
  const { t } = useTranslation();
  const [secureTxt, setSecureTxt] = useState(true);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const passCredentialToHandler = useCallback(
    ({ email, password }: SignInSchema, submitHandler: SubmitHandler) => {
      const credentials = { username: email, password };

      submitHandler(credentials);
    },
    []
  );

  useImperativeHandle(ref, () => ({
    onSubmit: (loginFn: SubmitHandler) => {
      const onSubmitHandler = (formData: SignInSchema) =>
        passCredentialToHandler(formData, loginFn);
      handleSubmit(onSubmitHandler)();
    },
  }));

  const startResetPasswordProcedure = useCallback(
    () => navigate("/requestResetPassword"),
    [navigate]
  );

  return (
    <>
      <Grid item md={12} sx={{ padding: "0px!important" }}>
        <Title tag={"h5"} text={t("authPages:form-title-login")} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12}>
          <EmailInputField control={control} />
        </Grid>
        <Grid item md={6} sm={12}>
          <Controller
            name="password"
            rules={{
              required: {
                value: true,
                message: t("inputValidation:required"),
              },
              minLength: {
                value: 8,
                message: t("inputValidation:password-wrong-pattern"),
              },
            }}
            control={control}
            render={({ field, fieldState }) => {
              return (
                <FormControl color="purple">
                  <InputLabel
                    size="small"
                    htmlFor="outlined-basic-pwd"
                    className={styles["form-input-wrapper__label"]}
                  >
                    {t("inputValidation:label-pwd")}
                  </InputLabel>
                  <OutlinedInput
                    {...field}
                    id="outlined-basic-pwd"
                    label={t("inputValidation:label-pwd")}
                    size="small"
                    fullWidth
                    error={fieldState.error != null}
                    placeholder={t("inputValidation:label-pwd")}
                    type={secureTxt ? "password" : "text"}
                    className={styles["pwd"]}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                          color="purple"
                          onClick={() => setSecureTxt(!secureTxt)}
                        >
                          {secureTxt ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {fieldState.error && (
                    <FormHelperText
                      error={fieldState.error != null}
                      id="outlined-basic-pwd"
                    >
                      {fieldState.error.message}
                    </FormHelperText>
                  )}
                </FormControl>
              );
            }}
          />
        </Grid>
        <Box paddingTop={1} paddingLeft={2}>
          <span className={styles.link} onClick={startResetPasswordProcedure}>
            <Paragraph
              small={true}
              color={"purple"}
              text={t("authPages:forgot-password-label")}
            />
          </span>
        </Box>
      </Grid>
    </>
  );
});
