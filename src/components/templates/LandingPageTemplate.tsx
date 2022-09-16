import { Button } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import ControlPanelIllustration from "../atoms/Illustrations/ControlPanelIllustration";
import Logo from "../atoms/Logo";

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
          <h2>
            La gestione del proprio tempo non è sempre semplice tra lavoro,
            doveri quotidiani, sport ecc.
          </h2>

          <p>
            SmartyRoutine permette di creare, monitorare ed organizzare la
            propria routine mettendo a disposizione una serie di funzionalità
            che hanno lo scopo di agevolare e migliorare la gestione del proprio
            tempo.
          </p>

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
