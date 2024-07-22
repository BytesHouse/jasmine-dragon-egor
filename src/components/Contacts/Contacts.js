import Image from "next/image";
// import tea from "../../../public/assets/Images/teabig.png";

const Contacts = () => {
  return (
    <div className="container">
      <h5 className="col-span-full">Контакты</h5>

      <Image
        src="/assets/Images/teabig.png"
        alt="tea"
        width={560}
        height={654}
        className="col-span-5 w-full _1600:col-span-half _1240:object-cover _1240:h-full _1024:col-span-full _1024:h-[396px]"
      />
      <div className="flex flex-col gap-[25px] col-span-7 _1600:col-span-half _1024:col-span-full">
        <div className="flex flex-col gap-[16px] p-[25px] border border-blue flex-grow">
          <h3>Адрес</h3>
          <h5 className="simple font-bold">
            Bd. Moscovei 12/2, Chisinau, Moldova
          </h5>
        </div>
        <div className="flex flex-col gap-[16px] p-[25px] border border-blue flex-grow">
          <h3>E-mail</h3>
          <a
            href="mailto:hello@jasminedragontea.com"
            className="text-h5 font-bold text-blue-light font-Nunito-Sans leading-[120%] hover:underline"
          >
            hello@jasminedragontea.com
          </a>
          <a
            href="mailto:ceo@jasminedragontea.com"
            className="text-h5 font-bold text-blue-light font-Nunito-Sans leading-[120%] hover:underline"
          >
            ceo@jasminedragontea.com
          </a>
        </div>
        <div className="flex flex-col gap-[16px] p-[25px] border border-blue flex-grow">
          <h3>Номера телефона</h3>
          <a
            href="tel:022444444"
            className="text-h5 font-bold text-blue-light font-Nunito-Sans leading-[120%] hover:underline"
          >
            022-44-44-44
          </a>
          <a
            href="tel:069555555"
            className="text-h5 font-bold text-blue-light font-Nunito-Sans leading-[120%] hover:underline"
          >
            069-555-555
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
