import { ChocoMenu, LineMenu } from "@/ui-kit/icons";

const ToggleView = ({ isHorizontal, toggleView, ...props }) => {
  return (
    <div className={`flex items-center ${props?.className}`}>
      <p className="font-semibold text-[18px] mr-5">Вид товара:</p>
      <button onClick={() => toggleView(true)} id="margin20px">
        <ChocoMenu state={isHorizontal} />
      </button>
      <button onClick={() => toggleView(false)}>
        <LineMenu state={!isHorizontal} />
      </button>
    </div>
  );
};

export default ToggleView;
