import { Button } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import ControlPanelIllustration from "../atoms/Illustrations/ControlPanelIllustration";
import Logo from "../atoms/Logo/Logo";
import Paragraph from "../atoms/Paragraph/Paragraph";
import Title from "../atoms/Title/Title";

type Props = {};

export default function LandingPageTemplate({}: Props) {
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
          <Title
            tag={2}
            text={
              "La gestione del proprio tempo non è sempre semplice tra lavoro, doveri quotidiani, sport ecc."
            }
          />

          <Paragraph
            size="xxl"
            text="SmartyRoutine permette di creare, monitorare ed organizzare la
            propria routine mettendo a disposizione una serie di funzionalità
            che hanno lo scopo di agevolare e migliorare la gestione del proprio
            tempo."
          ></Paragraph>

          <Button variant="outlined">Inizia subito</Button>
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
