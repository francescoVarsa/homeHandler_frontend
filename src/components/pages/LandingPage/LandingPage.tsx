import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import LandingPageTemplate from "../../templates/LandingPageTemplate";

export default function LandingPage() {
  const theme = useTheme();
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      sx={{ background: theme.palette.darkBlue.main }}
    >
      <LandingPageTemplate />
    </Box>
  );
}
