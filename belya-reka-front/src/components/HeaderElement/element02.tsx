import type { FC } from "react";

// import { useMediaQuery } from "usehooks-ts";
// import { useMediaQuery } from "usehooks-ts";

import { AnimatePresence, motion } from "framer-motion";
import { SliderELement } from "ts/types/common.interface";
import { imageProps } from "data/mock";
import smetana__common from "/assets/media/picture/smetana__common.webp";
import leaf from "/assets/media/picture/leaf02.webp";
import leaf2 from "/assets/media/picture/LEAF_2.webp";
import leaf3 from "/assets/media/picture/leaf.webp";

const Element02: FC<SliderELement> = ({ activeSlide, durationSlide }) => {
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
          className="w-full min-h-[100vh] z-30 ">
          <div className="absolute w-[800px] bottom-10 left-56 md:bottom-9 -z-10">
            <img
              className="absolute h-[350px] bottom-0 2xl:h-[700px] lg:h-[450px] md:h-[350px] sm:h-[350px] ms:h-[330px] xl:h-[530px]"
              {...imageProps}
              src={smetana__common}
            />
          </div>
          <div className="relative z-40">
            <img
              className="absolute w-[215px] -left-36 top-60 sm:w-56 md:-left-40 lg:w-72 lg:-left-48 lg:top-56 2xl:w-[384px] 2xl:-left-64 2xl:top-16"
              // src={`${httpsCoreUrl}certificates/leaf2.webp`}
              src={leaf}
              alt="image"
            />
            <img
              className="absolute w-[98px] right-4 top-20 sm:w-36 lg:w-48 lg:right-12 lg:top-32 2xl:w-[230px]"
              // src={`${httpsCoreUrl}certificates/LEAF_2.webp`}
              src={leaf2}
              alt="image"
            />
            <img
              className="absolute w-[136px] -right-5 top-[640px] sm:w-36 sm:-right-3 md:w-40 md:top-[600px] md:-right-5 lg:w-44 2xl:w-64 2xl:-right-7 2xl:top-[460px]"
              // src={`${httpsCoreUrl}certificates/leaf.webp`}
              src={leaf3}
              alt="image"
            />
          </div>

          {/* <div className="absolute text-white right-[10%]  top-[15%] w-80 z-40 sm:w-96 sm:right-36 sm:top-[10%] md:w-[470px] md:top-[10%] md:right-[20%] lg:w-[600px] lg:-right-10 lg:top-[30%]  xl:right-0 xl:top-[30%] 2xl:right-0 2xl:top-[30%]">
            <h3 className="font-bold text-4xl text-center sm:text-5xl  md:text-6xl lg:text-left  lg:text-5xl xl:pb-10 xl:text-left ">Сметана</h3>
            <p className="font-normal text-xl text-center sm:text-2xl mt-3 md:text-3xl md:mt-2 lg:text-left lg:text-2xl lg:w-[500px] xl:text-left xl:text-3xl leading-7 ">
              Универсальный продукт для любимых блюд. Источник полезных белков, умеренных жиров и необходимых витаминов.
            </p>
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Element02;
