import { Button, Grid, Typography, useTheme } from "@mui/material";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../../service/api/Auth";
import EmailInputField from "../../molecules/EmailInputField/EmailInputField";

export default function RequestNewPasswordForm() {
  const { t } = useTranslation();
  const theme = useTheme();
  const { control, handleSubmit } = useForm({ defaultValues: { email: "" } });
  const navigate = useNavigate();
  const [sendTrigger, sendResult] = authApi.useSendResetPasswordEmailMutation();

  const onSubmit = useCallback(
    async (formValue: { email: string }) => {
      try {
        const result = await sendTrigger({
          username: formValue.email,
        }).unwrap();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
    [sendTrigger]
  );

  const goBackToLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          sx={{ color: `${theme.palette["purple"].main}!important` }}
        >
          {t("resetPassword:send-email-title")}
        </Typography>
      </Grid>
      <Grid item container xs={12} rowSpacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ color: "white!important" }}>
            {t("resetPassword:send-email-help")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <EmailInputField control={control} />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ marginRight: 2 }}
            color={"lightPurple"}
            variant={"outlined"}
            onClick={handleSubmit(onSubmit)}
          >
            {t("resetPassword:send-button-label")}
          </Button>
          <Button onClick={goBackToLogin} color={"error"} variant={"outlined"}>
            {t("resetPassword:back-button-label")}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
