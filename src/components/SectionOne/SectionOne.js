import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedText from "../AnimatedText/AnimatedText";

const SectionOne = () => {
  const t = useTranslations();
  return (
    <section className="container col-span-full !py-0">
      <div
        className="sticky top-[25vh] z-10 col-span-full max-w-[var(--max-w)]"
      // style={{ top: `calc(${top} * 50px)` }}
      >
        <AnimatedText>{t("SectionOneText")}</AnimatedText>
      </div>
      <div className="container col-span-full !py-0">
        <Image
          src="/assets/Images/cheainic.webp"
          alt="Image 1"
          width={462}
          height={462}
          className="_1024:col-span-half col-start-2 col-end-6 mt-[30vh] h-auto _1600:col-start-1"
        />
      </div>
      <div className="container col-span-full !py-0">
        <div className="_1024:col-span-half"></div>
        <Image
          src="/assets/Images/cheaitar.webp"
          alt="Image 2"
          width={450}
          height={300}
          className="_1024:col-span-half col-start-8 col-end-12 mt-[30vh] h-auto place-self-end _1600:-col-end-1 _1024:w-[295px]"
        />
      </div>
      {/* <div className="col-span-full container !p-0 relative"> */}
      {/* <p className="col-span-full text-[91px] font-Playfair-Display italic font-semibold text-blue _1240:text-h3 _768:text-h4">
          {t("SectionOneText")}
        </p> */}
      <div className="container col-span-full !py-0">
        <Image
          src="/assets/Images/2cuptea.png"
          alt="2cup"
          width={340}
          height={246}
          className="_1024:col-span-half col-start-3 col-end-6 mt-[30vh] h-auto place-self-end _1240:col-[1_/_6] _1240:place-self-auto _1600:col-end-7"
        />
        <div className="_1024:col-span-half"></div>
      </div>
      <div className="container col-span-full !py-0">
        <div className="_1024:col-span-half"></div>
        <Image
          src="/assets/Images/table.png"
          alt="table"
          width={219}
          height={219}
          className="_1024:col-span-half col-start-8 col-end-10 mb-[30vh] mt-[30vh] h-auto place-self-center _1240:static _1600:col-[9_/_12] _1024:place-self-end"
        />
      </div>
      {/* </div> */}
    </section>
  );
};

export default SectionOne;
