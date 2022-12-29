import { Box, Grid } from "@mui/material";

export function FoodPlan() {
  return (
    <Box flex={1}>
      <Grid container item columnSpacing={2} md={8} xs={12}>
        <Grid item md={4}></Grid>
      </Grid>
    </Box>
  );
}
