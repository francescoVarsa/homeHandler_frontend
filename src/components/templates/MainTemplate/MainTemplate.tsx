import { Box } from "@mui/material";
import Header from "../../organisms/Header/Header";

type MainTemplateProps = { children: JSX.Element | JSX.Element[] };

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <Box
      minHeight={"100vh"}
      width={"100vw"}
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"orange"}
    >
      <Header />
      <Box display={"flex"} flex={1} bgcolor={"pink"} overflow={"hidden"}>
        {children}
      </Box>
    </Box>
  );
}
