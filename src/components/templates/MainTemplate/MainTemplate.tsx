import { Box } from "@mui/material";
import Header from "../../organisms/Header/Header";

type MainTemplateProps = {
  children: JSX.Element | JSX.Element[];
  hasHeader?: boolean;
};

export default function MainTemplate({
  children,
  hasHeader = false,
}: MainTemplateProps) {
  return (
    <Box
      minHeight={"100vh"}
      width={"100vw"}
      display={"flex"}
      flexDirection={"column"}
    >
      {hasHeader && <Header />}
      <Box display={"flex"} flex={1} overflow={"hidden"}>
        {children}
      </Box>
    </Box>
  );
}
