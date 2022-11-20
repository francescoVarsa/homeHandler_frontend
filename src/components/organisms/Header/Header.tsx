import { Box, useTheme } from "@mui/material";
import Logo from "../../atoms/Logo/Logo";

export default function Header() {
  const theme = useTheme();
  return (
    <Box
      p={2}
      display={"flex"}
      justifyContent={"center"}
      bgcolor={theme.palette.darkViolet.main}
    >
      <Box>
        <Logo color="lightPurple" />
      </Box>
    </Box>
  );
}
