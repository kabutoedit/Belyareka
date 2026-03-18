import type { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";

import type { SliderELement } from "ts/types/common.interface";
import { imageProps } from "data/mock";
import strawberry from "/assets/media/picture/strawberry49rfa42.webp";
import biorkefir_common from "/assets/media/picture/biorkefir_common.webp";
import freshmint from "/assets/media/picture/freshmint.webp";
import juniperberrieslevitatewhitebackground from "/assets/media/picture/juniper-berries-levitate-white-background.webp";
import leaf940 from "/assets/media/picture/leaf940.webp";
import leaf0023 from "/assets/media/picture/leaf0023.webp";

const Element04: FC<SliderELement> = ({ activeSlide, durationSlide }) => {
  return (
    <AnimatePresence>
      {activeSlide && (
        <motion.div
          initial={{ x: durationSlide, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          exit={{ opacity: 0, transition: { delay: 0.6 } }}
          className="w-full h-[90vh] z-30">
          <div className="absolute w-[800px] bottom-10 left-10 sm:left-80 md:left-96 lg:left-[300px] xl:left-[160px] -z-10">
            <img
              className="absolute h-[300px] left-0 bottom-0 sm:h-[340px] lg:h-96 xl:h-[480px] 2xl:h-[550px] 2xl:-bottom-3"
              {...imageProps}
              // src={`${httpsCoreUrl}certificates/biorkefir_common.webp`}
              src={biorkefir_common}
            />
          </div>

          <div className="relative z-40">
            <img
              className="absolute w-[82px]  -right-10 top-[710px] md:-right-10 md:w-[100px] 2xl:w-40 2xl:top-[610px]"
              // src={`${httpsCoreUrl}certificates/freshmint.webp`}
              src={freshmint}
              alt="image"
            />
            <img
              className="absolute w-[82px] right-16 top-[300px] 2xl:w-24 2xl:top-[400px]"
              // src={`${httpsCoreUrl}certificates/juniper-berries-levitate-white-background.webp`}
              src={juniperberrieslevitatewhitebackground}
              alt="image"
            />
            <img
              className="absolute w-[103px] right-14 top-5 2xl:w-40"
              // src={`${httpsCoreUrl}certificates/leaf940.webp`}
              src={leaf940}
              alt="image"
            />
            <img
              className="absolute w-[82px] left-2 top-36 2xl:w-24 2xl:top-20"
              // src={`${httpsCoreUrl}certificates/leaf0023.webp`}
              src={leaf0023}
              alt="image"
            />
            <img
              className="absolute w-40 top-[650px] -left-20 2xl:w-60 2xl:top-[600px] 2xl:-left-32"
              // src={`${httpsCoreUrl}certificates/strawberry49rfa42.webp`}
              src={strawberry}
              alt="image"
            />
          </div>

          {/* <div className="absolute text-white right-[10%]  top-[15%] w-80 z-40 sm:w-96 sm:right-36 sm:top-[10%] md:w-[470px] md:top-[10%] md:right-[20%] lg:w-[600px] lg:-right-10 lg:top-[30%]  xl:right-0 xl:top-[30%] 2xl:right-0 2xl:top-[30%]">
            <h3 className="font-bold text-4xl text-center sm:text-5xl  md:text-6xl lg:text-left  lg:text-5xl xl:pb-10 xl:text-left ">Биокефир</h3>
            <p className="font-normal text-xl text-center sm:text-2xl mt-3 md:text-3xl md:mt-2 lg:text-left lg:text-2xl lg:w-[500px] xl:text-left xl:text-3xl leading-7 ">
              Сочные ягоды превратят полезный напиток в невероятно вкусный коктейль. Одобрено детьми и взрослыми!
            </p>
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Element04;
