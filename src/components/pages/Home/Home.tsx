import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CardAddNew } from "../../molecules/CardAddNew/CardAddNew";

export function Home() {
  const { t } = useTranslation();

  return (
    <Box display={"flex"} justifyContent={"center"} flex={1}>
      <Grid container columnSpacing={2} md={8} xs={12}>
        <Grid item md={4} xs={4}>
          <Box>
            <CardAddNew text={t("homeScreen:newFoodPlanExplanation")} />
          </Box>
        </Grid>
        <Grid item md={4} xs={4}>
          <Box>
            <CardAddNew text={t("homeScreen:newTrainingExplanation")} />
          </Box>
        </Grid>
        <Grid item md={4} xs={4}>
          <Box>
            <CardAddNew text={t("homeScreen:newFinancePlanExplanation")} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
