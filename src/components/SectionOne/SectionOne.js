import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedText from "../AnimatedText/AnimatedText";

const SectionOne = () => {
  const t = useTranslations();
  return (
    <section className="col-span-full container">
      <div
        className="col-span-full max-w-[var(--max-w)] sticky top-[25vh] z-10"
        // style={{ top: `calc(${top} * 50px)` }}
      >
        <AnimatedText>{t("SectionOneText")}</AnimatedText>
      </div>
      <div className="container col-span-full">
        <Image
          src="/assets/Images/cheainic.webp"
          alt="Image 1"
          width={462}
          height={462}
          className="mt-[200px] col-start-2 col-end-6 h-auto _1600:col-start-1 _1024:col-span-half"
        />
      </div>
      <div className="container col-span-full">
        <div className="_1024:col-span-half"></div>
        <Image
          src="/assets/Images/cheaitar.webp"
          alt="Image 2"
          width={450}
          height={300}
          className="mt-[300px] col-start-8 col-end-12 h-auto _1600:-col-end-1 place-self-end _1240:mt-[221px] _1024:col-span-half _1024:w-[295px] _768:mt-[100px]"
        />
      </div>
      {/* <div className="col-span-full container !p-0 relative"> */}
      {/* <p className="col-span-full text-[91px] font-Playfair-Display italic font-semibold text-blue _1240:text-h3 _768:text-h4">
          {t("SectionOneText")}
        </p> */}
      <div className="container col-span-full">
        <Image
          src="/assets/Images/2cuptea.png"
          alt="2cup"
          width={340}
          height={246}
          className="col-start-3 place-self-end col-end-6 mt-[300px] h-auto _1600:mt-[100px] _1600:col-end-7 _1240:col-[1_/_6] _1240:place-self-auto _1024:col-span-half"
        />
        <div className="_1024:col-span-half"></div>
      </div>
      <div className="container col-span-full ">
        <div className="_1024:col-span-half"></div>
        <Image
          src="/assets/Images/table.png"
          alt="table"
          width={219}
          height={219}
          className="col-start-8 col-end-10 place-self-center mb-[400px] mt-[300px] h-auto _1600:col-[9_/_12] _1240:static  _1240:top-0 _1024:col-span-half _1024:place-self-end"
        />
      </div>
      {/* </div> */}
    </section>
  );
};

export default SectionOne;
