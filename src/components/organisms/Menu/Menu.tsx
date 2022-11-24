import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { cloneElement, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Menu.module.scss";

type MenuOption = {
  label: string;
  icon: JSX.Element;
  onClickHandler?: Function;
};

type MenuProps = {
  options: MenuOption[];
};

type MenuItemProps = {
  icon: JSX.Element;
  label: string;
  onClickHandler: Function;
};

export function Menu({ options }: MenuProps) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(options[0]["label"]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleActivation = useCallback(
    () => setIsActive(!isActive),
    [isActive]
  );

  const onClickHandler = useCallback((item: string) => setSelected(item), []);

  return createPortal(
    <Box position={"absolute"} top={0} left={matches ? 0 : 30}>
      <Box className={styles.container}>
        <Box
          className={`${styles.navigation} ${isActive ? styles.active : ""}`}
        >
          <ul>
            {options.map((option) => (
              <MenuItem
                key={option.label}
                icon={option.icon}
                label={option.label}
                onClickHandler={onClickHandler}
              />
            ))}
          </ul>
        </Box>
        <Box onClick={toggleActivation} className={styles.toggle}>
          {isActive ? (
            <ArrowBackIosRoundedIcon sx={{ fontSize: "26px" }} />
          ) : (
            <ArrowForwardIosRoundedIcon sx={{ fontSize: "26px" }} />
          )}
        </Box>
      </Box>
    </Box>,
    document.body
  );
}

const MenuItem = ({ icon, label, onClickHandler }: MenuItemProps) => {
  const menuIcon = cloneElement(icon, { className: styles.icon__component });

  return (
    <li>
      <a href="/">
        <span className={styles.icon}>{menuIcon}</span>
        <span className={styles.title}>{label}</span>
      </a>
    </li>
  );
};
