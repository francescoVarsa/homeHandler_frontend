import { CircularProgress, Grid, Typography, useTheme } from "@mui/material";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Control, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { authApi } from "../../../service/api/Auth";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import EmailInputField from "../EmailInputField/EmailInputField";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

type ResetPasswordStepProps = {
  step: 0 | 1;
  setIsStepFailed: (value: boolean) => void;
};

type StepRequestFormProps = {
  step: ResetPasswordStepProps["step"];
  control: Control<{ email: string }>;
};

type StepViewProps = {
  step: StepRequestFormProps["step"];
  control: StepRequestFormProps["control"];
  message: string;
  status?: "error" | "completed";
};

export const ResetPasswordStep = forwardRef(
  ({ step, setIsStepFailed }: ResetPasswordStepProps, ref) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [stepCompleted, setStepCompleted] = useState(false);
    const { control, handleSubmit } = useForm({
      defaultValues: {
        email: "",
      },
    });

    const [sendRequestNewPasswordEmailTrigger] =
      authApi.useSendResetPasswordEmailMutation();

    const onSubmit = async ({ email }: { email: string }) => {
      const payload = {
        username: email,
      };
      setIsLoading(true);
      setError(null);
      setStepCompleted(false);

      try {
        await sendRequestNewPasswordEmailTrigger(payload).unwrap();
        setIsLoading(false);
        setError(null);
        setStepCompleted(true);
      } catch (error: any) {
        let errMessage = t("resetPassword:generic-err-response");

        if (error.status === 400) {
          errMessage = t("resetPassword:user-not-exists");
        }
        setError(errMessage);

        setIsLoading(false);
        setStepCompleted(false);
      }
    };

    useImperativeHandle(ref, () => ({
      sendResetEmail: () => handleSubmit(onSubmit)(),
    }));

    useEffect(() => {
      if (error) {
        setIsStepFailed(true);
      } else {
        setIsStepFailed(false);
      }
    }, [error]);

    return (
      <Grid container mt={6} columnSpacing={4}>
        {isLoading ? (
          <Grid
            item
            md={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CircularProgress color="purple" size={80} />
          </Grid>
        ) : (
          <StepView
            step={step}
            control={control}
            status={error ? "error" : stepCompleted ? "completed" : undefined}
            message={error ?? ""}
          />
        )}
      </Grid>
    );
  }
);

const StepView = ({ status, control, step, message }: StepViewProps) => {
  switch (status) {
    default:
      return <StepRequestForm control={control} step={step} />;

    case "error":
      return <Error message={message} />;

    case "completed":
      return <Completed />;
  }
};

const StepRequestForm = ({ step, control }: StepRequestFormProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <Grid item md={6} paddingRight={2}>
        {/* Here goes the text that explain what the user need to do in this step */}
        <Typography color={theme.palette["white"].main}>
          {t(`resetPassword:step-${step}-info`)}
        </Typography>
      </Grid>
      <Grid
        item
        md={6}
        borderLeft={`1px solid ${theme.palette["purple"].main}`}
      >
        {/* Here there will be positioned text inputs contextually to the step operation */}
        <Grid container item md={12}>
          <EmailInputField control={control} />
        </Grid>
      </Grid>
    </>
  );
};

const Error = ({ message }: { message: string }) => {
  return (
    <Grid container item md={12} display={"flex"} rowSpacing={2}>
      <Grid item md={12} textAlign={"center"}>
        <ErrorOutlineIcon
          color="error"
          sx={{ width: "120px", height: "auto" }}
        />
      </Grid>
      <Grid item md={12} textAlign={"center"}>
        <Typography color="error" fontWeight={600}>
          {message}
        </Typography>
      </Grid>
    </Grid>
  );
};

const Completed = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Grid container item md={12} display={"flex"} rowSpacing={2}>
      <Grid item md={12} textAlign={"center"}>
        <CheckCircleOutlineIcon
          color="success"
          sx={{ width: "120px", height: "auto" }}
        />
      </Grid>
      <Grid item md={12} textAlign={"center"}>
        <Typography color={theme.palette["success"].main} fontWeight={600}>
          {t("resetPassword:email-sent")}
        </Typography>
      </Grid>
    </Grid>
  );
};
