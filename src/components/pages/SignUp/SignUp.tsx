import { useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../../service/api/Auth";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import FeedBack from "../../atoms/FeedBack/FeedBack";
import AuthForm from "../../organisms/AuthForm/AuthForm";
import AuthFormTemplate from "../../templates/AuthFormTemplate/AuthFormTemplate";

type RegistrationData = {
  name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Registration api call
  const [signUpTrigger] = authApi.useSignUpMutation();
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string | undefined>();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const formBackgroundWidth = useMemo(() => matches ? 20 : undefined, [matches])

  const handleRegistration = async ({
    email,
    name,
    last_name,
    password,
  }: RegistrationData) => {
    const credentials = { email, name, last_name, password };
    setIsLoading(true);
    setShowFeedback(true);
    try {
      await signUpTrigger(credentials).unwrap();
      setIsSuccess(true);
      setIsLoading(false);
      setMessage(t("authPages:feedback-registration-success"));
    } catch (error) {
      setIsSuccess(false);
      setIsLoading(false);
      setMessage(t("authPages:feedback-registration-failed"));
    }
  };

  const onFeedBackClose = useCallback(
    () => navigate("/home/dashboard"),
    [navigate]
  );

  return (
    <AuthFormTemplate>
      {showFeedback ? (
        <FeedBack
          isLoading={isLoading}
          isOpen={showFeedback}
          isSuccess={isSuccess}
          message={message}
          onFeedbackClose={onFeedBackClose}
        />
      ) : (
        <BlurredBackground
          borderThickness={1}
          borderColor={"purple"}
          rgbaColor={"rgb(16, 0, 43, 0.9)"}
          widthPercentage={formBackgroundWidth}
        >
          <AuthForm formType="signUp" authHandler={handleRegistration} />
        </BlurredBackground>
      )}
    </AuthFormTemplate>
  );
}
