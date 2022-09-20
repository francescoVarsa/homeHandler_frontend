import { Typography, useTheme } from "@mui/material";
import { Colors } from "../../../types/types";

type TitleProps = {
  color?: Colors;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
};

export default function Title({ color = "purple", tag, text }: TitleProps) {
  const theme = useTheme();

  return (
    <Typography variant={tag} color={theme.palette[color].main}>
      {text}
    </Typography>
  );
}
