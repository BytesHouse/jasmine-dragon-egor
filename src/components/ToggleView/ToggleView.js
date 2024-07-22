import { ChocoMenu, LineMenu } from "@/ui-kit/icons";

const ToggleView = ({ isHorizontal, toggleView, ...props }) => {
  return (
    <div className={`flex items-center justify-end ${props?.className}`}>
      <p className="font-semibold p1 mr-5 _768:p3 _768:mr-2">Вид товара:</p>
      <button onClick={() => toggleView(true)}>
        <ChocoMenu state={isHorizontal} />
      </button>
      <button onClick={() => toggleView(false)}>
        <LineMenu state={!isHorizontal} />
      </button>
    </div>
  );
};

export default ToggleView;
