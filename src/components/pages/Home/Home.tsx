import { Grid } from "@mui/material";
import { GlassCard } from "../../molecules/GlassCard/GlassCard";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

export function Home() {
  return (
    <MainTemplate hasHeaderLogo={true}>
      <Grid container justifyContent={"space-around"} display={"flex"} flex={1}>
        <Grid item md={4} xs={12}>
          <GlassCard />
        </Grid>
        <Grid item md={4} xs={12}>
          <GlassCard color1="#03a9f4" color2="#ff0058" />
        </Grid>
        <Grid item md={4} xs={12}>
          <GlassCard color1="#4dff03" color2="#00d0ff" />
        </Grid>
      </Grid>
    </MainTemplate>
  );
}
