import Grid from "@mui/system/Unstable_Grid";
import ControlPanelIllustration from "../atoms/Illustrations/ControlPanelIllustration";
import LandingPageCallToAction from "../molecules/LandingPageCallToAction";

export default function LandingPageTemplate() {
  return (
    <Grid
      container
      columnSpacing={2}
      disableEqualOverflow={true}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Grid md={4} xs={10}>
        <LandingPageCallToAction />
      </Grid>
      <Grid md={6} xs={10}>
        <div>
          <ControlPanelIllustration />
        </div>
      </Grid>
    </Grid>
  );
}
