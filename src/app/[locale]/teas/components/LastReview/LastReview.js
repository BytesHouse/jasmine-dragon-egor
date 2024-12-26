import { useTranslations } from "next-intl";

const videos = [
  { id: 3, name: 'green', link: 'https://www.youtube.com/embed/70rp-HNMbp0?si=Wl7O_-sdK74vF8zN' },
  { id: 4, name: 'white', link: 'https://www.youtube.com/embed/yDfan0l5Z2k?si=ejIE8x6V4SufA_ND' },
  { id: 5, name: 'red', link: 'https://www.youtube.com/embed/m_mRBfOeZ-U?si=M_lDR3FDWTCHAZhe' },
  { id: 6, name: 'red', link: 'https://www.youtube.com/embed/m_mRBfOeZ-U?si=M_lDR3FDWTCHAZhe' },
  { id: 7, name: 'shen', link: 'https://www.youtube.com/embed/aLXTowKEkfA?si=klDzRQDLGtAuNg10' },
  { id: 8, name: 'shu', link: 'https://www.youtube.com/embed/mfLPncoD_v0?si=eiP3YO4XBvonqrZ_' },
]

const LastReview = ({ productId = 5 }) => {
  const t = useTranslations("LastReview");
  const video = videos.find(item => item.id === +productId) ?? videos[5]
  return (
    <section className="col-span-full flex flex-col gap-[50px]">
      <h2 className="!font-medium">{t("heading")}</h2>
      <iframe
        className="aspect-video"
        width="100%"
        height="auto"
        src={video.link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default LastReview;
