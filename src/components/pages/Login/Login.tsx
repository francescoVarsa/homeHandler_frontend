import { useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../../service/api/Auth";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import FeedBack from "../../atoms/FeedBack/FeedBack";
import AuthForm from "../../organisms/AuthForm/AuthForm";
import AuthFormTemplate from "../../templates/AuthFormTemplate/AuthFormTemplate";

type LoginDataSchema = {
  username: string;
  password: string;
};

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Login api call
  const [loginTrigger, loginInfo] = authApi.useLoginMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string | undefined>();
  const [, setCookie] = useCookies(["auth-token"]);

  const handleLogin = async ({ username, password }: LoginDataSchema) => {
    const credentials = { username, password };
    setIsLoading(true);
    setShowDialog(true);
    try {
      const response = await loginTrigger(credentials).unwrap();
      // 24 hours of validity
      setCookie("auth-token", response.token, { maxAge: 86400 });
      setIsLoading(loginInfo.isLoading);
      setIsSuccess(true);
      setMessage(t("authPages:feedback-login-success"));
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
      setMessage(t("authPages:feedback-login-failed"));
    }
  };

  const onFeedBackClose = useCallback(
    () => navigate("/home/start"),
    [navigate]
  );

  return (
    <AuthFormTemplate>
      {showDialog ? (
        <FeedBack
          isLoading={isLoading}
          isOpen={showDialog}
          isSuccess={isSuccess}
          message={message}
          onFeedbackClose={onFeedBackClose}
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
