// import logo from "../../../public/assets/Images/Logo.svg";

import Image from "next/image";
import SocialButtons from "@/ui-kit/SocialButtons/SocialButtons";

const Footerblock1 = () => {
  return (
    <div className="flex flex-col gap-[25px] col-span-5 _1600:col-span-half _1240:!col-span-full">
      <div className="flex gap-[25px] items-center">
        <Image
          src="/assets/Images/Logo.svg"
          alt="logo"
          width={81}
          height={90}
        />
        <h4>Jasmine Dragon</h4>
      </div>
      <div className="flex flex-col gap-[15px]">
        <h5 className="simple font-bold">Оставайтесь на связи</h5>
        <p className="p1">
          Подпишитесь и получайте последние актуальные новости и акции от вашей
          любимой чайной Jasmine Dragon
        </p>
        <div className="flex gap-[15px] _768:flex-col">
          <input
            className="text-p1 border border-blue-light bg-green-bg p-[15px] w-full focus:outline-none placeholder:text-blue-light font-semibold"
            placeholder="Введите ваш e-mail"
            type="text"
            id="email"
            name="email"
          />
          <button className="text-p1 p-[15px_50px] text-blue-light font-semibold bg-blue border border-blue-light">
            Подписаться
          </button>
        </div>
      </div>
      <SocialButtons />
    </div>
  );
};

export default Footerblock1;
