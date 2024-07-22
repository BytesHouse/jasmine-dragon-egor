// import rect from '..//../../assets/Images/Rectangle 21.png';
// import table from '..//../../assets/Images/table.png'
// import rect2 from '..//../../assets/Images/Rectangle 23.png';
// import rect3 from '..//../../assets/Images/Rectangle 22.png';
import Image from "next/image";
const ImageSection = ({ ...props }) => {
  return (
    <div
      className={`h-[500px] max-w-[1048px] flex justify-center items-center _1240:items-start relative ${props.className}`}
    >
      <Image
        className=""
        // w-[500px] h-[632px]
        src="/assets/Images/Rectangle 21.png"
        alt="bigphoto"
        height={423}
        width={316}
      />
      <Image
        className="absolute left-[20px] top-[73px]"
        // w-[293px] h-[274px]
        src="/assets/Images/table.png"
        alt="table"
        height={183}
        width={196}
      />
      <Image
        className="absolute top-[257px] right-0"
        //  w-[307px] h-[287px]
        src="/assets/Images/Rectangle 23.png"
        alt="rect2"
        height={192}
        width={205}
      />
      <Image
        className="absolute bottom-0 left-0"
        //  w-[235px] h-[220px]
        src="/assets/Images/Rectangle 22.png"
        alt="rect2"
        height={147}
        width={157}
      />
    </div>
  );
};

export default ImageSection;
