import Image from "next/image";

const image1 = "/assets/Images/tea-mock.png";
const image2 = "/assets/Images/cheainic.png";
const image3 = "/assets/Images/cheaitar.png";
const image4 = "/assets/Images/cupof2tea.png";
const image5 = "/assets/Images/teabig.png";
// const image1 = "/assets/Images/teagreen.png";
// const image2 = "/assets/Images/cheainic.png";
// const image3 = "/assets/Images/cheaitar.png";
// const image4 = "/assets/Images/cupof2tea.png";
// const image5 = "/assets/Images/teabig.png";

const ImagesComponent = () => {
  return (
    <div className="col-span-7 w-full flex gap-[25px] flex-col _1024:col-span-full">
      <div className="grid grid-cols-2 w-full gap-[25px]">
        <Image className="" src={image1} alt="img-1" width={563} height={563} />
        <Image className="" src={image1} alt="img-2" width={563} height={563} />
      </div>
      <div className="grid grid-cols-3 gap-[25px] ">
        <Image
          className="aspect-square object-cover"
          src={image3}
          alt="img-3"
          height={256}
          width={256}
        />
        <Image
          className="aspect-square object-cover"
          src={image4}
          alt="img-4"
          height={256}
          width={256}
        />
        <Image
          className="aspect-square object-cover"
          src={image5}
          alt="img-5"
          height={256}
          width={256}
        />
      </div>
    </div>
  );
};

export default ImagesComponent;
