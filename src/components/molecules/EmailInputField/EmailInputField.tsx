import { Control, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import TextInput from "../../atoms/TextInput/TextInput";

type EmailInputFieldProps = {
  control: Control<{ email: string } & any>;
};

export default function EmailInputField({ control }: EmailInputFieldProps) {
  const { t } = useTranslation();
  return (
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
        return <TextInput id="email" field={field} fieldState={fieldState} />;
      }}
    />
  );
}
