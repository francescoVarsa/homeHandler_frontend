import {
  Box,
  Button,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import QuestionMark from "../../atoms/Illustrations/QuestionMark";
import { ResetPasswordStep } from "../../molecules/ResetPasswordStep/ResetPasswordStep";
import styles from "./ResetPasswordStepper.module.scss";

type ResetPasswordStepperProps = {
  currentStep?: number;
  token?: string;
};

type ActiveStepContentProps = {
  activeStep: number;
  steps: string[];
  handleNext: () => void;
  setIsStepFailed: (value: boolean) => void;
  token?: string;
};

export default function ResetPasswordStepper({
  currentStep,
  token,
}: ResetPasswordStepperProps) {
  const [activeStep, setActiveStep] = useState(currentStep ?? 0);
  const { t } = useTranslation();
  const [isStepFailed, setIsStepFailed] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const formBackgroundWidth = useMemo(() => matches ? 25 : 45, [matches])

  const steps = useMemo(
    () => [
      t("resetPassword:step-label-1"),
      t("resetPassword:step-label-2"),
      t("resetPassword:step-label-3"),
    ],
    [t]
  );

  const goToNextStep = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);

  return (
    <>
      <QuestionMark />
      <BlurredBackground widthPercentage={formBackgroundWidth}>
        <Stepper
          activeStep={activeStep}
          connector={
            <StepConnector classes={{ line: styles.connector__line }} />
          }
        >
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  // Assign error only on the active step
                  error={activeStep === index && isStepFailed}
                  StepIconProps={{
                    classes: {
                      root: styles.step__icon,
                      active: styles["step__icon--active"],
                      completed: styles["step__icon--completed"],
                      error: styles["step__icon--error"],
                    },
                  }}
                  classes={{
                    label: styles.connector__label,
                    active: styles["connector__label--active"],
                    completed: styles["connector__label--completed"],
                    error: styles["step__icon--error"],
                  }}
                  {...labelProps}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
            </Box>
          </>
        ) : (
          <ActiveStepContent
            steps={steps}
            handleNext={goToNextStep}
            activeStep={activeStep}
            setIsStepFailed={setIsStepFailed}
            token={token}
          />
        )}
      </BlurredBackground>
    </>
  );
}

const ActiveStepContent = ({
  activeStep,
  handleNext,
  steps,
  setIsStepFailed,
  token,
}: ActiveStepContentProps) => {
  const { t } = useTranslation();
  const stepRef = useRef<any>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();
  const [stepFailed, setStepFailed] = useState(false);
  const [blockStep, setBlockStep] = useState(false);

  useEffect(() => {
    if ((activeStep === 0 && isCompleted) || (activeStep === 0 && stepFailed)) {
      setBlockStep(true);
    } else {
      setBlockStep(false);
    }
  }, [activeStep, isCompleted, stepFailed]);

  const handleStepExecution = useCallback(() => {
    if (stepRef?.current) {
      const step = stepRef.current;

      // Handle first step ops
      if (activeStep === 0) {
        step.sendResetEmail();
      }

      // Handle second step ops
      if (activeStep === 1) {
        step.resetPassword();
        handleNext();
      }

      // Handle third step ops
      if (activeStep === 2) {
        navigate("/login");
      }
    }
  }, [activeStep, handleNext, navigate]);

  return (
    <>
      <ResetPasswordStep
        setIsStepFailed={setIsStepFailed}
        step={activeStep as 0 | 1}
        ref={stepRef}
        token={token}
        setStepFailed={setStepFailed}
        setIsCompleted={setIsCompleted}
      />
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          variant="outlined"
          size="large"
          color="error"
          sx={{ marginRight: "10px" }}
          onClick={() => navigate("/login")}
        >
          {t("resetPassword:back-to")}
        </Button>
        {!blockStep && (
          <Button
            variant="outlined"
            size="large"
            color="purple"
            onClick={handleStepExecution}
          >
            {activeStep === steps.length - 1
              ? t("resetPassword:step-button-label-finish")
              : t("resetPassword:step-button-label-next")}
          </Button>
        )}
      </Box>
    </>
  );
};
