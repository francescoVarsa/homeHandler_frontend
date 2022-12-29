import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type CardAddNewProps = {
  text: string;
};

export function CardAddNew({ text }: CardAddNewProps) {
  const theme = useTheme();
  return (
    <Card variant="newItem">
      <CardContent>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
        >
          <Box
            p={1}
            pb={3}
            borderBottom={`1px solid ${theme.palette.lightPurple.main}`}
            minHeight={"10vh"}
          >
            <Typography textAlign={"center"} color={"white"}>
              {text}
            </Typography>
          </Box>
          <Button
            color="lightPurple"
            sx={{
              color: `${theme.palette.darkBlue.main}`,
              textTransform: "none",
            }}
            variant="contained"
          >
            <Typography sx={{ fontWeight: "bold", mr: 1 }}>Add New</Typography>
            <AddIcon fontSize="small" />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
