import PrivacyBlock from "../privacy/components/PrivacyBlock/PrivacyBlock";
import { FAQ_text } from "@/config/constants";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: any) {
  const t = await getTranslations("Breadcrumbs");
  return {
    title: t("faq"),
  };
}

const FAQ = () => {
  return (
    <main>
      <div className="container">
        <PrivacyBlock
          page="FAQ"
          data={FAQ_text}
          h4="faq_text_0"
          p="faq_text_1"
        />
      </div>
    </main>
  );
};

export default FAQ;
