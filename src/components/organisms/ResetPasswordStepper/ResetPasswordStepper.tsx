import {
  Box,
  Button,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import QuestionMark from "../../atoms/Illustrations/QuestionMark";
import ResetPasswordStep from "../../molecules/ResetPasswordStep/ResetPasswordStep";
import styles from "./ResetPasswordStepper.module.scss";

type ResetPasswordStepperProps = {
  currentStep?: number;
};

type ActiveStepContentProps = {
  activeStep: number;
  steps: string[];
  handleNext: () => void;
};

export default function ResetPasswordStepper({
  currentStep,
}: ResetPasswordStepperProps) {
  const [activeStep, setActiveStep] = useState(currentStep ?? 0);
  const { t } = useTranslation();

  const steps = useMemo(
    () => [
      t("resetPassword:step-label-1"),
      t("resetPassword:step-label-2"),
      t("resetPassword:step-label-3"),
    ],
    [t]
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <>
      <QuestionMark />
      <BlurredBackground widthPercentage={45}>
        <Stepper
          activeStep={activeStep}
          connector={
            <StepConnector classes={{ line: styles.connector__line }} />
          }
        >
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  StepIconProps={{
                    classes: {
                      root: styles.step__icon,
                      active: styles["step__icon--active"],
                      completed: styles["step__icon--completed"],
                    },
                  }}
                  classes={{
                    label: styles.connector__label,
                    active: styles["connector__label--active"],
                    completed: styles["connector__label--completed"],
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
            handleNext={handleNext}
            activeStep={activeStep}
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
}: ActiveStepContentProps) => {
  const { t } = useTranslation();
  return (
    <>
      <ResetPasswordStep step={activeStep as 0 | 1} />
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          variant="outlined"
          size="large"
          color="purple"
          onClick={handleNext}
        >
          {activeStep === steps.length - 1
            ? t("resetPassword:step-button-label-finish")
            : t("resetPassword:step-button-label-next")}
        </Button>
      </Box>
    </>
  );
};
