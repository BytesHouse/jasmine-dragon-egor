import { flexRow } from "@/config/constants";

const Flexrow = () => {
  return (
    <div className="container !pb-0">
      <h4 className="col-span-full ">Меню</h4>
      <div className="col-span-full flex justify-between w-full">
        {flexRow.map((item, index) => {
          return (
            <div key={index} className="hoferforfotka">
              <a
                className={`bg-[url('/assets/Images/FlexRow/0.png')] fotka flex-grow`}
                id={`tea${index + 1}`}
                href="index.html"
              >
                <div className="group menuvibor">
                  <h5 className="text-center group-hover:text-green-light">
                    {item.h5}
                  </h5>
                  <p className="p1 group-hover:text-green-light">{item.p1}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Flexrow;
