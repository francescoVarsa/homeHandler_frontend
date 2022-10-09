import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import EmailInputField from "../EmailInputField/EmailInputField";
import Title from "../../atoms/Title/Title";
import styles from "../../organisms/AuthForm/AuthForm.module.scss";
import TextInput from "../../atoms/TextInput/TextInput";

type SignUpSchema = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type SubmitHandler = (value: {
  email: string;
  name: string;
  last_name: string;
  password: string;
}) => void;

export const SignUpForm = forwardRef((_, ref) => {
  const { t } = useTranslation();
  const [secureTxt, setSecureTxt] = useState(true);
  const { control, handleSubmit, clearErrors, watch, setError } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const formRef = useRef(null);

  useEffect(() => {
    const subscribe = watch((name) => {
      if (name.password !== name.confirmPassword) {
        setError("password", {
          type: "custom",
          message: t("inputValidation:password-does-not-match"),
        });
        setError("confirmPassword", {
          type: "custom",
          message: t("inputValidation:password-does-not-match"),
        });
      } else {
        clearErrors(["password", "confirmPassword"]);
      }
    });

    return () => subscribe.unsubscribe();
  }, [clearErrors, setError, watch, t]);

  const passCredentialToHandler = useCallback(
    (
      { name, lastName, email, password }: SignUpSchema,
      submitHandler: SubmitHandler
    ) => {
      const registrationCredentials = {
        email,
        name,
        last_name: lastName,
        password,
      };
      submitHandler(registrationCredentials);
    },
    []
  );

  useImperativeHandle(ref, () => ({
    onSubmit: (registrationFunction: SubmitHandler) => {
      const onSubmitHandler = (formData: SignUpSchema) =>
        passCredentialToHandler(formData, registrationFunction);
      handleSubmit(onSubmitHandler)();
    },
  }));

  return (
    <>
      <Grid ref={formRef} item md={12} sx={{ padding: "0px!important" }}>
        <Title tag={"h5"} text={t("authPages:form-title-signUp")} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12}>
          <Controller
            name="name"
            rules={{
              required: {
                value: true,
                message: t("inputValidation:required"),
              },
              minLength: {
                value: 3,
                message: t("inputValidation:min-3-character"),
              },
            }}
            control={control}
            render={({ field, fieldState }) => {
              return (
                <TextInput field={field} fieldState={fieldState} id={"name"} />
              );
            }}
          />
        </Grid>
        <Grid item md={6} sm={12}>
          <Controller
            name="lastName"
            rules={{
              required: {
                value: true,
                message: t("inputValidation:required"),
              },
              minLength: {
                value: 3,
                message: t("inputValidation:min-3-character"),
              },
            }}
            control={control}
            render={({ field, fieldState }) => {
              return (
                <TextInput
                  field={field}
                  fieldState={fieldState}
                  id={"last-name"}
                />
              );
            }}
          />
        </Grid>
        <Grid item md={12} sm={12}>
          <EmailInputField control={control} />
        </Grid>
        <Grid item md={6} sm={12}>
          <Controller
            name="password"
            rules={{
              required: {
                value: true,
                message: t("inputValidation:required"),
              },
              minLength: {
                value: 8,
                message: t("inputValidation:password-wrong-pattern"),
              },
            }}
            control={control}
            render={({ field, fieldState }) => {
              return (
                <FormControl color="purple">
                  <InputLabel
                    size="small"
                    htmlFor="outlined-basic-pwd"
                    className={styles["form-input-wrapper__label"]}
                  >
                    {t("inputValidation:label-pwd")}
                  </InputLabel>
                  <OutlinedInput
                    {...field}
                    id="outlined-basic-pwd"
                    label={t("inputValidation:label-pwd")}
                    size="small"
                    fullWidth
                    error={fieldState.error != null}
                    placeholder={t("inputValidation:label-pwd")}
                    type={secureTxt ? "password" : "text"}
                    className={styles["pwd"]}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                          color="purple"
                          onClick={() => setSecureTxt(!secureTxt)}
                        >
                          {secureTxt ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {fieldState.error && (
                    <FormHelperText
                      error={fieldState.error != null}
                      id="outlined-basic-pwd"
                    >
                      {fieldState.error.message}
                    </FormHelperText>
                  )}
                </FormControl>
              );
            }}
          />
        </Grid>
        <Grid item md={6} sm={12}>
          <Controller
            name="confirmPassword"
            rules={{
              required: {
                value: true,
                message: t("inputValidation:required"),
              },
              minLength: {
                value: 8,
                message: t("inputValidation:password-wrong-pattern"),
              },
            }}
            control={control}
            render={({ field, fieldState }) => {
              return (
                <FormControl color="purple">
                  <InputLabel
                    size="small"
                    htmlFor="outlined-basic-pwd-confirm"
                    className={styles["form-input-wrapper__label"]}
                  >
                    {t("inputValidation:label-pwd-confirm")}
                  </InputLabel>
                  <OutlinedInput
                    {...field}
                    id="outlined-basic-pwd-confirm"
                    label={t("inputValidation:label-pwd-confirm")}
                    size="small"
                    fullWidth
                    error={fieldState.error != null}
                    placeholder={t("inputValidation:label-pwd-confirm")}
                    type={secureTxt ? "password" : "text"}
                    className={styles["pwd"]}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                          color="purple"
                          onClick={() => setSecureTxt(!secureTxt)}
                        >
                          {secureTxt ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {fieldState.error && (
                    <FormHelperText
                      error={fieldState.error != null}
                      id="outlined-basic-pwd"
                    >
                      {fieldState.error.message}
                    </FormHelperText>
                  )}
                </FormControl>
              );
            }}
          />
        </Grid>
      </Grid>
    </>
  );
});
