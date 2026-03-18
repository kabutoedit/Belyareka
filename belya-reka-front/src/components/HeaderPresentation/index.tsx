import React, { type FC, useState, useEffect, lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import * as SwiperType from "swiper";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const Element01 = lazy(() => import("components/HeaderElement/element01"));
const Element02 = lazy(() => import("components/HeaderElement/element02"));

import DynamicSlide from "components/HeaderElement/DynamicSlide";
import { $api, API_URL } from "../../api";
import { swiperProps } from "data/mock";
import type { SliderELement } from "ts/types/common.interface";

// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const prevBtn = `${CDN_BASE}/assets/media/svg/btn__prev.svg`;
const nextBtn = `${CDN_BASE}/assets/media/svg/btn__next.svg`;
const table = `${CDN_BASE}/assets/media/picture/table 1.png`;

const fallbackElements = [<Element01 key="el01" />, <Element02 key="el02" />];

const fallbackElementText = [
  {
    title: "Молоко",
    description: `Магия утра начинается с натурального молока. Может стать основой для нежных блинчиков или злаковой каши – тонус и отличное настроение гарантированы!`,
  },
  {
    title: "Сметана",
    description: `Универсальный продукт для любимых блюд. Источник полезных белков, умеренных жиров и необходимых витаминов.`,
  },
];

const fallbackBackgroundColor = ["#1A7BD3", "#A0C282"];

interface StrapiSlide {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  productImageDesktop: string;
  productImageMobile: string;
}

const HeaderPresentation: FC = () => {
  const [acitveSlideNumber, setActiveSliderNumber] = useState<number>(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState<number>();
  const [duration, setDuration] = useState<number>(300);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [strapiSlides, setStrapiSlides] = useState<StrapiSlide[]>([]);

  const slides = strapiSlides.length > 0 ? strapiSlides : null;
  const elementText = slides ? slides.map((s) => ({ title: s.title, description: s.description })) : fallbackElementText;
  const backgroundColor = slides ? slides.map((s) => s.bgColor || "#1A7BD3") : fallbackBackgroundColor;

  const elementsToRender = slides
    ? slides.map((slide) => (
        <DynamicSlide key={`strapi-${slide.id}`} productImageDesktop={slide.productImageDesktop} productImageMobile={slide.productImageMobile} />
      ))
    : fallbackElements;

  const [activeBackground, setActiveBackground] = useState<string>(backgroundColor[0]);

  useEffect(() => {
    $api
      .get("/home-page?populate[slides][populate][0]=productImageDesktop&populate[slides][populate][1]=productImageMobile&locale=ru")
      .then((res) => {
        const data = res.data?.data;
        const attributes = data?.attributes || data;
        const slidesData = attributes?.slides;

        if (slidesData && Array.isArray(slidesData) && slidesData.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const normalizedSlides = slidesData.map((slide: any) => {
            let desktopUrl = "";
            const desktopImg = slide.productImageDesktop;
            if (desktopImg) {
              if (desktopImg.url) {
                desktopUrl = desktopImg.url;
              } else if (desktopImg.data?.attributes?.url) {
                desktopUrl = desktopImg.data.attributes.url;
              }
            }

            let mobileUrl = "";
            const mobileImg = slide.productImageMobile;
            if (mobileImg) {
              if (mobileImg.url) {
                mobileUrl = mobileImg.url;
              } else if (mobileImg.data?.attributes?.url) {
                mobileUrl = mobileImg.data.attributes.url;
              }
            }

            return {
              id: slide.id,
              title: slide.title || "",
              description: slide.description || "",
              bgColor: slide.bgColor || "#1A7BD3",
              productImageDesktop: desktopUrl ? (desktopUrl.startsWith("http") ? desktopUrl : `${API_URL}${desktopUrl}`) : "",
              productImageMobile: mobileUrl ? (mobileUrl.startsWith("http") ? mobileUrl : `${API_URL}${mobileUrl}`) : "",
            };
          });

          setStrapiSlides(normalizedSlides);
          if (normalizedSlides.length > 0 && normalizedSlides[0].bgColor) {
            setActiveBackground(normalizedSlides[0].bgColor);
          }
        }
      })
      .catch((err) => {
        console.error("Error loading home page slides:", err);
      });
  }, []);

  useEffect(() => {
    if (backgroundColor.length > 0) {
      setActiveBackground(backgroundColor[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strapiSlides]);

  const setIndexOfSlide = (i: SwiperType.Swiper) => {
    const currentSlideIndex = i.activeIndex;
    setActiveBackground(backgroundColor[currentSlideIndex] || backgroundColor[0]);
    setActiveSliderNumber(currentSlideIndex);

    if (currentSlideIndex > prevSlideIndex!) {
      setDuration(300);
    } else if (currentSlideIndex < prevSlideIndex!) {
      setDuration(-300);
    }

    setPrevSlideIndex(currentSlideIndex);
  };

  const isUsingStrapi = slides !== null;
  const showTableAndBg = !isUsingStrapi;

  return (
    <motion.div
      initial={{ backgroundColor: showTableAndBg ? activeBackground : "transparent" }}
      transition={{ duration: 0.2, ease: "linear" }}
      animate={{ backgroundColor: showTableAndBg ? activeBackground : "transparent" }}
      className={`relative overflow-hidden`}>
      <Swiper
        onSlideChange={(i) => setIndexOfSlide(i)}
        className="h-[100vh] w-screen overflow-hidden absolute top-0 left-0"
        speed={500}
        autoplay={{ delay: 5000 }}
        {...swiperProps}
        modules={[Navigation, Autoplay]}>
        {elementsToRender.map((elem, index) => (
          <SwiperSlide key={index}>
            {React.cloneElement<SliderELement>(elem, {
              activeIndex: index,
              activeSlide: index === acitveSlideNumber,
              durationSlide: duration,
            })}
          </SwiperSlide>
        ))}
      </Swiper>

      {elementText.map(
        (item, index) =>
          index === acitveSlideNumber && (
            <motion.div
              key={index}
              initial={{ x: duration, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: !isMobile ? 1 : 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute text-white top-[15%] z-[15] w-full sm:top-[15%] md:top-[20%] md:right-14 md:w-[470px] lg:w-[600px] lg:right-0 lg:top-[25%] xl:right-0 xl:top-[30%] px-8 md:px-0 flex sm:block justify-center sm:justify-normal 2xl:right-[7%] 2xl:top-[30%]">
              <div className="flex flex-col items-center lg:items-start w-full">
                <h3 className="w-full font-bold text-4xl text-center sm:text-5xl md:text-6xl lg:pr-24 lg:text-5xl xl:pb-10 md:text-left">
                  {item?.title}
                </h3>
                <p className="font-normal text-xl text-center sm:text-2xl mt-3 md:text-3xl md:mt-2 lg:text-2xl max-w-[500px] 2xl:max-w-full md:text-left xl:text-3xl leading-7">
                  {item?.description}
                </p>
              </div>
            </motion.div>
          )
      )}

      <div className="w-full absolute z-20 top-[50%]">
        <button className="btn btn__header btn__header-prev fds33212dseq absolute left-1">
          <img src={prevBtn} alt="prev-btn" />
        </button>

        <button className="fds33212dsec absolute right-2">
          <img src={nextBtn} alt="next-btn" />
        </button>
      </div>

      {showTableAndBg && <img draggable="false" className="table bottom-0 absolute h-40 w-full select-none" src={table} alt="Table" />}
    </motion.div>
  );
};

export default HeaderPresentation;
