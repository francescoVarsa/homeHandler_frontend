import { Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

type ResetPasswordStepProps = {
  step: 0 | 1;
};

export default function ResetPasswordStep({ step }: ResetPasswordStepProps) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container mt={3}>
      <Grid item md={4}>
        {/* Here goes the text that explain what the user need to do in this step */}
        <Typography color={theme.palette["white"].main}>
          {t(`resetPassword:step-${step}-info`)}
        </Typography>
      </Grid>
      <Grid item md={8}>
        {/* Here there will be positioned text inputs contextually to the step operation */}
      </Grid>
    </Grid>
  );
}
