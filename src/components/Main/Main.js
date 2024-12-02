import SectionOne from "../../components/SectionOne/SectionOne";
import SectionAbout from "../../components/SectionAbout/SectionAbout";
// import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/SectionThree/SectionThree";
import ContentSubHeader1 from "../../components/ContentSubHeader1/ContentSubHeader1";
import {
  ContactsBlock,
  Feedbacks,
} from "../index";

const Main = () => {
  return (
    <main>
      <ContentSubHeader1 />
      <SectionThree />
      <SectionAbout />
      {/* <SectionTwo /> */}
      {/* <SectionOne /> */}
      <ContactsBlock />
      <Feedbacks />
    </main>
  );
};

export default Main;
