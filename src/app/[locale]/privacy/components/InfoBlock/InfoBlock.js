import { useTranslations } from "next-intl";

const InfoBlock = ({ title, text, page }) => {
  const t = useTranslations(page);
  return (
    <div className="mt-[25px] md:mt-[50px] border border-blue-light p-[50px] _768:p-[25px]">
      {/* <h4 className="text-[27px] font-[700]">{t(title)}</h4>
            <p className="mt-[25px] text-[18px] font-[600]">{t(text)}</p> */}
      <h5 className="simple font-bold _491:text-p1">{t(title)}</h5>
      <p className="p1 mt-[25px] _491:p2 _491:mt-[15px]">{t(text)}</p>
    </div>
  );
};

export default InfoBlock;
