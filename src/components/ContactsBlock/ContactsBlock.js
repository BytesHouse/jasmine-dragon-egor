import { useTranslations } from "next-intl";
import Image from "next/image";
// import tea from "../../../public/assets/Images/teabig.webp";

const ContactsBlock = ({ className = "" }) => {
  const t = useTranslations("Contacts");
  return (
    <div className={`${className ? className : "container"}`}>
      {className ? (
        ""
      ) : (
        <>
          <h4 className="col-span-full">{t("heading")}</h4>
          <Image
            src="/assets/Images/teabig.webp"
            alt="tea"
            width={560}
            height={654}
            className="col-span-5 w-full _1600:col-span-half _1240:object-cover _1240:h-full _1024:col-span-full _1024:h-[396px] _768:h-[193px]"
          />
        </>
      )}

      <div className="flex flex-col gap-[25px] col-span-7 _1600:col-span-half _1024:col-span-full">
        <div className="flex flex-col gap-[16px] p-[25px] border border-blue flex-grow">
          <h3 className="_768:text-h5">{t("address")}</h3>
          <h5 className="simple font-bold _768:text-p1">
            Bd. Moscovei 12/2, Chisinau, Moldova
          </h5>
        </div>
        <div className="flex flex-col gap-[16px] p-[25px] border border-blue flex-grow">
          <h3 className="_768:text-h5">{t("email")}</h3>
          <a
            href="mailto:hello@jasminedragontea.com"
            className="text-h5 font-bold text-blue-light font-Nunito-Sans leading-[120%] hover:underline _768:text-p1"
          >
            hello@jasminedragontea.com
          </a>
          <a
            href="mailto:ceo@jasminedragontea.com"
            className="text-h5 font-bold text-blue-light font-Nunito-Sans leading-[120%] hover:underline _768:text-p1"
          >
            ceo@jasminedragontea.com
          </a>
        </div>
        <div className="flex flex-col gap-[16px] p-[25px] border border-blue flex-grow">
          <h3 className="_768:text-h5">{t("phoneNumbers")}</h3>
          <a
            href="tel:022444444"
            className="text-h5 font-bold text-blue-light font-Nunito-Sans leading-[120%] hover:underline _768:text-p1"
          >
            022-44-44-44
          </a>
          <a
            href="tel:069555555"
            className="text-h5 font-bold text-blue-light font-Nunito-Sans leading-[120%] hover:underline _768:text-p1"
          >
            069-555-555
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
