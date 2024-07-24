import SectionTwo from "../SectionTwo/SectionTwo";

const SectionAbout = () => {
  return (
    <section className="aboutus1 container !gap-y-[100px] _768:!gap-y-[50px]">
      <h4 className="col-span-3 _1024:col-span-2 _768:col-span-full">О нас</h4>
      <h4 className="col-span-9 indent-[var(--column)] _1024:col-span-4 _1024:text-h5 _768:col-span-full _768:indent-0">
        ”Jasmine Dragon” - это история о любви к чаю, которая началась много лет
        назад с искренней страсти к уникальным вкусам и ароматам.
      </h4>
      <SectionTwo />
    </section>
  );
};

export default SectionAbout;
