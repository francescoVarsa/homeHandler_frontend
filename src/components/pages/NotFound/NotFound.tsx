import NotFoundIllustration from "../../atoms/Illustrations/NotFoundIllustration";
import IllustrationWithText from "../../templates/IllustrationWithText";

export default function NotFound() {
  return (
    <IllustrationWithText
      illustration={<NotFoundIllustration />}
      textColumn={<p>Hello world</p>}
    />
  );
}
