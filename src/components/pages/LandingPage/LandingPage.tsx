import ControlPanelIllustration from "../../atoms/Illustrations/ControlPanelIllustration";
import LandingPageCallToAction from "../../molecules/LandingPageCallToAction";
import IllustrationWithText from "../../templates/IllustrationWithText";

export default function LandingPage() {
  return (
    <IllustrationWithText
      illustration={<ControlPanelIllustration />}
      textColumn={<LandingPageCallToAction />}
    />
  );
}
