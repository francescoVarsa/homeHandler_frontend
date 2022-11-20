import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../../service/api/Auth";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PasswordFields from "../../molecules/PasswordFields/PasswordFields";

type ChangePasswordFormProps = { token: string };

export function ChangePasswordForm({ token }: ChangePasswordFormProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const { control, handleSubmit, watch, clearErrors, setError } = useForm({
    defaultValues: { password: "", confirmPassword: "" },
  });
  const navigate = useNavigate();
  const [changePwdTrigger] = authApi.useResetPasswordMutation();
  const [status, setStatus] = useState<
    "neutral" | "loading" | "success" | "error"
  >("neutral");

  const onSubmit = useCallback(
    async (formValue: { password: string; confirmPassword: string }) => {
      try {
        setStatus("loading");
        const payload = { token, new_password: formValue.password };
        await changePwdTrigger(payload).unwrap();
        setStatus("success");
      } catch (error) {
        setStatus("error");
        console.log(error);
      }
    },
    [changePwdTrigger, token]
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
          {t("resetPassword:change-pwd-title")}
        </Typography>
      </Grid>
      <Grid item container xs={12} rowSpacing={2} columnSpacing={2}>
        {status === "neutral" && (
          <>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ color: "white!important" }}>
                {t("resetPassword:change-pwd-description")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <PasswordFields
                inlineFields={false}
                watch={watch}
                setError={setError}
                clearErrors={clearErrors}
                control={control}
              />
            </Grid>
          </>
        )}
        {status === "success" && (
          <Grid item xs={12}>
            <Box
              display={"flex"}
              flex={1}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              py={4}
            >
              <CheckCircleOutlineIcon
                color="success"
                sx={{ width: "120px", height: "auto" }}
              />
              <Typography
                align="center"
                variant="body1"
                sx={{ color: `${theme.palette.success.main}` }}
              >
                {t("resetPassword:change-pwd-success")}
              </Typography>
            </Box>
          </Grid>
        )}
        {status === "error" && (
          <Grid item xs={12}>
            <Box
              display={"flex"}
              flex={1}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              py={4}
            >
              <ErrorOutlineIcon
                color="error"
                sx={{ width: "120px", height: "auto" }}
              />
              <Typography
                align="center"
                variant="body1"
                sx={{ color: `${theme.palette.error.main}` }}
              >
                {t("resetPassword:change-pwd-error")}
              </Typography>
            </Box>
          </Grid>
        )}
        {status === "loading" && (
          <Grid item xs={12}>
            <CircularProgress color="purple" size={"80px"} />
          </Grid>
        )}
        <Grid item xs={12}>
          {status === "neutral" && (
            <Button
              sx={{ marginRight: 2 }}
              color={"lightPurple"}
              variant={"outlined"}
              onClick={handleSubmit(onSubmit)}
            >
              {t("resetPassword:send-button-label")}
            </Button>
          )}
          <Button onClick={goBackToLogin} color={"error"} variant={"outlined"}>
            {t("resetPassword:back-button-label")}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
