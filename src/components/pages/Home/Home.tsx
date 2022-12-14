import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { GlassCard } from "../../molecules/GlassCard/GlassCard";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

export function Home() {
  const { t } = useTranslation();

  return (
    <MainTemplate hasHeaderLogo={true}>
      <Grid container justifyContent={"space-around"} display={"flex"} flex={1}>
        <Grid item md={4} xs={12}>
          <GlassCard
            cardTitle={t("homeScreen:gym-card-title")}
            cardDescription={t("homeScreen:gym-card-description")}
            cardButtonLabel={t("homeScreen:card-button-start")}
            imgType="gym"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <GlassCard
            cardTitle={t("homeScreen:food-card-title")}
            cardDescription={t("homeScreen:food-card-description")}
            cardButtonLabel={t("homeScreen:card-button-start")}
            imgType="food"
            color1="#03a9f4"
            color2="#ff0058"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <GlassCard
            cardTitle={t("homeScreen:finance-card-title")}
            cardDescription={t("homeScreen:finance-card-description")}
            cardButtonLabel={t("homeScreen:card-button-start")}
            imgType="gold"
            color1="#4dff03"
            color2="#00d0ff"
          />
        </Grid>
      </Grid>
    </MainTemplate>
  );
}
