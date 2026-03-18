import type { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";

import type { SliderELement } from "ts/types/common.interface";
import airain__common from "/assets/media/picture/airain__common.webp";
import SAUSAGE_1 from "/assets/media/picture/SAUSAGE_1.webp";
import SAUSAGE_2 from "/assets/media/picture/SAUSAGE_2.webp";
import GREEN_3 from "/assets/media/picture/GREEN_3.webp";
import REDIS_1 from "/assets/media/picture/REDIS_1.webp";
import GREEN_2 from "/assets/media/picture/GREEN_2.webp";
import GREEN_1 from "/assets/media/picture/GREEN_1.webp";

const Element10: FC<SliderELement> = ({ activeSlide, durationSlide }) => (
  <AnimatePresence>
    {activeSlide && (
      <motion.div
        initial={{ x: durationSlide, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{ opacity: 0, transition: { delay: 0.6 } }}
        className="w-full h-[90vh] z-30">
        <div className={"absolute bottom-0" + " w-[500px] md:w-[700px] lg:w-[800px] 2xl:w-[1000px] left-44"}>
          <img
            className="w-full"
            // src={`${httpsCoreUrl}certificates/airain__common.webp`}
            src={airain__common}
            alt="airan"
          />
        </div>

        {activeSlide && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ opacity: 0, transition: { delay: 0.6 } }}
            className="relative z-40">
            <img
              className="w-52 absolute right-10 top-[900px]  md:top-[800px]"
              // src={`${httpsCoreUrl}certificates/SAUSAGE_2.webp`}
              src={SAUSAGE_2}
              alt="image"
            />
            <img
              className={"lg:w-44 md:w-36 xs:w-24 w-20 " + " -right-8 md:-right-12 top-[400px] " + " absolute"}
              // src={`${httpsCoreUrl}certificates/GREEN_3.webp`}
              src={GREEN_3}
              alt="image"
            />
            <img
              className={"lg:w-40 xs:w-20 w-16  " + " right-20 top-20 " + " absolute"}
              // src={`${httpsCoreUrl}certificates/REDIS_1.webp`}
              src={REDIS_1}
              alt="image"
            />
            <img
              className={"absolute " + "xl:right-[41%] right-[1%] xl:-top-3 -top-[30px] xs:right-[3%]" + " md:w-32 w-[92px] "}
              // src={`${httpsCoreUrl}certificates/GREEN_2.webp`}
              src={GREEN_2}
              alt="image"
            />
            <img
              className={"absolute  " + " -top-10  md:left-[35%] left-[100px] " + " md:w-40 w-[110px]  "}
              // src={`${httpsCoreUrl}certificates/SAUSAGE_1.webp`}
              src={SAUSAGE_1}
              alt="image"
            />
            <img
              className={"lg:w-60 w-20 xs:w-28 " + " lg:-left-20 -left-12 top-10 " + " absolute"}
              // src={`${httpsCoreUrl}certificates/GREEN_1.webp`}
              src={GREEN_1}
              alt="image"
            />
            <img
              className="w-44 absolute -left-28 top-[750px]"
              // src={`${httpsCoreUrl}certificates/REDIS_1.webp`}
              src={REDIS_1}
              alt="image"
            />
          </motion.div>
        )}

        {/* <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={{ opacity: 0, transition: { delay: 0.6 } }}
          className="absolute text-white right-[10%] top-[15%] w-80 z-40 sm:w-96 sm:right-36 sm:top-[10%] md:w-[470px] md:top-[10%] md:right-[20%] lg:w-[800px] lg:right-[150px] lg:top-[30%]  xl:right-0 xl:top-[30%] 2xl:right-0 2xl:top-[30%]">
          <h3 className="font-bold text-4xl text-center sm:text-5xl  md:text-6xl  lg:pr-24 lg:text-5xl xl:pb-10 xl:text-left ">Айран</h3>
          <p className="font-normal text-xl text-center sm:text-2xl mt-3 md:text-3xl md:mt-2  lg:text-2xl lg:w-[600px] xl:text-left xl:text-3xl leading-7 text-balance">
            Молочная нежность с лёгкими кисленькими нотками - это любовь и отличное самочувствие с первого глотка.
          </p>
        </motion.div> */}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Element10;
