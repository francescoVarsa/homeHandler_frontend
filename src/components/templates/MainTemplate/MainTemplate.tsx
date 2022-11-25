import { Box, Grid, useTheme } from "@mui/material";
import Logo from "../../atoms/Logo/Logo";
import Header from "../../organisms/Header/Header";
import { Menu } from "../../organisms/Menu/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

type MainTemplateProps = {
  children: JSX.Element | JSX.Element[];
  hasHeader?: boolean;
};

export default function MainTemplate({
  children,
  hasHeader = false,
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

  return (
    <Box
      minHeight={"100vh"}
      width={"100vw"}
      display={"flex"}
      flexDirection={"column"}
    >
      {hasHeader && <Header />}
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
            <Grid item xs={6} md={2}>
              <Logo color={"lightPurple"} />
            </Grid>
          </Grid>
          <Grid container p={2} display={"flex"} flex={1}>
            <Grid item xs={12} display={"flex"} flex={1}>
              <Menu options={menuOptions} />
              {children}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
