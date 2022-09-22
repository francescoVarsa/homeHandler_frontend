import { Box, useTheme } from "@mui/material";

type BackgroundProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Background({ children }: BackgroundProps) {
  const theme = useTheme();
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      sx={{ background: theme.palette.darkBlue.main }}
    >
      {children}
    </Box>
  );
}
