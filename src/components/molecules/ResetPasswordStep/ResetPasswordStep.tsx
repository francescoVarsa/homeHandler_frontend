import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { CircularProgress, Grid, Typography, useTheme } from "@mui/material";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  Control,
  useForm,
  UseFormClearErrors,
  UseFormSetError,
  UseFormWatch,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { authApi } from "../../../service/api/Auth";
import EmailInputField from "../EmailInputField/EmailInputField";
import PasswordFields from "../PasswordFields/PasswordFields";

type ResetPasswordStepProps = {
  step: 0 | 1;
  setIsStepFailed: (value: boolean) => void;
  token?: string;
  setStepFailed: (value: boolean) => void;
  setIsCompleted: (value: boolean) => void;
};

type StepRequestFormProps = {
  step: ResetPasswordStepProps["step"];
  control: Control<{ email: string }>;
  resetPasswordControl: Control<{ password: string; confirmPassword: string }>;
  watchPassword: UseFormWatch<{
    password: string;
    confirmPassword: string;
  }>;
  setPasswordError: UseFormSetError<{
    password: string;
    confirmPassword: string;
  }>;
  clearPasswordErrors: UseFormClearErrors<{
    password: string;
    confirmPassword: string;
  }>;
};

type StepViewProps = {
  step: StepRequestFormProps["step"];
  control: StepRequestFormProps["control"];
  message: string;
  status?: "error" | "completed";
  resetPasswordControl: Control<{ password: string; confirmPassword: string }>;
  watchPassword: UseFormWatch<{
    password: string;
    confirmPassword: string;
  }>;
  setPasswordError: UseFormSetError<{
    password: string;
    confirmPassword: string;
  }>;
  clearPasswordErrors: UseFormClearErrors<{
    password: string;
    confirmPassword: string;
  }>;
};

export const ResetPasswordStep = forwardRef(
  (
    {
      step,
      setIsStepFailed,
      token,
      setStepFailed,
      setIsCompleted,
    }: ResetPasswordStepProps,
    ref
  ) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [stepCompleted, setStepCompleted] = useState(false);
    const { control, handleSubmit } = useForm({
      defaultValues: {
        email: "",
      },
    });
    const {
      control: resetPasswordControl,
      handleSubmit: resetPasswordHandleSubmit,
      setError: setPasswordError,
      watch: watchPasswordFields,
      clearErrors: clearPasswordErrors,
    } = useForm({
      defaultValues: {
        password: "",
        confirmPassword: "",
      },
    });

    /**
     * Send a mail to the username specificated in the payload with the purpouse of starting
     * to reset the password
     */
    const [sendRequestNewPasswordEmailTrigger] =
      authApi.useSendResetPasswordEmailMutation();

    const requestPasswordUpdate = useCallback(
      async ({ email }: { email: string }) => {
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
          // Make the parent know that step is completed so if is the first step hide the next button
          setIsCompleted(true);
        } catch (error: any) {
          let errMessage = t("resetPassword:generic-err-response");

          if (error.status === 400) {
            errMessage = t("resetPassword:user-not-exists");
          }
          setError(errMessage);

          setStepFailed(true);
          setIsLoading(false);
          setStepCompleted(false);
        }
      },
      [sendRequestNewPasswordEmailTrigger, setIsCompleted, setStepFailed, t]
    );

    /**
     * Handle the password reset
     */
    const [resetPasswordTrigger] = authApi.useResetPasswordMutation();

    const resetPassword = useCallback(
      async ({
        password,
        confirmPassword,
      }: {
        password: string;
        confirmPassword: string;
      }) => {
        const payload = {
          token: token ?? "",
          new_password: password,
        };
        setIsLoading(true);
        setError(null);
        setStepCompleted(false);

        try {
          await resetPasswordTrigger(payload).unwrap();
          setIsLoading(false);
          setError(null);
          setStepCompleted(true);
          // Make the parent know that step is completed so if is the first step hide the next button
          setIsCompleted(true);
        } catch (error: any) {
          let errMessage = t("resetPassword:generic-err-response");

          if (error.status === 400) {
            errMessage = t("resetPassword:token-expired");
          }

          setError(errMessage);

          setStepFailed(true);
          setIsLoading(false);
          setStepCompleted(false);
        }
      },
      [resetPasswordTrigger, setIsCompleted, setStepFailed, t, token]
    );

    useImperativeHandle(ref, () => ({
      sendResetEmail: () => handleSubmit(requestPasswordUpdate)(),
      resetPassword: () => resetPasswordHandleSubmit(resetPassword)(),
    }));

    useEffect(() => {
      if (error) {
        setIsStepFailed(true);
      } else {
        setIsStepFailed(false);
      }
    }, [error, setIsStepFailed]);

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
            resetPasswordControl={resetPasswordControl}
            watchPassword={watchPasswordFields}
            clearPasswordErrors={clearPasswordErrors}
            setPasswordError={setPasswordError}
          />
        )}
      </Grid>
    );
  }
);

const StepView = ({
  status,
  control,
  step,
  message,
  resetPasswordControl,
  watchPassword,
  setPasswordError,
  clearPasswordErrors,
}: StepViewProps) => {
  switch (status) {
    default:
      return (
        <StepRequestForm
          control={control}
          step={step}
          resetPasswordControl={resetPasswordControl}
          watchPassword={watchPassword}
          setPasswordError={setPasswordError}
          clearPasswordErrors={clearPasswordErrors}
        />
      );

    case "error":
      return <ErrorComponent message={message} />;

    case "completed":
      return <Completed step={step} />;
  }
};

const StepRequestForm = ({
  step,
  control,
  resetPasswordControl,
  watchPassword,
  clearPasswordErrors,
  setPasswordError,
}: StepRequestFormProps) => {
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
        <Grid container item md={12} rowSpacing={step !== 0 ? 2 : 1}>
          {step === 0 ? (
            <EmailInputField control={control} />
          ) : (
            <>
              <PasswordFields
                watch={watchPassword}
                clearErrors={clearPasswordErrors}
                setError={setPasswordError}
                control={resetPasswordControl}
                inlineFields={false}
              />
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

const ErrorComponent = ({ message }: { message: string }) => {
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

const Completed = ({ step }: { step: number }) => {
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
          {step === 0
            ? t("resetPassword:email-sent")
            : t("resetPassword:password-changed")}
        </Typography>
      </Grid>
    </Grid>
  );
};
