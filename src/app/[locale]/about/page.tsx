import { privacyText } from "@/config/constants";
import { getTranslations } from "next-intl/server";
import InfoBlock from "../privacy/components/InfoBlock/InfoBlock";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: any) {
  const t = await getTranslations("Breadcrumbs");
  return {
    title: t("about"),
  };
}

const About = ({ page }: any) => {
  const t = useTranslations("About");
  return (
    <main>
      <div className="container">
        <div className="col-span-12">
          <div className="border border-blue-light text-blue-light p-[100px] _1600:p-[50px] _768:border-hidden _768:p-0">
            <InfoBlock
              title={"about_text_00"}
              text={"about_text_01"}
              page={"About"}
            />
            <InfoBlock
              title={"about_text_02"}
              text={"about_text_03"}
              page={"About"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
