import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import styles from "./AuthForm.module.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

type AuthFormProps = {
  formType: "signIn" | "login";
};

export default function AuthForm({ formType }: AuthFormProps) {
  const { t } = useTranslation();
  const [secureTxt, setSecureTxt] = useState(true);

  return (
    <BlurredBackground
      borderThickness={1}
      borderColor={"purple"}
      rgbaColor={"rgb(16, 0, 43, 0.9)"}
    >
      <Grid
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
            <TextField
              id="outlined-basic-email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              color="purple"
              placeholder="Email"
              className={styles["form-input-wrapper"]}
              InputLabelProps={{
                className: styles["form-input-wrapper__label"],
              }}
              InputProps={{
                className: styles["form-input-wrapper__input"],
              }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
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
                // InputLabelProps={{
                //   className: styles["form-input-wrapper__label"],
                // }}
                // InputProps={{
                //   className: styles["form-input-wrapper__input"],
                // }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Button
            onClick={() => {}}
            type={"outlined"}
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
