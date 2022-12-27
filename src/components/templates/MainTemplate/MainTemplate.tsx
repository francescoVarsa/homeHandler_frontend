import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Logo from "../../atoms/Logo/Logo";
import { Menu } from "../../organisms/Menu/Menu";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { useTranslation } from "react-i18next";

type MainTemplateProps = {
  children: JSX.Element | JSX.Element[];
  hasHeaderLogo?: boolean;
  hasMenu?: boolean;
};

export default function MainTemplate({
  children,
  hasHeaderLogo = false,
  hasMenu = true,
}: MainTemplateProps) {
  const theme = useTheme();
  const { t } = useTranslation();

  const menuOptions = [
    {
      label: "Dashboard",
      icon: <DashboardCustomizeIcon />,
      linkTo: "/home/start",
    },
    {
      label: t("menu:foodPlan"),
      icon: <FoodBankIcon />,
      linkTo: "/home/foodPlan",
    },
    // {
    //   label: "Account",
    //   icon: <AccountCircleRoundedIcon />,
    //   linkTo: "/home/start",
    // },
    // { label: "Settings", icon: <SettingsRoundedIcon />, linkTo: "/home/start" },
    { label: "Sign out", icon: <LogoutRoundedIcon />, linkTo: "/home/start" },
  ];

  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [viewPortHeight, setViewPortHeight] = useState(0);

  useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
      setViewPortHeight(window.innerHeight);
    };
    window.addEventListener("resize", documentHeight);
    documentHeight();

    return () => window.removeEventListener("resize", documentHeight);
  }, []);

  return (
    <Box
      height={viewPortHeight}
      width={"100vw"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box
        display={"flex"}
        minHeight={0}
        minWidth={0}
        flex={1}
        overflow={"hidden"}
      >
        <Box
          minHeight={0}
          minWidth={0}
          bgcolor={theme.palette["darkBlue"].main}
          flex={1}
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"column"}
        >
          <Grid
            minHeight={0}
            minWidth={0}
            container
            display={"flex"}
            justifyContent={"center"}
            width={"100%"}
            p={2}
          >
            {hasHeaderLogo && (
              <Grid item xs={6} md={2}>
                <Logo color={"lightPurple"} />
              </Grid>
            )}
          </Grid>
          <Grid
            container
            p={2}
            minHeight={0}
            minWidth={0}
            display={"flex"}
            flex={1}
            overflow={"auto"}
          >
            {matches ? (
              <Grid
                item
                xs={12}
                display={"flex"}
                minHeight={0}
                minWidth={0}
                flex={1}
                gap={2}
              >
                {hasMenu && <Menu options={menuOptions} />}
                <Box display={"flex"} flex={1}>
                  {children}
                </Box>
              </Grid>
            ) : (
              <>
                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  flex={1}
                  minHeight={0}
                  minWidth={0}
                >
                  <Box
                    display={"flex"}
                    flex={1}
                    minHeight={0}
                    minWidth={0}
                    flexDirection={"column"}
                  >
                    <Box display={"flex"} minHeight={0} minWidth={0} flex={1}>
                      {children}
                    </Box>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
          {!matches && hasMenu && (
            <Box px={2} width={"calc(100% - 32px)"} pb={2}>
              <Menu options={menuOptions} isMobileVersion={true} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
