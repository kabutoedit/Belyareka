import type { FC } from "react";

import { useMediaQuery } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import type { SliderELement } from "ts/types/common.interface";
import { imageProps } from "data/mock";
import byshtak from "/assets/media/picture/byshtak.webp";
import CAKE from "/assets/media/picture/CAKE.webp";
import tvorog_common from "/assets/media/picture/tvorog_common.webp";
import MINT_3 from "/assets/media/picture/MINT_3.8.webp";
import STRABERRY_2 from "/assets/media/picture/STRABERRY_2.8.webp";
import MINT_2 from "/assets/media/picture/MINT_2.8.webp";
import STRABERRY_1 from "/assets/media/picture/STRABERRY_1.2.webp";

const Element09: FC<SliderELement> = ({ activeSlide, durationSlide }) => {
  const isIpad = !useMediaQuery("(max-width: 1024px)"); // for adaptive

  return (
    <div className="w-full min-h-screen z-30">
      <AnimatePresence>
        {activeSlide && (
          <motion.div
            initial={{ x: durationSlide, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            exit={{ opacity: 0, transition: { delay: 0.6 } }}
            className="absolute h-[90vh] md:w-[650px] lg:w-[700px] xs:w-[450px] w-[420px] xs:left-20 left-10 bottom-10 md:left-28 lg:left-48 -z-10">
            <img
              className={"absolute bottom-0 " + " md:h-[300px] h-[200px] lg:h-[310px] xs:h-[200px]"}
              {...imageProps}
              // src={`${httpsCoreUrl}certificates/byshtak.webp`}
              src={byshtak}
              alt=""
            />
            {/*  md:right-0 lg:right-[-8%] h-[300px] right-0 xs:h-[300px] md:h-[450px] lg:h-[640px] z-10 bottom-0 */}
            <img
              className="absolute bottom-0 h-[300px] md:h-[400px] right-0"
              // src={`${httpsCoreUrl}certificates/CAKE.webp`}
              src={CAKE}
              {...imageProps}
            />
            {isIpad && (
              <img
                className="absolute bottom-[40px] w-[390px] -right-[53%]"
                // src={`${httpsCoreUrl}certificates/tvorog_common.webp`}
                src={tvorog_common}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Parallax */}
      {activeSlide && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={{ opacity: 0, transition: { delay: 0.6 } }}
          className="relative z-40">
          <img
            className="w-28 absolute right-44 top-96"
            //  src={`${httpsCoreUrl}certificates/MINT_3.8.webp`}
            src={MINT_3}
            alt="image"
          />
          <img
            className="md:w-28 w-20 absolute md:right-28 right-10 md:top-32 top-10"
            // src={`${httpsCoreUrl}certificates/STRABERRY_2.8.webp`}
            src={STRABERRY_2}
            alt="image"
          />
          <img
            className="w-40 absolute left-[650px] top-0"
            //  src={`${httpsCoreUrl}certificates/MINT_2.8.webp`}
            src={MINT_2}
            alt="image"
          />
          <img
            className="md:w-40 w-24 absolute md:left-44 left-8 top-20"
            //  src={`${httpsCoreUrl}certificates/STRABERRY_1.2.webp`}
            src={STRABERRY_1}
            alt="image"
          />
        </motion.div>
      )}

      {/* {activeSlide && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={{ opacity: 0, transition: { delay: 0.6 } }}
          className="absolute text-white right-[10%] top-[15%] w-80 z-40 sm:w-96 sm:right-36 sm:top-[10%] md:w-[470px] md:top-[10%] md:right-[20%] lg:w-[800px] lg:right-[150px] lg:top-[30%]  xl:right-0 xl:top-[30%] 2xl:right-0 2xl:top-[30%]">
          <h3 className="font-bold text-4xl text-center sm:text-5xl  md:text-6xl  lg:pr-24 lg:text-5xl xl:pb-10 xl:text-left ">Творог</h3>
          <p className="font-normal text-xl text-center sm:text-2xl mt-3 md:text-3xl md:mt-2  lg:text-2xl lg:w-[600px] xl:text-left xl:text-3xl leading-7 ">
            С ним ваши кулинарные эксперименты станут шедеврами. А нужно ли говорить о пользе натурального продукта?
          </p>
        </motion.div>
      )} */}
    </div>
  );
};

export default Element09;
