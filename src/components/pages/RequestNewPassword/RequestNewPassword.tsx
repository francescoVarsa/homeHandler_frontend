import { Grid } from "@mui/material";
import Background from "../../atoms/backgrouds/Background/Background";
import ResetPasswordStepper from "../../organisms/ResetPasswordStepper/ResetPasswordStepper";

export default function RequestNewPassword() {
  return (
    <Background>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item md={6}>
          <ResetPasswordStepper />
        </Grid>
      </Grid>
    </Background>
  );
}
