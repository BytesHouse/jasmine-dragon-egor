// import tea from "../../../public/assets/Images/tea.png";
// import living from "../../../public/assets/Images/living-room.png";
// import community from "../../../public/assets/Images/community.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SectionTwo = () => {
  const t = useTranslations("SectionAbout");
  return (
    <>
      {/* <div className="container"> */}
      {/* <div className="grid grid-cols-1 mt-16 w-full grid-column"> */}
      {/* <div className="grid grid-cols-1 w-full grid-column"> */}
      {/* <div className="flex items-center mt-100 flex-col flex-wrap h-[2015px]"> */}
      <div className="col-span-half flex flex-col gap-[250px] _768:col-span-full _768:gap-[25px]">
        <div className="about-card">
          <Image
            src="/assets/Images/tea.png"
            alt="tea"
            width={545}
            height={545}
          />
          <h4 className="_491:text-h5">{t("card1heading")}</h4>
          <p className="p1 _491:p2">{t("card1text")}</p>
        </div>
        <div className="about-card">
          <Image
            src="/assets/Images/living-room.png"
            alt="app"
            width={545}
            height={545}
          />
          <h4 className="_491:text-h5">{t("card3heading")}</h4>
          <p className="p1 _491:p2">{t("card3text")}</p>
        </div>
      </div>
      <div className="about-card col-span-half justify-self-end mt-[566px] _768:col-span-full _768:mt-0">
        <Image
          src="/assets/Images/community.png"
          alt="people"
          width={545}
          height={545}
        />
        <h4 className="_491:text-h5">{t("card2heading")}</h4>
        <p className="p1 _491:p2">{t("card2text")}</p>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default SectionTwo;
