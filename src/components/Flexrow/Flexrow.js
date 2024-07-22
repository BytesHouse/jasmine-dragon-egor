import { flexRow } from "@/config/constants";

const Flexrow = () => {
  return (
    <div className="container !pb-0">
      <h4 className="col-span-full">Меню</h4>
      <div className="col-span-full flex justify-between gap-[25px] ">
        {flexRow.map((item, index) => {
          return (
            <div
              key={index}
              className="border border-green-bg transition hover:border-blue-light aspect-square min-w-[170px]"
            >
              <a
                className={`${item.bgPath} bg-no-repeat bg-cover flex justify-center items-center h-full`}
                id={`tea${index + 1}`}
                href="index.html"
              >
                <div className="group flex flex-col items-center border-blue-light border p-[25px] _1240:p-[15px] bg-[var(--green-bg-25)] hover:bg-blue-light transition">
                  <h5 className="text-center group-hover:text-green-light mb-[15px]">
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
