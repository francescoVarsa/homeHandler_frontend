import { Grid, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";

type AuthFormProps = {
  formType: "signIn" | "login";
};

export default function AuthForm({ formType }: AuthFormProps) {
  const { t } = useTranslation();
  return (
    <BlurredBackground borderThickness={1} borderColor={"purple"}>
      <Grid container spacing={6}>
        <Grid item md={12}>
          <Title
            tag={"h5"}
            text={
              formType === "signIn"
                ? t("authPages:form-title-signIn")
                : t("authPages:form-title-login")
            }
          />
        </Grid>
        <Grid item container md={12}>
          <Grid sx={{ background: "red" }} item md={4}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid sx={{ background: "red" }} item md={4}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
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
