import AuthForm from "../../organisms/AuthForm/AuthForm";
import AuthFormTemplate from "../../templates/AuthFormTemplate/AuthFormTemplate";

export default function SignUp() {
  return (
    <AuthFormTemplate>
      <AuthForm formType="signIn" />
    </AuthFormTemplate>
  );
}
