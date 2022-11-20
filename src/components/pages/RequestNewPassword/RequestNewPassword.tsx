import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Background from "../../atoms/backgrouds/Background/Background";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import ProgressIllustration from "../../atoms/Illustrations/ProgressIllustration";
import RequestNewPasswordForm from "../../organisms/RequestNewPasswordForm/RequestNewPasswordForm";

type RequestNewPasswordProps = {
  step?: number;
};

export default function RequestNewPassword({ step }: RequestNewPasswordProps) {
  const navParams = useParams();
  const resetValidationToken = useMemo(
    () => navParams?.token,
    [navParams?.token]
  );

  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Background>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item md={6} sm={12}>
          <ProgressIllustration />
          <BlurredBackground widthPercentage={lg ? 35 : 60}>
            <RequestNewPasswordForm />
          </BlurredBackground>
        </Grid>
      </Grid>
    </Background>
  );
}
