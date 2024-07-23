// import { Link } from 'react-router-dom';
import Link from "next/link";
import { useLocale } from "next-intl";

const Footerfinal = () => {
  const lang = useLocale();
  return (
    <div className="col-span-full flex justify-between items-center _768:flex-col _768:items-start _768:gap-[15px]">
      <p className="p1 _1024:p2 ">
        All rights are reserved by{" "}
        <Link href="https://sterrasoft.com" target="_blank" rel="noreferrer">
          S-Terra-Soft
        </Link>
      </p>
      <div className="flex gap-[50px] _768:gap-[10px] justify-between">
        <Link
          className="hover:underline text-blue-light text-p1 _1024:text-p2"
          href={`/${lang}/privacy`}
        >
          Политика приватности
        </Link>
        <Link
          className="hover:underline text-blue-light text-p1 _1024:text-p2"
          href={`/${lang}/terms`}
        >
          Условия использования
        </Link>
      </div>
    </div>
  );
};

export default Footerfinal;
