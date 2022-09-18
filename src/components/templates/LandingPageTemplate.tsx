import Grid from "@mui/system/Unstable_Grid";
import { useTranslation } from "react-i18next";
import Button from "../atoms/Button/Button";
import ControlPanelIllustration from "../atoms/Illustrations/ControlPanelIllustration";
import Logo from "../atoms/Logo/Logo";
import Paragraph from "../atoms/Paragraph/Paragraph";
import Title from "../atoms/Title/Title";

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
          <Logo width={450} height={100} color={"purple"} />
          <Title
            tag={2}
            text={t("landingPage:title")}
            size={"s"}
            color={"lightPurple"}
          />

          <Paragraph
            size="xxl"
            text={t("landingPage:description")}
            color={"white"}
          ></Paragraph>
          <Button
            onClick={() => {}}
            type="outlined"
            text={t("landingPage:start_button")}
            size={"large"}
          />
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
