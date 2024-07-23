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
    <div className="w-full flex gap-[25px] flex-col">
      <div className="grid grid-cols-1 justify-items-center gap-[25px]">
        <img className="h-full" src={image1} alt="img-1" />
        {/* <img className="h-full" src={image1} alt="img-2" /> */}
      </div>
      <div className="relative grid grid-cols-3 grid-rows-[256px] gap-[25px] ">
        <img className="h-full w-full" src={image3} alt="img-3" />
        <img className="h-full w-full" src={image4} alt="img-4" />
        <img className="h-full w-full" src={image5} alt="img-5" />
      </div>
    </div>
  );
};

export default ImagesComponent;
