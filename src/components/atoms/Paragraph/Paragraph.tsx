import { useTheme } from "@mui/material";
import { Colors } from "../../../types/types";

type ParagraphProps = {
  size?: string;
  color?: Colors;
  text: string;
};

export default function Paragraph({
  size = "m",
  color = "white",
  text,
}: ParagraphProps) {
  const theme = useTheme();
  return (
    <p
      style={{
        fontSize: "16px",
        color: theme.palette[color].main,
      }}
    >
      {text}
    </p>
  );
}
