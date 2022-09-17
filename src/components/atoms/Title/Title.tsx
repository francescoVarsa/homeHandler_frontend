import { useContext, useMemo } from "react";
import { Theme, ThemeContext } from "../../context/ThemeContext";
import styles from "./Title.module.scss";

type TitleProps = {
  size?: keyof Theme["theme"]["titleSize"];
  color?: keyof Theme["theme"]["colors"];
  tag: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
};

export default function Title({
  size = "m",
  color = "purple",
  tag,
  text,
}: TitleProps) {
  const ctx = useContext(ThemeContext);
  const theme = useMemo(() => ctx?.theme, [ctx?.theme]);

  switch (tag) {
    case 1:
      return (
        <h1
          className={styles["title"]}
          style={{
            color: theme?.colors[color],
            fontSize: theme?.titleSize[size],
          }}
        >
          {text}
        </h1>
      );

    case 2:
      return (
        <h2
          className={styles["title"]}
          style={{
            color: theme?.colors[color],
            fontSize: theme?.titleSize[size],
          }}
        >
          {text}
        </h2>
      );

    case 3:
      return (
        <h3
          className={styles["title"]}
          style={{
            color: theme?.colors[color],
            fontSize: theme?.titleSize[size],
          }}
        >
          {text}
        </h3>
      );

    case 4:
      return (
        <h4
          className={styles["title"]}
          style={{
            color: theme?.colors[color],
            fontSize: theme?.titleSize[size],
          }}
        >
          {text}
        </h4>
      );

    case 5:
      return (
        <h5
          className={styles["title"]}
          style={{
            color: theme?.colors[color],
            fontSize: theme?.titleSize[size],
          }}
        >
          {text}
        </h5>
      );

    case 6:
      return (
        <h6
          className={styles["title"]}
          style={{
            color: theme?.colors[color],
            fontSize: theme?.titleSize[size],
          }}
        >
          {text}
        </h6>
      );
  }
}
