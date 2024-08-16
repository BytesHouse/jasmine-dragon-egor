import { ReactNode } from "react";

const ButtonCartDelete = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-p2 items-center justify-center border border-blue-light p-[10px] gap-[10px] text-blue-light _491:text-p3 ${className}`}
    >
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 13.9922C11.3137 13.9922 14 11.3059 14 7.99219C14 4.67848 11.3137 1.99219 8 1.99219C4.68629 1.99219 2 4.67848 2 7.99219C2 11.3059 4.68629 13.9922 8 13.9922Z"
          stroke="#B5EAEE"
          strokeMiterlimit={10}
        />
        <path
          d="M10 5.99219L6 9.99219"
          stroke="#B5EAEE"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 9.99219L6 5.99219"
          stroke="#B5EAEE"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </button>
  );
};

export default ButtonCartDelete;
