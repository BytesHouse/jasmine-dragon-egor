import PrivacyBlock from "../privacy/components/PrivacyBlock/PrivacyBlock";
import { termsText } from "@/config/constants";

const Terms = () => {
  return (
    <main>
      <div className="container">
        <PrivacyBlock data={termsText} />
      </div>
    </main>
  );
};

export default Terms;
