import { Header } from "@/components";
import PrivacyBlock from "../privacy/components/PrivacyBlock/PrivacyBlock";
import { termsText } from "@/config/constants";
import Footer from "@/components/Footer/Footer";

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
