import { Box, useTheme } from "@mui/material";
import { Colors } from "../../../../types/types";
import styles from "./BlurredBackground.module.scss";

type BlurredBackgroundProps = {
  rgbaColor?: string;
  borderColor?: Colors;
  borderThickness?: number;
  children: JSX.Element | JSX.Element[];
  widthPercentage?: number;
  neonEffect?: boolean;
};

export default function BlurredBackground({
  rgbaColor = "rgba(36, 0, 70, 0.6)",
  borderColor = "purple",
  borderThickness = 1,
  children,
  widthPercentage,
  neonEffect = true,
}: BlurredBackgroundProps) {
  const theme = useTheme();
  return (
    <Box
      position={"absolute"}
      bgcolor={rgbaColor}
      top={"50%"}
      left={"50%"}
      padding={"30px 50px"}
      width={widthPercentage != null ? `${widthPercentage}%` : "auto"}
      className={`${styles["form-wrapper"]} ${
        neonEffect ? styles["form-wrapper__neon"] : ""
      }`}
      borderRadius={5}
      border={`${borderThickness}px solid ${theme.palette[borderColor].main}`}
    >
      {children}
    </Box>
  );
}
