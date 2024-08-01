import { Footerblock1, Footerbuttons, Footerfinal } from "@/components/";
const Footer = () => {
  return (
    <footer className="border-t-[1px] border-t-[var(--blue-light)]">
      <div className="container !gap-y-[100px] !pb-[50px] _768:!pt-[50px] _768:!gap-y-[25px]">
        <Footerblock1 />
        <Footerbuttons className="footerHorizontal _768:footerVertical" />
        <Footerfinal />
      </div>
    </footer>
  );
};

export default Footer;
