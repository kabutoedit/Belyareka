import { type FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import YouTube from "react-youtube";
import LegendBelyaReka from "common/LegendBelyaReka";
import ContainerLayout from "layout/ContainerLayout";
import Space from "common/Space";

// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const svgnextBtn = `${CDN_BASE}/assets/media/svg/btn__next.svg`;
const svgprevBtn = `${CDN_BASE}/assets/media/svg/btn__prev.svg`;

// Импорт API
import { $api } from "../../api";
import { formatNumberWithUnicode } from "helpers/formatNumber";

// Интерфейс для видео
interface AestheticItem {
  id: number;
  VideoId: string;
  Title?: string;
  // На случай другой структуры Strapi
  attributes?: {
    VideoId: string;
    Title?: string;
  };
}

const YouTubeShortsSection: FC = () => {
  const [videos, setVideos] = useState<AestheticItem[]>([]);

  useEffect(() => {
    // Загружаем список видео из Strapi
    $api
      .get("/aesthetics")
      .then((res) => {
        const data = res.data.data;
        // Можно добавить сортировку, если нужно
        setVideos(data);
      })
      .catch((err) => console.error("Ошибка загрузки видео:", err));
  }, []);

  const onVideoEnd = (event: { target: { seekTo: (time: number) => void } }) => event.target.seekTo(0);

  // Если видео еще не загрузились, можно вернуть null или скелетон
  if (videos.length === 0) return null;

  return (
    <ContainerLayout className="estetics my-20">
      <Space height={"100px"} />
      <LegendBelyaReka className="mb-10 font-cocosignum">Эстетика продукции "Белая Река"</LegendBelyaReka>

      <Swiper
        className="relative flex justify-center items-center"
        noSwiping={false}
        slideToClickedSlide={true}
        allowTouchMove={false}
        breakpoints={{
          1700: { slidesPerView: 4 },
          1500: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        spaceBetween={"20px"}
        loop={false}
        effect="creative"
        speed={500}
        direction={"horizontal"}
        navigation={{
          nextEl: ".dd8f81",
          prevEl: ".ssa221",
        }}
        modules={[Navigation]}>
        {videos.map((item, index) => {
          // Получаем ID видео (поддержка v4 и v5)
          const videoId = item.VideoId || item.attributes?.VideoId;

          if (!videoId) return null;

          // Настройки плеера формируем динамически для каждого видео
          const opts = {
            height: "533",
            width: "300",
            title: false, // В документации react-youtube title нет в opts, но оставил как у тебя
            playerVars: {
              // https: videoId, // Это поле не стандартное для YouTube API, но если работало - ок.
              // Обычно достаточно передать videoId в проп компонента.
              autoplay: 0,
              controls: 0,
              showinfo: 0,
              modestbranding: 1,
              rel: 0,
              fs: 0,
              loop: 0,
            },
          };

          return (
            <SwiperSlide className="swiper-slide-custom" key={item.id || index}>
              <YouTube
                videoId={videoId}
                title={"YouTube video player"}
                style={{
                  width: "300px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
                opts={opts}
                onEnd={onVideoEnd}
              />
            </SwiperSlide>
          );
        })}

        <div className="absolute w-full top-[40%] z-30">
          <button className="dd8f81 absolute right-0 z-50 p-2">
            <img src={svgnextBtn} alt="Next" />
          </button>
          <a className="sr-only" href={formatNumberWithUnicode(1200, "", true)} />
          <button className="ssa221 absolute left-0 z-50 p-2">
            <img src={svgprevBtn} alt="Prev" />
          </button>
        </div>
      </Swiper>
    </ContainerLayout>
  );
};

export default YouTubeShortsSection;
