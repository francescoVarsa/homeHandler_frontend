import { Grid } from "@mui/material";
import Background from "../../atoms/backgrouds/Background/Background";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import AuthIllustration from "../../atoms/Illustrations/AuthIllustration";

type AuthFormTemplateProps = {
  children: JSX.Element | JSX.Element[];
};

export default function AuthFormTemplate({ children }: AuthFormTemplateProps) {
  return (
    <Background>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item md={6}>
          <AuthIllustration color="lightPurple" />
          <BlurredBackground
            borderThickness={1}
            borderColor={"purple"}
            rgbaColor={"rgb(16, 0, 43, 0.9)"}
          >
            {children}
          </BlurredBackground>
        </Grid>
      </Grid>
    </Background>
  );
}
