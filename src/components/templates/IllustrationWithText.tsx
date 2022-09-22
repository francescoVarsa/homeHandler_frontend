import Grid from "@mui/material/Grid";
import Background from "../atoms/Background";

type IllustrationWithTextProps = {
  textColumn: JSX.Element | JSX.Element[];
  illustration: JSX.Element | JSX.Element[];
};

export default function IllustrationWithText({
  illustration,
  textColumn,
}: IllustrationWithTextProps) {
  return (
    <Background>
      <Grid
        flex={1}
        container
        spacing={10}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item md={4} sm={8} xs={10}>
          {textColumn}
        </Grid>
        <Grid item md={4} sm={8} xs={10}>
          {illustration}
        </Grid>
      </Grid>
    </Background>
  );
}
