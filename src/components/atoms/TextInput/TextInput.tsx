import TextField from "@mui/material/TextField";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styles from "./TextInput.module.scss";

type TextInputProps = {
  fieldState: ControllerFieldState;
  field: ControllerRenderProps<any, any>;
  id: string;
};

export default function TextInput({ fieldState, field, id }: TextInputProps) {
  const { t } = useTranslation();
  return (
    <TextField
      id={`outlined-basic-${id}`}
      label={t(`inputValidation:label-${id}`)}
      variant="outlined"
      size="small"
      fullWidth
      color="purple"
      placeholder={t(`inputValidation:label-${id}`)}
      helperText={fieldState.error != null ? fieldState.error.message : ""}
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
}
