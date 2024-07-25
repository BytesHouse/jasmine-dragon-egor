const StoreButton = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  return (
    <button
      className={`p-[25px] border-2 text-h5 font-Playfair-Display italic font-medium text-blue-light text-center w-full _1024:text-p1 _768:p-[10px] ${className}`}
    >
      {children}
    </button>
  );
};

export default StoreButton;
