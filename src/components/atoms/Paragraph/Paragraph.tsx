import { useContext, useMemo } from "react";
import { Theme, ThemeContext } from "../../context/ThemeContext";

type ParagraphProps = {
  size?: keyof Theme["theme"]["titleSize"];
  color?: keyof Theme["theme"]["colors"];
  text: string;
};

export default function Paragraph({
  size = "m",
  color = "white",
  text,
}: ParagraphProps) {
  const ctx = useContext(ThemeContext);
  const theme = useMemo(() => ctx?.theme, [ctx?.theme]);

  return (
    <p
      style={{
        fontSize: theme?.["textSize"][size],
        color: theme?.["colors"][color],
      }}
    >
      {text}
    </p>
  );
}
