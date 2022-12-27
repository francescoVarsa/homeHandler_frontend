import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export function FoodPlan() {
  const theme = useTheme();

  return (
    <Box flex={1}>
      <Grid container item columnSpacing={2} md={8} xs={12}>
        <Grid item md={4}>
          <Card variant="newItem">
            <CardContent>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={2}
                alignItems={"center"}
              >
                <Box
                  p={1}
                  pb={3}
                  borderBottom={`1px solid ${theme.palette.lightPurple.main}`}
                >
                  <Typography textAlign={"center"} color={"white"}>
                    Crea il tuo piano alimentare personalizzato e scopri le
                    funzioni smart che ti aiuteranno a gestire in dettaglio ogni
                    aspetto della tua dieta
                  </Typography>
                </Box>
                <Button
                  color="lightPurple"
                  sx={{
                    color: `${theme.palette.darkBlue.main}`,
                    textTransform: "none",
                  }}
                  variant="contained"
                >
                  <Typography sx={{ fontWeight: "bold", mr: 1 }}>
                    Add New
                  </Typography>
                  <AddIcon fontSize="small" />
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
