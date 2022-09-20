import { Typography, useTheme } from "@mui/material";
import { Colors } from "../../../types/types";

type ParagraphProps = {
  color?: Colors;
  text: string;
};

export default function Paragraph({ color = "white", text }: ParagraphProps) {
  const theme = useTheme();
  return (
    <Typography variant="body1" color={theme.palette[color].main}>
      {text}
    </Typography>
  );
}
