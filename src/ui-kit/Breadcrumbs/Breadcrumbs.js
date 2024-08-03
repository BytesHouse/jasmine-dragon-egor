import { useTranslations } from "next-intl";
import { useProduct } from "@/components/Providers/ContextProvider";
import Link from "next/link";

const Breadcrumbs = ({ breadcrumbs, ...props }) => {
  const { findProductById } = useProduct();
  let isTeas = false;
  let isOrder = false;
  //   const { name, type, subtype, weight } = product;
  const t = useTranslations("Breadcrumbs");
  let path = "";
  return (
    <nav
      className={`py-[15px] px-[20px] border-t border-[var(--blue-light)] -ml-[20px] w-screen ${props.className}`}
    >
      <div className="container !py-0 !flex items-center _768:!gap-x-[10px]">
        {breadcrumbs.length > 1 &&
          breadcrumbs.map(function (item, index) {
            isTeas = item === "teas" || isTeas;
            isOrder = item === "profile" || isOrder;
            path += `/${item}`;
            return (
              <div className="flex gap-[25px] _768:gap-[10px]" key={index}>
                <Link
                  href={path}
                  className={`p1 font-semibold ${
                    index == breadcrumbs.length - 1
                      ? "text-blue-light truncate"
                      : "text-blue"
                  } hover:text-blue-light transition`}
                >
                  {index == breadcrumbs.length - 1
                    ? isTeas
                      ? `${findProductById(Number(index)).name}`
                      : isOrder & (item != "profile")
                      ? `Заказ №${item}`
                      : t(item)
                    : t(item)}
                </Link>
                {index != breadcrumbs.length - 1 && (
                  <svg
                    className=" text-blue-light transition"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 4.50024L16.5 12.0002L9 19.5002"
                      stroke="#5E9599"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            );
          })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
