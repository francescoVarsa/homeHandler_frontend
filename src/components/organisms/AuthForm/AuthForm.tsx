import { Grid } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { authApi } from "../../../service/api/Auth";
import BlurredBackground from "../../atoms/backgrouds/BlurredBackground/BlurredBackground";
import Button from "../../atoms/Button/Button";
import SignInForm from "../../molecules/SignInForm/SignInForm";
import SignUpForm from "../../molecules/SignUpForm/SignUpForm";

type AuthFormProps = {
  formType: "signIn" | "login";
};

export default function AuthForm({ formType }: AuthFormProps) {
  const { t } = useTranslation();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit: handleSubmitRegistration,
    control: controlRegistration,
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [trigger] = authApi.endpoints.login.useMutation();

  const onSubmit = async ({ email, password }: FieldValues) => {
    await trigger({
      username: email,
      password,
    }).unwrap();
  };

  const token = useSelector((state: any) => state.user);
  console.log(token);

  return (
    <BlurredBackground
      borderThickness={1}
      borderColor={"purple"}
      rgbaColor={"rgb(16, 0, 43, 0.9)"}
    >
      <Grid
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        container
        display={"flex"}
        justifyContent={"center"}
        spacing={0}
        rowGap={4}
      >
        {formType === "login" ? (
          <SignInForm control={control} />
        ) : (
          <SignUpForm control={controlRegistration} />
        )}
        <Grid item md={12}>
          <Button
            type={"submit"}
            variant={"outlined"}
            size={"large"}
            color={"purple"}
            text={
              formType === "signIn"
                ? t("authPages:form-button-label-signIn")
                : t("authPages:form-button-label-login")
            }
          />
        </Grid>
      </Grid>
    </BlurredBackground>
  );
}
