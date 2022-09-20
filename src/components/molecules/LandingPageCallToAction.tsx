import Grid from "@mui/system/Unstable_Grid";
import { useTranslation } from "react-i18next";
import Button from "../atoms/Button/Button";
import Logo from "../atoms/Logo/Logo";
import Paragraph from "../atoms/Paragraph/Paragraph";
import Title from "../atoms/Title/Title";

type LandingPageCallToActionProps = {};

export default function LandingPageCallToAction({}: LandingPageCallToActionProps) {
  const { t } = useTranslation();
  return (
    <Grid container>
      <Grid md={12}>
        <Logo width={450} height={100} color={"purple"} />
      </Grid>
      <Grid md={12}>
        <Title
          tag={2}
          text={t("landingPage:title")}
          size={"m"}
          color={"lightPurple"}
        />
      </Grid>
      <Grid md={12}>
        <Paragraph
          size="l"
          text={t("landingPage:description")}
          color={"white"}
        />
      </Grid>
      <Grid md={12}>
        <Button
          onClick={() => {}}
          type="outlined"
          text={t("landingPage:start_button")}
          size={"large"}
        />
      </Grid>
    </Grid>
  );
}
