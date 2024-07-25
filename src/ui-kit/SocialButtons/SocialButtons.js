import { Facebook, Twitter, Instagram, Telegram, Vk } from "../icons/Socials";

const SocialButtons = ({ children }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      {children && <p className="text-[18px] font-[600]">{children}</p>}
      <div className="flex gap-[25px]">
        <a href="https://facebook.com" aria-label="Link to facebook">
          <Facebook />
        </a>
        <a href="https://x.com" aria-label="Link to x.com">
          <Twitter />
        </a>
        <a href="https://instagram.com" aria-label="Link to instagram">
          <Instagram />
        </a>
        <a href="https://t.me" aria-label="Link to telegram">
          <Telegram />
        </a>
        <a href="https://vk.com" aria-label="Link to VK">
          <Vk />
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;
