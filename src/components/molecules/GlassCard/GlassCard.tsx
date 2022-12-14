import { Box } from "@mui/material";
import styles from "./GlassCard.module.scss";

type GlassCardProps = {
  color1?: string;
  color2?: string;
  imgType: "food" | "gym" | "gold";
  cardTitle: string;
  cardDescription: string;
  cardButtonLabel: string;
};

export function GlassCard({
  color1 = "#ffbc00",
  color2 = "#ff0058",
  imgType,
  cardTitle,
  cardDescription,
  cardButtonLabel,
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
          <h2>{cardTitle}</h2>
          <p>{cardDescription}</p>
          <a href="/">{cardButtonLabel}</a>
          <Box className={styles.card__img__wrapper}>
            {imgType === "gym" && (
              <div className={`${styles.card__img} ${styles.card__img__gym}`} />
            )}
            {imgType === "food" && (
              <div
                className={`${styles.card__img} ${styles.card__img__food}`}
              />
            )}
            {imgType === "gold" && (
              <div
                className={`${styles.card__img} ${styles.card__img__gold}`}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
