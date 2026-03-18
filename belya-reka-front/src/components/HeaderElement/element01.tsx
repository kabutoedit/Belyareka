import type { FC } from "react";

// import { useMediaQuery } from "usehooks-ts";
// import { useMediaQuery } from "usehooks-ts";

import { AnimatePresence, motion } from "framer-motion";
import type { SliderELement } from "ts/types/common.interface";
import { imageProps } from "data/mock";
import milk__common from "/assets/media/picture/milk__common.webp";
import strawberry from "/assets/media/picture/strawberry49rfa42.webp";
import myta from "/assets/media/picture/myta.webp";
import strawberry01 from "/assets/media/picture/STRAWBERRY_1.webp";

const classNameSize = " w-40 sm:w-40 2xl:w-52 lg:w-36 ";

const Element01: FC<SliderELement> = ({ activeSlide, durationSlide }) => {
  // const isMobile = useMediaQuery("(max-width: 768.98px)");
  // const isMobile = useMediaQuery("(max-width: 768.98px)");

  return (
    <AnimatePresence>
      {activeSlide && (
        <motion.div
          initial={{ x: durationSlide, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          exit={{ opacity: 0, transition: { delay: 0.6 } }}
          className="w-full h-[100vh] z-30">
          <div className="absolute h-48 left-10 sm:left-20 md:left-12 lg:left-24 xl:left-40 2xl:left-72 -z-10 bottom-0">
            <img
              className="absolute h-[350px] bottom-0 2xl:h-[578px] lg:h-[450px] md:h-[350px] sm:h-[350px] ms:h-[330px] xl:h-[530px]"
              {...imageProps}
              src={milk__common}
            />
          </div>

          <div className="relative z-40">
            <img
              className="absolute w-32 right-5 top-20 sm:w-36 sm:right-10 sm:top-24 2xl:w-52 lg:w-36 lg:right-12 lg:top-20 2xl:top-24 2xl:right-16  "
              // src={`${httpsCoreUrl}certificates/strawberry49rfa42.webp`}
              src={strawberry}
              alt="image"
            />
            <img
              // src={`${httpsCoreUrl}certificates/myta.webp`}
              src={myta}
              alt="image"
              className={"absolute " + " -left-10 top-3  sm:-left-10 sm:top-8 2xl:-left-28 2xl:top-28 lg:-left-20 lg:top-32 " + classNameSize}
            />

            <img
              className="absolute w-48 top-[670px] -left-20 sm:w-52 sm:top-[650px] sm:-left-24 2xl:w-60  lg:w-48 lg:top-[650px] lg:-left-24 2xl:top-[580px] 2xl:-left-24  "
              // src={`${httpsCoreUrl}certificates/STRAWBERRY_1.webp`}
              src={strawberry01}
              alt="image"
            />
          </div>

          {/* <div className="absolute text-white right-[10%]  top-[15%] w-80 z-40 sm:w-96 sm:right-36 sm:top-[10%] md:w-[470px] md:top-[10%] md:right-[20%] lg:w-[600px] lg:right-0 lg:top-[25%]  xl:right-0 xl:top-[30%] 2xl:right-0 2xl:top-[30%]">
            <h3 className="font-bold text-4xl text-center sm:text-5xl  md:text-6xl  lg:pr-24 lg:text-5xl xl:pb-10 xl:text-left ">Молоко</h3>
            <p className="font-normal text-xl text-center sm:text-2xl mt-3 md:text-3xl md:mt-2  lg:text-2xl lg:w-[500px] xl:text-left xl:text-3xl leading-7 ">
              Магия утра начинается с натурального молока. Может стать основой для нежных блинчиков или злаковой каши – тонус и отличное настроение
              гарантированы.
            </p>
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Element01;
