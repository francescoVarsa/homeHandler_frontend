import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import Logo from "../../atoms/Logo/Logo";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Title from "../../atoms/Title/Title";

export default function LandingPageCallToAction() {
  const { t } = useTranslation();
  const navigation = useNavigate();

  return (
    <Grid container rowSpacing={6}>
      <Grid item md={12}>
        <Logo color={"purple"} />
      </Grid>
      <Grid item md={12}>
        <Title tag={"h4"} text={t("landingPage:title")} color={"purple"} />
      </Grid>
      <Grid item md={12}>
        <Paragraph text={t("landingPage:description")} color={"white"} />
      </Grid>
      <Grid item md={12}>
        <Button
          onClick={() => navigation("/login")}
          type="button"
          variant="outlined"
          text={t("landingPage:start_button")}
          size={"large"}
        />
      </Grid>
    </Grid>
  );
}
