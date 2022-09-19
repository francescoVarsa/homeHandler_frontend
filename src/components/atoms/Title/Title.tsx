import { useTheme } from "@mui/material";
import { Colors, TextSizeOptions } from "../../../types/types";

type TitleProps = {
  size?: TextSizeOptions;
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
          className={`title-${size}`}
          style={{
            color: theme.palette[color].main,
          }}
        >
          {text}
        </h1>
      );

    case 2:
      return (
        <h2
          className={`title-${size}`}
          style={{
            color: theme.palette[color].main,
          }}
        >
          {text}
        </h2>
      );

    case 3:
      return (
        <h3
          className={`title-${size}`}
          style={{
            color: theme.palette[color].main,
          }}
        >
          {text}
        </h3>
      );

    case 4:
      return (
        <h4
          className={`title-${size}`}
          style={{
            color: theme.palette[color].main,
          }}
        >
          {text}
        </h4>
      );

    case 5:
      return (
        <h5
          className={`title-${size}`}
          style={{
            color: theme.palette[color].main,
          }}
        >
          {text}
        </h5>
      );

    case 6:
      return (
        <h6
          className={`title-${size}`}
          style={{
            color: theme.palette[color].main,
          }}
        >
          {text}
        </h6>
      );
  }
}
