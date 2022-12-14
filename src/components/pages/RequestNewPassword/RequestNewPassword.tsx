import { Box, useTheme } from "@mui/material";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import ProgressIllustration from "../../atoms/Illustrations/ProgressIllustration";
import { ChangePasswordForm } from "../../organisms/ChangePasswordForm/ChangePasswordForm";
import RequestNewPasswordForm from "../../organisms/RequestNewPasswordForm/RequestNewPasswordForm";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

export default function RequestNewPassword() {
  const navParams = useParams();
  const resetValidationToken = useMemo(
    () => navParams?.token,
    [navParams?.token]
  );

  const theme = useTheme();

  return (
    <MainTemplate hasHeaderLogo={false} hasMenu={false}>
      <Box
        display={"flex"}
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={theme.palette.darkBlue.main}
        position={"relative"}
      >
        <Box
          alignItems={"center"}
          flex={1}
          position={"absolute"}
          top={0}
          bottom={0}
          right={0}
          left={0}
        >
          <ProgressIllustration />
        </Box>
        <BlurredBackground>
          {!resetValidationToken ? (
            <RequestNewPasswordForm />
          ) : (
            <ChangePasswordForm token={resetValidationToken} />
          )}
        </BlurredBackground>
      </Box>
    </MainTemplate>
  );
}
