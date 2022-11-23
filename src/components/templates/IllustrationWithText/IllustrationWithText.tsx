import Grid from "@mui/material/Grid";
import Background from "../../atoms/backgrouds/Background/Background";
import styles from "./IllustrationWithText.module.scss";

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
        className={styles.main__box}
      >
        <Grid item lg={3} md={4} sm={8} xs={10}>
          {textColumn}
        </Grid>
        <Grid item lg={3} md={4} sm={8} xs={10}>
          {illustration}
        </Grid>
      </Grid>
    </Background>
  );
}
