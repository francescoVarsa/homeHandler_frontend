import { useState } from "react";
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
  // Registration api call
  const [signUpTrigger] = authApi.useSignUpMutation();
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      const res = await signUpTrigger(credentials).unwrap();
      setIsSuccess(true);
      setIsLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
      setIsSuccess(false);
      setIsLoading(false);
    }
  };

  return (
    <AuthFormTemplate>
      {showFeedback ? (
        <FeedBack
          isLoading={isLoading}
          isOpen={showFeedback}
          isSuccess={isSuccess}
          message={
            isSuccess
              ? "Accesso avvenuto correttamente"
              : "Accesso fallito credenziali errate"
          }
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
