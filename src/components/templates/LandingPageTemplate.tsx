import { Button } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import ControlPanelIllustration from "../atoms/Illustrations/ControlPanelIllustration";
import Logo from "../atoms/Logo/Logo";
import Paragraph from "../atoms/Paragraph/Paragraph";
import Title from "../atoms/Title/Title";
import { useTranslation } from "react-i18next";

type Props = {};

export default function LandingPageTemplate({}: Props) {
  const { t } = useTranslation();

  return (
    <Grid
      container
      columnSpacing={2}
      disableEqualOverflow={true}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Grid xs={4}>
        <div>
          <Logo color="purple" width={450} height={100} />
          <Title tag={2} text={t("landingPage:title")} />

          <Paragraph size="xxl" text={t("landingPage:description")}></Paragraph>

          <Button variant="outlined">{t("landingPage:start_button")}</Button>
        </div>
      </Grid>
      <Grid xs={6}>
        <div>
          <ControlPanelIllustration />
        </div>
      </Grid>
    </Grid>
  );
}
