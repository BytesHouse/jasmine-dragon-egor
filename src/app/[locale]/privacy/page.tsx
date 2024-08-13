import PrivacyBlock from "./components/PrivacyBlock/PrivacyBlock";
import { privacyText } from "@/config/constants";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: any) {
  const t = await getTranslations("Breadcrumbs");
  return {
    title: t("privacy"),
  };
}

const Privacy = () => {
  return (
    <main>
      <div className="container">
        <PrivacyBlock
          page="Privacy"
          data={privacyText}
          h4="privacy_text_0"
          p="privacy_text_1"
        />
      </div>
    </main>
  );
};

export default Privacy;
