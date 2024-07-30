import SectionTwo from "../SectionTwo/SectionTwo";
import { useTranslations } from "next-intl";

const SectionAbout = () => {
  const t = useTranslations("SectionAbout");
  return (
    <section className="aboutus1 container !gap-y-[100px] _768:!gap-y-[50px]">
      <h4 className="col-span-3 _1024:col-span-2 _768:col-span-full">
        {t("aboutHeading")}
      </h4>
      <h4 className="col-span-9 indent-[var(--column)] _1024:col-span-4 _1024:text-h5 _768:col-span-full _768:indent-0">
        {t("aboutText")}
      </h4>
      <SectionTwo />
    </section>
  );
};

export default SectionAbout;
