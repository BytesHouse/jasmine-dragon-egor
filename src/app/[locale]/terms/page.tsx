import PrivacyBlock from "../privacy/components/PrivacyBlock/PrivacyBlock";
import { termsText } from "@/config/constants";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: any) {
  const t = await getTranslations("Breadcrumbs");
  return {
    title: t("terms"),
  };
}

const Terms = () => {
  return (
    <main>
      <div className="container">
        <PrivacyBlock
          page="Terms"
          data={termsText}
          h4="terms_text_0"
          p="terms_text_1"
        />
      </div>
    </main>
  );
};

export default Terms;
