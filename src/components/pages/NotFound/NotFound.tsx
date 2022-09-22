import { useTranslation } from "react-i18next";
import NotFoundIllustration from "../../atoms/Illustrations/NotFoundIllustration";
import Title from "../../atoms/Title/Title";
import IllustrationWithText from "../../templates/IllustrationWithText";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <IllustrationWithText
      illustration={<NotFoundIllustration />}
      textColumn={<Title tag={"h2"} text={t("notFoundPage:title")} />}
    />
  );
}
