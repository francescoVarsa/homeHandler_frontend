import { Box, useTheme } from "@mui/material";

type BackgroundProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Background({ children }: BackgroundProps) {
  const theme = useTheme();
  return (
    <Box display={"flex"} sx={{ background: theme.palette.darkBlue.main }}>
      {children}
    </Box>
  );
}
