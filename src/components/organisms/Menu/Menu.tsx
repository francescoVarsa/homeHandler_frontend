import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Box, ClickAwayListener } from "@mui/material";
import { cloneElement, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Menu.module.scss";

type MenuOption = {
  label: string;
  icon: JSX.Element;
  onClickHandler?: Function;
  linkTo: string;
};

type MenuProps = {
  options: MenuOption[];
  isMobileVersion?: boolean;
};

type MenuItemProps = {
  icon: JSX.Element;
  label: string;
  onClickHandler: Function;
  selectedItem: string;
  link: string;
};

type MobileMenuProps = {
  options: MenuProps["options"];
  selectedItem: string;
  onClickHandler: Function;
};

export function Menu({ options, isMobileVersion = false }: MenuProps) {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(
    location.state ?? options[0]["label"]
  );
  const navigate = useNavigate();

  const toggleActivation = useCallback(
    () => setIsActive(!isActive),
    [isActive]
  );

  const onClickHandler = useCallback(
    (link: string, item: string) => {
      setSelected(item);
      navigate(link, { state: item });
    },
    [navigate]
  );

  return !isMobileVersion ? (
    <ClickAwayListener onClickAway={() => setIsActive(false)}>
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
                selectedItem={selected}
                link={option.linkTo}
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
    </ClickAwayListener>
  ) : (
    <MobileMenu
      options={options}
      selectedItem={selected}
      onClickHandler={onClickHandler}
    />
  );
}

const MobileMenu = ({
  options,
  selectedItem,
  onClickHandler,
}: MobileMenuProps) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenuActivation = useCallback(
    () => setIsActive(!isActive),
    [isActive]
  );

  const handleClickOutside = useCallback(() => {
    if (isActive) {
      setIsActive(false);
    }
  }, [isActive]);

  return (
    <ClickAwayListener onClickAway={handleClickOutside}>
      <Box className={styles.container__mobile}>
        <Box
          className={`${styles.menu__mobile__content} ${
            isActive ? styles.active__mobile__menu : ""
          }`}
        >
          <ul>
            {options.map((option) => (
              <MenuItem
                key={option.label}
                icon={option.icon}
                label={option.label}
                onClickHandler={onClickHandler}
                selectedItem={selectedItem}
                link={option.linkTo}
              />
            ))}
          </ul>
        </Box>
        <Box
          className={styles.menu__mobile__button}
          onClick={toggleMenuActivation}
        >
          <MenuRoundedIcon />
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

const MenuItem = ({
  icon,
  label,
  onClickHandler,
  selectedItem,
  link,
}: MenuItemProps) => {
  const menuIcon = cloneElement(icon, { className: styles.icon__component });

  return (
    <li>
      <div
        className={styles.nav__item}
        onClick={() => onClickHandler(link, label)}
      >
        <Box className={styles.icon}>
          <div className={selectedItem === label ? styles.active : ""}>
            {menuIcon}
          </div>
        </Box>
        <span className={styles.title}>{label}</span>
      </div>
    </li>
  );
};
