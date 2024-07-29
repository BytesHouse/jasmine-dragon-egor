// import image1 from '../../../../assets/icons/Frame.svg'
// import image2 from '../../../../assets/icons/Frame-1.svg'
// import image3 from '../../../../assets/icons/Frame-2.svg'

import Image from "next/image";

// import image4 from '../../../../assets/icons/Frame-3.svg'
const image1 = "/assets/icons/Frame.svg";
const image2 = "/assets/icons/Frame-1.svg";
const image3 = "/assets/icons/Frame-2.svg";
const image4 = "/assets/icons/Frame-3.svg";

const BrewBlock = ({ product }) => {
  const { seconds, gramm, temperature, strait } = product;
  return (
    <section className="col-span-full flex flex-col gap-[25px]">
      <h2 className="simple _768:text-h3">Как правильно заваривать</h2>
      <div className="grid grid-cols-4 brew gap-[25px] _1024:grid-cols-2 _768:grid-cols-1">
        <div className="flex flex-col items-start gap-[15px]">
          <Image width={60} height={60} src={image1} alt="time" />
          <h5 className="simple font-bold">Время заваривания</h5>
          <p className="p1">
            Время одного пролива {seconds} секунд, постепенное увеличение с
            каждым проливо
          </p>
        </div>
        <div className="flex flex-col items-start gap-[15px]">
          <Image width={60} height={60} src={image2} alt="balance" />
          <h5 className="simple font-bold">Размер порции</h5>
          <p className="p1">
            Рекомендуемая порция сухого чая {gramm} грамм на 0.8-1 литр воды
            (золотое правило)
          </p>
        </div>
        <div className="flex flex-col items-start gap-[15px]">
          <Image width={60} height={60} src={image3} alt="temp" />
          <h5 className="simple font-bold">Температура</h5>
          <p className="p1">
            Заваривать чистой, не содержащей примесей, мягкой водой при
            температуре {temperature} °С
          </p>
        </div>
        <div className="flex flex-col items-start gap-[15px]">
          <Image width={60} height={60} src={image4} alt="reverse" />
          <h5 className="simple font-bold">Как много раз</h5>
          <p className="p1">
            Рекомендуется пить проливами {strait ? strait : "3-4"} раз, в
            зависимости от интервала проливов
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrewBlock;
