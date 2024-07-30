import { ChocoMenu, LineMenu } from "@/ui-kit/icons";
import { useTranslations } from "next-intl";

const ToggleView = ({ isHorizontal, toggleView, ...props }) => {
  const t = useTranslations("Menu");
  return (
    <div
      className={`flex items-center justify-end ${
        typeof props.className !== "undefined" ? props.className : ""
      }`}
    >
      <p className="font-semibold p1 mr-5 _768:p3 _768:mr-1">
        {t("productView")}
      </p>
      <button onClick={() => toggleView(true)} title="Toggle Vertical">
        <ChocoMenu state={isHorizontal} />
      </button>
      <button onClick={() => toggleView(false)} title="Toggle Horizontal">
        <LineMenu state={!isHorizontal} />
      </button>
    </div>
  );
};

export default ToggleView;
