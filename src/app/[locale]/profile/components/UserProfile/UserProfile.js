// import pen from "..//../../../assets/Images/Pen.svg"
// import greentea from "..//..//..//..//assets/Images/greentea.png"
const pen = "/assets/Images/Pen.svg";
const greentea = "/assets/Images/greentea.png";
import Edit from "@/ui-kit/icons/Edit/Edit";
import ProfileDeco from "@/ui-kit/icons/ProfileDeco/ProfileDeco";
import Image from "next/image";
import { useTranslations } from "next-intl";

const UserProfile = () => {
  const t = useTranslations("UserProfile");
  return (
    <>
      <div className="flex flex-col col-span-half gap-[25px] font-Nunito-Sans text-[var(--blue-light)] _1024:col-span-full">
        <h4 className="simple font-bold">{t("heading")}</h4>
        <div className="flex flex-col gap-[15px]">
          <label className="text-h5 font-semibold text-blue-light _491:text-p1">
            {t("address")}
          </label>
          <div className="max-w-[695px] flex gap-[15px] items-center p-[15px] border border-blue-light _491:p-[10px]">
            <div>
              <ProfileDeco />
            </div>
            <input
              className=" w-full bg-[var(--green-bg)] focus:outline-none"
              type="text"
            ></input>
            <div>
              <Edit />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <label className="text-h5 font-semibold text-blue-light _491:text-p1">
            {t("fullName")}
          </label>
          <div className="max-w-[695px] flex gap-[15px] items-center p-[15px] border border-blue-light _491:p-[10px]">
            <div>
              <ProfileDeco />
            </div>
            <input
              className=" w-full bg-[var(--green-bg)] focus:outline-none"
              type="text"
            ></input>
            <div>
              <Edit />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <label className="text-h5 font-semibold text-blue-light _491:text-p1">
            {t("phone")}
          </label>
          <div className="max-w-[695px] flex gap-[15px] items-center p-[15px] border border-blue-light _491:p-[10px]">
            <div>
              <ProfileDeco />
            </div>
            <input
              className=" w-full bg-[var(--green-bg)] focus:outline-none"
              type="tel"
            ></input>
            <div>
              <Edit />
            </div>
          </div>
        </div>
      </div>
      <Image
        className="col-span-half justify-self-end _1024:hidden"
        src={greentea}
        alt="tea"
        height={563}
        width={695}
      />
    </>
  );
};

export default UserProfile;
