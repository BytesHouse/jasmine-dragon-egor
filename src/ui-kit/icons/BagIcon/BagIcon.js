"use client";
import { usePathname } from "next/navigation";

const BagIcon = () => {
  const path = usePathname();
  return (
    <svg
      width={60}
      height={60}
      className={`${
        path.endsWith("/shopping_cart") && " border-blue-light"
      } border-green-bg border-[1px] rounded-full p-[1px]`}
      fill="none"
    >
      <rect width={56} height={56} rx={28} fill="#5E9599" />
      <g
        clipPath="url(#prefix__clip0_585_27070)"
        stroke="#B5EAEE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M40.375 16.75h-24.75c-.621 0-1.125.504-1.125 1.125v20.25c0 .621.504 1.125 1.125 1.125h24.75c.621 0 1.125-.504 1.125-1.125v-20.25c0-.621-.504-1.125-1.125-1.125zM33.625 22.375a5.625 5.625 0 11-11.25 0" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_585_27070">
          <path fill="#fff" transform="translate(10 10)" d="M0 0h36v36H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BagIcon;
