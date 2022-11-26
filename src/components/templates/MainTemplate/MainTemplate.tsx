import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../atoms/Logo/Logo";
import { Menu } from "../../organisms/Menu/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

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
  const menuOptions = [
    { label: "Home", icon: <HomeRoundedIcon />, linkTo: "/home/start" },
    {
      label: "Account",
      icon: <AccountCircleRoundedIcon />,
      linkTo: "/home/start",
    },
    { label: "Settings", icon: <SettingsRoundedIcon />, linkTo: "/home/start" },
    { label: "Sign out", icon: <LogoutRoundedIcon />, linkTo: "/home/start" },
  ];

  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      minHeight={"100vh"}
      width={"100vw"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box display={"flex"} flex={1} overflow={"hidden"}>
        <Box
          bgcolor={theme.palette["darkBlue"].main}
          flex={1}
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"column"}
        >
          <Grid
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
          <Grid container p={2} display={"flex"} flex={1}>
            {matches ? (
              <Grid item xs={12} display={"flex"} flex={1} gap={2}>
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
                  position={"relative"}
                >
                  <Box
                    display={"flex"}
                    flex={1}
                    flexDirection={"column"}
                    gap={"30px"}
                  >
                    <Box display={"flex"} flex={9}>
                      {children}
                    </Box>

                    {hasMenu && (
                      <Menu options={menuOptions} isMobileVersion={true} />
                    )}
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
