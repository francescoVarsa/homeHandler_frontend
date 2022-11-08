import { Grid } from "@mui/material";
import Background from "../../atoms/backgrouds/Background/Background";
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
        <Grid item xs={12} sm={12} md={6}>
          <AuthIllustration color="lightPurple" />
          {children}
        </Grid>
      </Grid>
    </Background>
  );
}
