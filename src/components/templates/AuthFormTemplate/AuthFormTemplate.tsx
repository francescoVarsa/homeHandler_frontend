import { Box, useTheme } from "@mui/material";
import AuthIllustration from "../../atoms/Illustrations/AuthIllustration";
import MainTemplate from "../MainTemplate/MainTemplate";

type AuthFormTemplateProps = {
  children: JSX.Element | JSX.Element[];
};

export default function AuthFormTemplate({ children }: AuthFormTemplateProps) {
  const theme = useTheme();

  return (
    <MainTemplate>
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
          <AuthIllustration color="lightPurple" />
        </Box>
        {children}
      </Box>
    </MainTemplate>
  );
}
