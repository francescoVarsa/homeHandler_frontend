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
import Title from "../../atoms/Title/Title";
import styles from "../../organisms/AuthForm/AuthForm.module.scss";

type SignUpSchema = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm = forwardRef((_, ref) => {
  const { t } = useTranslation();
  const [secureTxt, setSecureTxt] = useState(true);
  const { control, handleSubmit, getValues, watch, setError } = useForm({
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
      console.log(name);
      if (name.password !== name.confirmPassword) {
        setError("password", {
          type: "custom",
          message: "Le password non coincidono",
        });
      }
    });

    return subscribe.unsubscribe();
  }, [setError, watch]);

  const submitHandler = useCallback(
    ({ name, lastName, email, password, confirmPassword }: SignUpSchema) => {
      console.log(name);
    },
    []
  );

  useImperativeHandle(ref, () => ({
    onSubmit: handleSubmit(submitHandler),
  }));

  return (
    <>
      <Grid ref={formRef} item md={12} sx={{ padding: "0px!important" }}>
        <Title tag={"h5"} text={t("authPages:form-title-login")} />
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
            }}
            control={control}
            render={({ field, fieldState }) => {
              return (
                <TextField
                  id="outlined-basic-email"
                  label="Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  color="purple"
                  placeholder="Name"
                  helperText={
                    fieldState.error != null ? fieldState.error.message : ""
                  }
                  error={fieldState.error != null}
                  className={styles["form-input-wrapper"]}
                  InputLabelProps={{
                    className: styles["form-input-wrapper__label"],
                  }}
                  InputProps={{
                    className: styles["form-input-wrapper__input"],
                  }}
                  {...field}
                />
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
            }}
            control={control}
            render={({ field, fieldState }) => {
              return (
                <TextField
                  id="outlined-basic-email"
                  label="Last Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  color="purple"
                  placeholder="Last Name"
                  helperText={
                    fieldState.error != null ? fieldState.error.message : ""
                  }
                  error={fieldState.error != null}
                  className={styles["form-input-wrapper"]}
                  InputLabelProps={{
                    className: styles["form-input-wrapper__label"],
                  }}
                  InputProps={{
                    className: styles["form-input-wrapper__input"],
                  }}
                  {...field}
                />
              );
            }}
          />
        </Grid>
        <Grid item md={12} sm={12}>
          <Controller
            name="email"
            rules={{
              required: {
                value: true,
                message: t("inputValidation:required"),
              },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: t("inputValidation:email-wrong-pattern"),
              },
            }}
            control={control}
            render={({ field, fieldState }) => {
              return (
                <TextField
                  id="outlined-basic-email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  color="purple"
                  placeholder="Email"
                  helperText={
                    fieldState.error != null ? fieldState.error.message : ""
                  }
                  error={fieldState.error != null}
                  className={styles["form-input-wrapper"]}
                  InputLabelProps={{
                    className: styles["form-input-wrapper__label"],
                  }}
                  InputProps={{
                    className: styles["form-input-wrapper__input"],
                  }}
                  {...field}
                />
              );
            }}
          />
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
                    Password
                  </InputLabel>
                  <OutlinedInput
                    {...field}
                    id="outlined-basic-pwd"
                    label="Password"
                    size="small"
                    fullWidth
                    error={fieldState.error != null}
                    placeholder="Password"
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
                    htmlFor="outlined-basic-pwd"
                    className={styles["form-input-wrapper__label"]}
                  >
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    {...field}
                    id="outlined-basic-pwd"
                    label="Confirm Password"
                    size="small"
                    fullWidth
                    error={fieldState.error != null}
                    placeholder="Confirm Password"
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
