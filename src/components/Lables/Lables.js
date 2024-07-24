import Image from "next/image";

import { labels } from "@/config/constants";

const Lables = () => {
  return (
    <div className="-ml-[20px] mt-[100px]">
      <div className="my-[100px] w-max _768:my-[50px] animate-lables">
        <div className="flex gap-[50px]">
          {labels.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                height={120}
                width={item.width}
                className="_1240:h-[60px] _1240:w-auto"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Lables;
