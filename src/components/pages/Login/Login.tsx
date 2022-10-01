import { useState } from "react";
import { useTranslation } from "react-i18next";
import { authApi } from "../../../service/api/Auth";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import FeedBack from "../../FeedBack/FeedBack";
import AuthForm from "../../organisms/AuthForm/AuthForm";
import AuthFormTemplate from "../../templates/AuthFormTemplate/AuthFormTemplate";

type LoginDataSchema = {
  username: string;
  password: string;
};

export default function Login() {
  const { t } = useTranslation();

  // Login api call
  const [loginTrigger, loginInfo] = authApi.useLoginMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string | undefined>();

  const handleLogin = async ({ username, password }: LoginDataSchema) => {
    const credentials = { username, password };
    setIsLoading(true);
    setShowDialog(true);
    try {
      await loginTrigger(credentials).unwrap();
      setIsLoading(loginInfo.isLoading);
      setIsSuccess(true);
      setMessage(t("authPages:feedback-login-success"));
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsSuccess(false);
      setMessage(t("authPages:feedback-login-failed"));
    }
  };

  return (
    <AuthFormTemplate>
      {showDialog ? (
        <FeedBack
          isLoading={isLoading}
          isOpen={showDialog}
          isSuccess={isSuccess}
          message={message}
        />
      ) : (
        <BlurredBackground
          borderThickness={1}
          borderColor={"purple"}
          rgbaColor={"rgb(16, 0, 43, 0.9)"}
        >
          <AuthForm formType="login" authHandler={handleLogin} />
        </BlurredBackground>
      )}
    </AuthFormTemplate>
  );
}
