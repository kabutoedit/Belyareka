import type { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import type { SliderELement } from "ts/types/common.interface";
import { imageProps } from "data/mock";
import yogurt_common from "/assets/media/picture/yogurt_common.webp";
import banan_strawberry from "/assets/media/picture/banan_strawberry.webp";
import fasdfsdasd from "/assets/media/picture/fasdfsdasd.webp";
import erhkjkjhkuio4 from "/assets/media/picture/erhkjkjhkuio4.webp";
import afdasf from "/assets/media/picture/44afdasf.webp";

const Element05: FC<SliderELement> = ({ activeSlide, durationSlide }) => {
  const isMobile = useMediaQuery("(max-width: 768.98px)");
  return (
    <AnimatePresence>
      {activeSlide && (
        <motion.div
          initial={{ x: durationSlide, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          exit={{ opacity: 0, transition: { delay: 0.6 } }}
          className="w-full h-[90vh] z-30 ">
          <div className="absolute w-[800px] bottom-0 -left-10 sm:left-16 -z-10">
            <img
              className="absolute h-[250px] bottom-0 md:h-[300px] lg:h-[350px] 2xl:h-96"
              {...imageProps}
              // src={`${httpsCoreUrl}certificates/yogurt_common.webp`}
              src={yogurt_common}
            />
            {!isMobile && (
              <img
                className="absolute -left-20 bottom-0 h-48 md:left-[500px] md:h-56 lg:h-64 lg:left-[580px] 2xl:h-80 2xl:left-[650px]"
                // src={`${httpsCoreUrl}certificates/banan_strawberry.webp`}
                src={banan_strawberry}
                {...imageProps}
              />
            )}
          </div>
          <img
            className="absolute -right-10 -bottom-10 h-[124px] lg:h-40 lg:top-[570px] lg:right-10 2xl:h-52 2xl:top-[530px] 2xl:right-20"
            // src={`${httpsCoreUrl}certificates/fasdfsdasd.webp`}
            src={fasdfsdasd}
            {...imageProps}
          />
          {/* Parallax */}
          <div className="relative z-40">
            {!isMobile && (
              <img
                className="absolute w-[123px] top-[400px] right-14 sm:top-[390px] sm:right-32 md:w-32 lg:top-[320px] 2xl:top-[270px] 2xl:w-36"
                // src={`${httpsCoreUrl}certificates/erhkjkjhkuio4.webp`}
                src={erhkjkjhkuio4}
                alt="image"
              />
            )}
            <img
              className="absolute w-[81px] right-20 top-9 sm:right-40 md:w-24 md:right-72 lg:right-[450px] 2xl:right-[720px]"
              // src={`${httpsCoreUrl}certificates/erhkjkjhkuio4.webp`}
              src={erhkjkjhkuio4}
              alt="image"
            />
            <img
              className="absolute w-[87px] right-44 top-24 sm:right-64 md:w-28 md:right-[420px] lg:right-[650px] 2xl:right-[900px] 2xl:top-36 2xl:w-36"
              // src={`${httpsCoreUrl}certificates/fasdfsdasd.webp`}
              src={fasdfsdasd}
              alt="image"
            />
            <img
              className="absolute w-[109px] left-5 top-7 sm:left-24 md:w-32 lg:w-48 lg:top-20 2xl:w-60"
              // src={`${httpsCoreUrl}certificates/44afdasf.webp`}
              src={afdasf}
              alt="image"
            />
          </div>

          {/* <div className="absolute text-white right-[10%]  top-[15%] w-80 z-40 sm:w-96 sm:right-36 sm:top-[10%] md:w-[470px] md:top-[10%] md:right-[20%] lg:w-[600px] lg:right-0 lg:top-[20%]  xl:right-0 xl:top-[30%] 2xl:right-0 2xl:top-[30%]">
            <h3 className="font-bold text-4xl text-center sm:text-5xl  md:text-6xl lg:text-left  lg:text-5xl xl:pb-10 xl:text-left ">Йогурт</h3>
            <p className="font-normal text-xl text-center sm:text-2xl mt-3 md:text-3xl md:mt-2 lg:text-left lg:text-2xl lg:w-[500px] xl:text-left xl:text-3xl leading-7 ">
              Самый простой способ совместить приятное с полезным – выбор йогурта каждый день. Мы создали несколько вкусов: больше удовольствия –
              больше пользы!
            </p>
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Element05;
