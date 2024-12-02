export default function ThanksMessage({ isShow = true }) {
  return (
    <div
      className={`${isShow ? "flex flex-col" : "hidden"} absolute top-[25%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white`}
    >
      Thanks
    </div>
  );
}
