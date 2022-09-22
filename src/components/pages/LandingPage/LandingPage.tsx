import ControlPanelIllustration from "../../atoms/Illustrations/ControlPanelIllustration";
import LandingPageCallToAction from "../../molecules/LandingPageCallToAction/LandingPageCallToAction";
import IllustrationWithText from "../../templates/IllustrationWithText/IllustrationWithText";

export default function LandingPage() {
  return (
    <IllustrationWithText
      illustration={<ControlPanelIllustration />}
      textColumn={<LandingPageCallToAction />}
    />
  );
}
