import { Box } from "@mui/material";
import styles from "./GlassCard.module.scss";
import GymImg from "./../../../static/images/gym_card.png";
import FoodImg from "./../../../static/images/food_card.png";

type GlassCardProps = {
  color1?: string;
  color2?: string;
  imgType: "food" | "gym";
};

export function GlassCard({
  color1 = "#ffbc00",
  color2 = "#ff0058",
  imgType,
}: GlassCardProps) {
  return (
    <Box className={styles.container}>
      <Box
        className={styles.box}
        sx={{
          "&:after": {
            background: `linear-gradient(315deg, ${color1}, ${color2})!important`,
          },
          "&:before": {
            background: `linear-gradient(315deg, ${color1}, ${color2})!important`,
          },
        }}
      >
        <span></span>
        <Box className={styles.content}>
          <h2>Card One</h2>
          <p>
            Lorem ipsum dolor ti amet, consecutor adipisicing elit, sed do
            eiusmod tempor incidunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">Read More </a>
          <Box className={styles.card__img__wrapper}>
            {imgType === "gym" && (
              <div className={`${styles.card__img} ${styles.card__img__gym}`} />
            )}
            {imgType === "food" && (
              <div
                className={`${styles.card__img} ${styles.card__img__food}`}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
