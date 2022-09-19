import { useTheme } from "@mui/material";
import { Colors, TextSizeOptions } from "../../../types/types";

type ParagraphProps = {
  size?: TextSizeOptions;
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
      className={`text-${size}`}
      style={{
        color: theme.palette[color].main,
      }}
    >
      {text}
    </p>
  );
}
