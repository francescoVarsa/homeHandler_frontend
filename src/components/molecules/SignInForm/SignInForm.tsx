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
  TextField,
} from "@mui/material";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Title from "../../atoms/Title/Title";
import styles from "./../../organisms/AuthForm/AuthForm.module.scss";
import Paragraph from "../../atoms/Paragraph/Paragraph";

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

  return (
    <>
      <Grid item md={12} sx={{ padding: "0px!important" }}>
        <Title tag={"h5"} text={t("authPages:form-title-login")} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12}>
          <Controller
            name="email"
            rules={{
              required: {
                value: true,
                message: t("inputValidation:required"),
              },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: t("inputValidation:email-wrong-pattern"),
              },
            }}
            control={control}
            render={({ field, fieldState }) => {
              return (
                <TextField
                  id="outlined-basic-email"
                  label={t("inputValidation:label-email")}
                  variant="outlined"
                  size="small"
                  fullWidth
                  color="purple"
                  placeholder={t("inputValidation:label-email")}
                  helperText={
                    fieldState.error != null ? fieldState.error.message : ""
                  }
                  error={fieldState.error != null}
                  className={styles["form-input-wrapper"]}
                  InputLabelProps={{
                    className: styles["form-input-wrapper__label"],
                  }}
                  InputProps={{
                    className: styles["form-input-wrapper__input"],
                  }}
                  {...field}
                />
              );
            }}
          />
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
        <Box paddingTop={2} paddingLeft={2}>
          <Paragraph
            small={true}
            color={"purple"}
            text={"Password dimenticata?"}
          />
        </Box>
      </Grid>
    </>
  );
});
