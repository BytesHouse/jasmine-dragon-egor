"use client";

import Checkbox from "@/ui-kit/Checkbox/Checkbox";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Agreements = () => {
  const [checkedValues, setCheckedValues] = useState([false, false]);

  const handleAgree = (optionId) => {
    let newValues = [...checkedValues];
    newValues[optionId] = !newValues[optionId];
    setCheckedValues(newValues);
  };

  const t = useTranslations("CheckForOrders");

  return (
    <div className="flex flex-col gap-[10px]">
      <Checkbox isCurr={checkedValues[0]} setIsCurr={() => handleAgree(0)}>
        {t("agreementNews")}
      </Checkbox>
      <Checkbox isCurr={checkedValues[1]} setIsCurr={() => handleAgree(1)}>
        {t("agreementTerms")}
      </Checkbox>
    </div>
  );
};

export default Agreements;
