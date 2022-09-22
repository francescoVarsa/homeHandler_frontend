import Grid from "@mui/material/Grid";
import ControlPanelIllustration from "../atoms/Illustrations/ControlPanelIllustration";
import LandingPageCallToAction from "../molecules/LandingPageCallToAction";

export default function LandingPageTemplate() {
  return (
    <Grid
      flex={1}
      container
      spacing={10}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item md={4} sm={8} xs={10}>
        <LandingPageCallToAction />
      </Grid>
      <Grid item md={4} sm={8} xs={10}>
        <ControlPanelIllustration />
      </Grid>
    </Grid>
  );
}
