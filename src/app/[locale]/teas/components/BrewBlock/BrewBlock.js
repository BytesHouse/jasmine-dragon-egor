import { useTranslations } from "next-intl";
import Image from "next/image";

const image1 = "/assets/icons/Frame.svg";
const image2 = "/assets/icons/Frame-1.svg";
const image3 = "/assets/icons/Frame-2.svg";
const image4 = "/assets/icons/Frame-3.svg";

const BrewBlock = ({ product }) => {
  let { seconds, gramm, temperature, strait } = product;
  seconds = seconds ? seconds : "120-240";
  gramm = gramm ? gramm : "5-6";
  temperature = temperature ? temperature : "95-100";
  strait = strait ? strait : "3-4";

  const t = useTranslations("BrewBlock");
  return (
    <section className="col-span-full flex flex-col gap-[25px]">
      <h2 className="simple _768:text-h3">{t("heading")}</h2>
      <div className="grid grid-cols-4 brew gap-[25px] _1024:grid-cols-2 _768:grid-cols-1">
        <div className="flex flex-col items-start gap-[15px]">
          <Image width={60} height={60} src={image1} alt="time" />
          <h5 className="simple font-bold">{t("heading1")}</h5>
          <p className="p1">{t("desc1", { seconds })}</p>
        </div>
        <div className="flex flex-col items-start gap-[15px]">
          <Image width={60} height={60} src={image2} alt="balance" />
          <h5 className="simple font-bold">{t("heading2")}</h5>
          <p className="p1">{t("desc2", { gramm })}</p>
        </div>
        <div className="flex flex-col items-start gap-[15px]">
          <Image width={60} height={60} src={image3} alt="temp" />
          <h5 className="simple font-bold">{t("heading3")}</h5>
          <p className="p1">{t("desc3", { temperature })}</p>
        </div>
        <div className="flex flex-col items-start gap-[15px]">
          <Image width={60} height={60} src={image4} alt="reverse" />
          <h5 className="simple font-bold">{t("heading4")}</h5>
          <p className="p1">{t("desc4", { strait })}</p>
        </div>
      </div>
    </section>
  );
};

export default BrewBlock;
