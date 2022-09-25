import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { authApi } from "../../../service/api/Auth";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import styles from "./AuthForm.module.scss";

type AuthFormProps = {
  formType: "signIn" | "login";
};

export default function AuthForm({ formType }: AuthFormProps) {
  const { t } = useTranslation();
  const [secureTxt, setSecureTxt] = useState(true);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [trigger] = authApi.endpoints.login.useMutation();

  const onSubmit = async ({ email, password }: FieldValues) => {
    const response = await trigger({
      username: email,
      password,
    });

    console.log(response);
  };

  return (
    <BlurredBackground
      borderThickness={1}
      borderColor={"purple"}
      rgbaColor={"rgb(16, 0, 43, 0.9)"}
    >
      <Grid
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        container
        display={"flex"}
        justifyContent={"center"}
        spacing={0}
        rowGap={4}
      >
        <Grid item md={12} sx={{ padding: "0px!important" }}>
          <Title
            tag={"h5"}
            text={
              formType === "signIn"
                ? t("authPages:form-title-signIn")
                : t("authPages:form-title-login")
            }
          />
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
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    color="purple"
                    placeholder="Email"
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
                      Password
                    </InputLabel>
                    <OutlinedInput
                      {...field}
                      id="outlined-basic-pwd"
                      label="Password"
                      size="small"
                      fullWidth
                      error={fieldState.error != null}
                      placeholder="Password"
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
        </Grid>
        <Grid item md={12}>
          <Button
            type={"submit"}
            variant={"outlined"}
            size={"large"}
            color={"purple"}
            text={
              formType === "signIn"
                ? t("authPages:form-button-label-signIn")
                : t("authPages:form-button-label-login")
            }
          />
        </Grid>
      </Grid>
    </BlurredBackground>
  );
}
