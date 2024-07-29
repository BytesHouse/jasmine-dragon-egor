const LastReview = () => {
  return (
    <section className="col-span-full flex flex-col gap-[50px]">
      <h2 className="!font-medium">Инструкция по приготовлению</h2>
      <iframe
        className="aspect-video"
        width="100%"
        height="auto"
        src="https://www.youtube.com/embed/lVBXUDEgbQ4"
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
