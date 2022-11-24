import { Box, Grid, useTheme } from "@mui/material";
import Logo from "../../atoms/Logo/Logo";
import { Menu } from "../../organisms/Menu/Menu";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

type HomeProps = {};

export function Home({}: HomeProps) {
  const theme = useTheme();
  const menuOptions = [
    { label: "Home", icon: <HomeRoundedIcon /> },
    { label: "Account", icon: <AccountCircleRoundedIcon /> },
    { label: "Settings", icon: <SettingsRoundedIcon /> },
    { label: "Sign out", icon: <LogoutRoundedIcon /> },
  ];

  return (
    <MainTemplate>
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
          <Menu options={menuOptions} />
          <Box>
            <Logo color={"lightPurple"} />
          </Box>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12} md={8} px={2}></Grid>
        </Grid>
      </Box>
    </MainTemplate>
  );
}
