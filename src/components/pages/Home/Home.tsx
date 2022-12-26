import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

export function Home() {
  return (
    <MainTemplate hasHeaderLogo={true}>
      <Grid container justifyContent={"space-around"} display={"flex"} flex={1}>
        <Grid item container md={8}>
          <Grid item md={4} xs={12} bgcolor={"red"}></Grid>
          <Grid item md={4} xs={12} bgcolor={"orange"}></Grid>
          <Grid item md={4} xs={12} bgcolor={"blue"}></Grid>
        </Grid>
      </Grid>
    </MainTemplate>
  );
}
