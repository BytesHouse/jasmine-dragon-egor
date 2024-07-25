import Footerblock1 from "@/components/Footerblock1/Footerblock1";
import Footerbuttons from "@/components/Footerbuttons/Footerbuttons";
import Footerbuttons2 from "@/components/Footerbuttons2 (dead)/Footerbuttons2";
import Footerfinal from "@/components/Footerfinal/Footerfinal";
const Footer = () => {
  return (
    <footer className="border-t-[1px] border-t-[var(--blue-light)]">
      <div className="container !gap-y-[100px] !pb-[50px] _768:!pt-[50px] _768:!gap-y-[25px]">
        <Footerblock1 />
        <Footerbuttons className="footerHorizontal _768:footerVertical" />
        {/* <Footerbuttons2 /> */}
        <Footerfinal />
      </div>
    </footer>
  );
};

export default Footer;
