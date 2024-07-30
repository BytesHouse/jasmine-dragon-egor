import {
  // Choise,
  Flexrow,
  Lables,
  Store,
  Hotsales,
  Contacts,
  Feedbacks,
} from "../index";
import MenuPreview from "../MenuPreview/MenuPreview";

const SectionThree = () => {
  return (
    <>
      <Flexrow />
      {/* <Filters /> */}
      <MenuPreview />
      <Lables />
      <Store />
      <Hotsales />
      <Contacts />
      <Feedbacks />
    </>
  );
};

export default SectionThree;
