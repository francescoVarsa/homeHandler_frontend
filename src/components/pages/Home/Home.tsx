import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Logo from "../../atoms/Logo/Logo";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

type HomeProps = {};

export function Home({}: HomeProps) {
  const theme = useTheme();

  return (
    <MainTemplate>
      <Box
        bgcolor={theme.palette["darkBlue"].main}
        flex={1}
        display={"flex"}
        alignItems={"flex-start"}
        flexDirection={"column"}
      >
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          p={2}
        >
          <Box>
            <Logo color={"lightPurple"} />
          </Box>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12} md={8} px={2}>
            <Card variant="gradientLight">
              <CardContent>
                <Typography variant="body2">
                  Questo è il tuo workspace, da qui potrai usufruire di tutte le
                  funzionalità di SmartyRoutines, inizia subito col creare un
                  tuo piano alimentare o crea una stanza in comune con altri
                  utenti per condividere i vostri impegni e coordinare le voste
                  routines
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </MainTemplate>
  );
}
