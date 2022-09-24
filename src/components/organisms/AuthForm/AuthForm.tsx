import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import styles from "./AuthForm.module.scss";

type AuthFormProps = {
  formType: "signIn" | "login";
};

type FormData = {
  email: string;
  pwd: string;
};

export default function AuthForm({ formType }: AuthFormProps) {
  const { t } = useTranslation();
  const [secureTxt, setSecureTxt] = useState(true);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FieldValues) => console.log(data, errors);

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
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
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
          {/* <Grid item md={6} sm={12}>
            <FormControl color="purple">
              <InputLabel
                size="small"
                htmlFor="outlined-basic-pwd"
                className={styles["form-input-wrapper__label"]}
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-basic-pwd"
                label="Password"
                size="small"
                fullWidth
                placeholder="Password"
                type={secureTxt ? "password" : "text"}
                className={styles["form-input-wrapper"]}
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
                {...register("pwd", { required: true, min: 3 })}
              />
            </FormControl>
          </Grid> */}
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
