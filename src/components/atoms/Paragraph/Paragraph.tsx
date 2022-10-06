import { Typography, useTheme } from "@mui/material";
import { Colors } from "../../../types/types";

type ParagraphProps = {
  color?: Colors;
  text: string;
  small?: boolean;
};

export default function Paragraph({
  color = "white",
  text,
  small,
}: ParagraphProps) {
  const theme = useTheme();
  return (
    <Typography
      variant={small ? "body2" : "body1"}
      color={theme.palette[color].main}
    >
      {text}
    </Typography>
  );
}
