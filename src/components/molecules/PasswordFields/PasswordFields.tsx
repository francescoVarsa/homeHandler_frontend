import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  Control,
  Controller,
  UseFormClearErrors,
  UseFormSetError,
  UseFormWatch,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
// Using text input components styles
import styles from "./PasswordFields.module.scss";

type PasswordFieldsProps = {
  control: Control<{ password: string; confirmPassword: string }>;
  watch: UseFormWatch<{
    password: string;
    confirmPassword: string;
  }>;
  setError: UseFormSetError<{ password: string; confirmPassword: string }>;
  clearErrors: UseFormClearErrors<{
    password: string;
    confirmPassword: string;
  }>;
  inlineFields?: boolean;
};

export default function PasswordFields({
  control,
  watch,
  setError,
  clearErrors,
  inlineFields = true,
}: PasswordFieldsProps) {
  const [secureTxt, setSecureTxt] = useState(true);
  const { t } = useTranslation();

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

  return (
    <>
      <Grid item md={inlineFields ? 6 : 12} sm={12}>
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
              <FormControl color="purple" fullWidth>
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
      <Grid item md={inlineFields ? 6 : 12} sm={12}>
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
              <FormControl color="purple" fullWidth>
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
    </>
  );
}
