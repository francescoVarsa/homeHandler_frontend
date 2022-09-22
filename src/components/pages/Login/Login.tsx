import AuthForm from "../../organisms/AuthForm/AuthForm";
import AuthFormTemplate from "../../templates/AuthFormTemplate/AuthFormTemplate";

export default function Login() {
  return (
    <AuthFormTemplate>
      <AuthForm formType="login" />
    </AuthFormTemplate>
  );
}
