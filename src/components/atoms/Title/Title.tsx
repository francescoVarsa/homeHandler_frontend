import { useTheme } from "@mui/material";
import { Colors } from "../../../types/types";

type TitleProps = {
  size?: string;
  color?: Colors;
  tag: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
};

export default function Title({
  size = "m",
  color = "purple",
  tag,
  text,
}: TitleProps) {
  const theme = useTheme();

  switch (tag) {
    case 1:
      return (
        <h1
          style={{
            color: theme.palette[color].main,
            fontSize: "16px",
          }}
        >
          {text}
        </h1>
      );

    case 2:
      return (
        <h2
          style={{
            color: theme.palette[color].main,
            fontSize: "16px",
          }}
        >
          {text}
        </h2>
      );

    case 3:
      return (
        <h3
          style={{
            color: theme.palette[color].main,
            fontSize: "16px",
          }}
        >
          {text}
        </h3>
      );

    case 4:
      return (
        <h4
          style={{
            color: theme.palette[color].main,
            fontSize: "16px",
          }}
        >
          {text}
        </h4>
      );

    case 5:
      return (
        <h5
          style={{
            color: theme.palette[color].main,
            fontSize: "16px",
          }}
        >
          {text}
        </h5>
      );

    case 6:
      return (
        <h6
          style={{
            color: theme.palette[color].main,
            fontSize: "16px",
          }}
        >
          {text}
        </h6>
      );
  }
}
