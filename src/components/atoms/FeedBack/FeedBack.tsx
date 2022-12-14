import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { CircularProgress, Dialog, Grid, Slide, useTheme } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./FeedBack.module.scss";

type FeedBackProps = {
  isLoading: boolean;
  isSuccess: boolean;
  message?: string;
  isOpen: boolean;
  onFeedbackClose?: Function;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FeedBack({
  isLoading,
  isOpen,
  isSuccess,
  message,
  onFeedbackClose,
}: FeedBackProps) {
  const [showDialog, setShowDialog] = useState(isOpen);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowDialog(false);
      onFeedbackClose && onFeedbackClose();
    }, 2000);
  }, [navigate, onFeedbackClose]);

  return (
    <Dialog
      open={showDialog}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          borderRadius: "25px",
          backgroundColor: theme.palette["darkBlue"].main,
          border: `2px solid ${theme.palette["purple"].main}`,
          minWidth: "20%",
        },
      }}
    >
      <Grid
        container
        className={styles["feedback_content"]}
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid item md={12} display={"flex"} justifyContent={"center"}>
          {isLoading ? (
            <CircularProgress color="purple" size={"80px"} />
          ) : isSuccess ? (
            <CheckCircleOutlineIcon
              color="success"
              sx={{ width: "120px", height: "auto" }}
            />
          ) : (
            <ErrorOutlineIcon
              color="error"
              sx={{ width: "120px", height: "auto" }}
            />
          )}
        </Grid>
        <Grid
          item
          marginTop={"25px"}
          md={8}
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          {message && (
            <Paragraph text={message} color={isSuccess ? "success" : "error"} />
          )}
        </Grid>
      </Grid>
    </Dialog>
  );
}
