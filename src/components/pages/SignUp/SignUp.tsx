import { useState } from "react";
import { useTranslation } from "react-i18next";
import { authApi } from "../../../service/api/Auth";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import FeedBack from "../../FeedBack/FeedBack";
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

  // Registration api call
  const [signUpTrigger] = authApi.useSignUpMutation();
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string | undefined>();

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

  return (
    <AuthFormTemplate>
      {showFeedback ? (
        <FeedBack
          isLoading={isLoading}
          isOpen={showFeedback}
          isSuccess={isSuccess}
          message={message}
        />
      ) : (
        <BlurredBackground
          borderThickness={1}
          borderColor={"purple"}
          rgbaColor={"rgb(16, 0, 43, 0.9)"}
        >
          <AuthForm formType="signUp" authHandler={handleRegistration} />
        </BlurredBackground>
      )}
    </AuthFormTemplate>
  );
}
