import { type FC, useEffect, useState } from "react";
import LegendBelyaReka from "common/LegendBelyaReka";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "usehooks-ts";
import ContainerLayout from "layout/ContainerLayout";
import LazyLoadLayout from "layout/LazyLoadLayout";

import { SlideshowLightbox } from "lightbox.js-react";

// svg
// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const prevBtn = `${CDN_BASE}/assets/media/svg/btn__prev.svg`;
const nextBtn = `${CDN_BASE}/assets/media/svg/btn__next.svg`;

import { $api, API_URL } from "../../api";

interface CertificateImage {
  id: number;
  url: string;
  name: string;
}

interface CertificateData {
  title: string;
  description: string;
  images: CertificateImage[];
}

const CertificateMainSection: FC = () => {
  const isMobile = useMediaQuery("(max-width: 1023.98px)"); // for adaptive
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<CertificateData | null>(null);

  useEffect(() => {
    $api
      .get("/certificate-block?populate=*&locale=ru")
      .then((response) => {
        const result = response.data.data.attributes;

        if (result) {
          setData({
            title: result.title || "",
            description: result.description || "",
            images:
              result.images?.data?.map((img: { id: number; attributes: { url: string; name: string } }) => ({
                id: img.id,
                url: img.attributes.url,
                name: img.attributes.name,
              })) || [],
          });
        }
      })
      .catch((err: Error) => console.error("Ошибка загрузки сертификатов:", err));
  }, []);

  const certificates =
    data?.images.map((img) => ({
      src: img.url.startsWith("http") ? img.url : `${API_URL}${img.url}`,
      alt: img.name || "",
    })) || [];

  return (
    <ContainerLayout className="mt-20">
      <LegendBelyaReka className="font-cocosignum">Сертификаты</LegendBelyaReka>
      <div className="flex justify-between items-end mt-8 2xl:flex-nowrap flex-wrap">
        <span className="br-text-medium block leading-7 2xl:basis-3/4 w-full text-balance">{data?.title}</span>
        <p className="2xl:mt-0 mt-5 text-lg w-full text-balance">{data?.description}</p>
      </div>

      <SlideshowLightbox
        images={certificates}
        showThumbnails={true}
        open={isOpen}
        lightboxIdentifier="lbox1"
        onClose={() => {
          setIsOpen(false);
        }}></SlideshowLightbox>

      <LazyLoadLayout>
        <Swiper
          className="mt-20 relative flex justify-center items-center"
          noSwiping={false}
          slideToClickedSlide={true}
          allowTouchMove={true}
          slidesPerView={isMobile ? "auto" : 3}
          spaceBetween={0}
          loop={false}
          effect="creative"
          speed={500}
          direction={"horizontal"}
          navigation={{
            nextEl: ".cdf26213a150dc23a",
            prevEl: ".d41d8cd98f00b2dee",
          }}
          modules={[Navigation]}>
          {certificates?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide-custom"
              // prettier-ignore
              onClick={() => {setIsOpen(true)}}>
              <LazyLoadImage
                wrapperClassName="w-full"
                className="certificate__img--block bg-snow p-5 rounded-2xl"
                src={item.src}
                placeholderSrc={item.src}
                width={isMobile ? "300px !important" : 300}
                height={400}
                effect="blur"
              />
            </SwiperSlide>
          ))}
          <div className="absolute w-full top-[40%] z-20">
            <button className="cdf26213a150dc23a right-0 absolute">
              <img src={nextBtn} alt="prev-btn" />
            </button>
            <button className="d41d8cd98f00b2dee absolute ">
              <img src={prevBtn} alt="prev-btn" />
            </button>
          </div>
        </Swiper>
      </LazyLoadLayout>
    </ContainerLayout>
  );
};

export default CertificateMainSection;
