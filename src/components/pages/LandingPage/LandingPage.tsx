import ControlPanelIllustration from "../../atoms/Illustrations/ControlPanelIllustration";
import LandingPageCallToAction from "../../molecules/LandingPageCallToAction/LandingPageCallToAction";
import IllustrationWithText from "../../templates/IllustrationWithText/IllustrationWithText";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

export default function LandingPage() {
  return (
    <MainTemplate hasHeaderLogo={false} hasMenu={false}>
      <IllustrationWithText
        illustration={<ControlPanelIllustration />}
        textColumn={<LandingPageCallToAction />}
      />
    </MainTemplate>
  );
}
