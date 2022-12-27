import { Box, Grid } from "@mui/material";

export function Home() {
  return (
    <Box display={"flex"} justifyContent={"center"} flex={1}>
      <Grid container columnSpacing={2} md={8}>
        <Grid item md={4} xs={12}>
          <Box></Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box></Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
