import { Grid, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import styles from "./AuthForm.module.scss";

type AuthFormProps = {
  formType: "signIn" | "login";
};

export default function AuthForm({ formType }: AuthFormProps) {
  const { t } = useTranslation();

  return (
    <BlurredBackground borderThickness={1} borderColor={"purple"}>
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
              id="outlined-basic"
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
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              fullWidth
              color="purple"
              placeholder="Password"
              className={styles["form-input-wrapper"]}
              InputLabelProps={{
                className: styles["form-input-wrapper__label"],
              }}
              InputProps={{
                className: styles["form-input-wrapper__input"],
              }}
            />
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
