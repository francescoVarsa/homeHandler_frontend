import { Grid } from "@mui/material";
import { FormEvent, useRef } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../atoms/Button/Button";
import { SignUpForm } from "../../molecules/SignUpForm/SignUpForm";

type AuthFormProps = {
  formType: "signUp" | "login";
};

export default function AuthForm({ formType }: AuthFormProps) {
  const { t } = useTranslation();
  // const { handleSubmit, control } = useForm({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  // const {
  //   handleSubmit: handleSubmitRegistration,
  //   control: controlRegistration,
  // } = useForm({
  //   defaultValues: {
  //     name: "",
  //     lastName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  // });

  // const [trigger] = authApi.endpoints.login.useMutation();

  // const onSubmit = async ({ email, password }: FieldValues) => {
  //   await trigger({
  //     username: email,
  //     password,
  //   }).unwrap();
  // };

  // const token = useSelector((state: any) => state.user);
  // console.log(token);

  const formRef = useRef<any>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    formRef.current.onSubmit();
  };

  return (
    <Grid
      component={"form"}
      onSubmit={handleSubmit}
      container
      display={"flex"}
      justifyContent={"center"}
      spacing={0}
      rowGap={4}
    >
      <SignUpForm ref={formRef} />
      <Grid item md={12}>
        <Button
          type={"submit"}
          variant={"outlined"}
          size={"large"}
          color={"purple"}
          text={
            formType === "signUp"
              ? t("authPages:form-button-label-signIn")
              : t("authPages:form-button-label-login")
          }
        />
      </Grid>
    </Grid>
  );
}
