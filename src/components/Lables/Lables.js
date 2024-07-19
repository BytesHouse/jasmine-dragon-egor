import Image from "next/image";

import { labels } from "@/config/constants";

const Lables = () => {
  return (
    <div className="viewport -ml-[20px]">
      <div className="lables">
        {labels.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              height={120}
              width={item.width}
              className="_1240:h-[60px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Lables;
