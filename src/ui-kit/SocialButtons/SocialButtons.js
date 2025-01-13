import { Facebook, Twitter, Instagram, Telegram, Vk } from "../icons/Socials";

const SocialButtons = ({ children }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      {children && <p className="text-[18px] font-[600]">{children}</p>}
      <div className="flex gap-[25px]">
        <a
          target="_blank"
          href="https://www.instagram.com/jasmine.dragon_?igsh=MXJzaWd5ZDFvYndqcQ=="
          aria-label="Link to instagram"
        >
          <Instagram />
        </a>
        <a
          target="_blank"
          href="https://t.me/+hlP0cr1bDF5jYTBi"
          aria-label="Link to telegram">
          <Telegram />
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;
