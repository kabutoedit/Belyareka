import type { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";
import type { SliderELement } from "ts/types/common.interface";
import { imageProps } from "data/mock";
import butter_common from "/assets/media/picture/butter_common.webp";
import PANCAKES from "/assets/media/picture/PANCAKES.webp";
import BUTTERFLY_4 from "/assets/media/picture/BUTTERFLY_4.webp";
import STRABERRY_3 from "/assets/media/picture/STRABERRY_3.webp";
import BUTTERFLY_3 from "/assets/media/picture/BUTTERFLY_3.webp";
import BUTTERFLY_2 from "/assets/media/picture/BUTTERFLY_2.webp";
import STRABERRY_2 from "/assets/media/picture/STRABERRY_2.webp";
import BUTTERFLY_1 from "/assets/media/picture/BUTTERFLY_1.webp";
import STRABERRY_1 from "/assets/media/picture/STRABERRY_1.1.webp";

const Element08: FC<SliderELement> = ({ activeSlide, durationSlide }) => (
  <AnimatePresence>
    {activeSlide && (
      <motion.div
        initial={{ x: durationSlide, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        exit={{ opacity: 0, transition: { delay: 0.6 } }}
        className="w-full h-[90vh] z-30 ">
        <div className="absolute w-[800px] bottom-10 left-0 sm:left-28 lg:left-36 -z-10">
          <>
            <img
              className="absolute h-[168px] bottom-3 -left-4 sm:h-52 md:h-72 lg:h-[300px]"
              {...imageProps}
              // src={`${httpsCoreUrl}certificates/butter_common.webp`}
              src={butter_common}
            />
            <img
              className="absolute h-[155px] -bottom-0 left-64 sm:left-80 md:h-52 md:left-[450px] lg:h-[250px] lg:left-[550px]"
              // src={`${httpsCoreUrl}certificates/PANCAKES.webp`}
              src={PANCAKES}
              {...imageProps}
            />
          </>
        </div>
        {/* Parallax */}
        <div className="relative z-40">
          <img
            className="absolute w-[98px] -right-5 top-[720px] 2xl:w-[200px] 2xl:top-[620px]"
            // src={`${httpsCoreUrl}certificates/BUTTERFLY_4.webp`}
            src={BUTTERFLY_4}
            alt="image"
          />
          <img
            className="absolute w-[102px] -right-5 top-[345px] 2xl:w-[200px] 2xl:top-[270px]"
            // src={`${httpsCoreUrl}certificates/STRABERRY_3.webp`}
            src={STRABERRY_3}
            alt="image"
          />
          <img
            className="absolute w-[111px] -right-14 top-0 2xl:w-[200px] 2xl:right-28"
            // src={`${httpsCoreUrl}certificates/BUTTERFLY_3.webp`}
            src={BUTTERFLY_3}
            alt="image"
          />
          <img
            className="absolute w-[94px] left-[135px] top-[29px] 2xl:w-[200px] 2xl:left-80 "
            // src={`${httpsCoreUrl}certificates/BUTTERFLY_2.webp`}
            src={BUTTERFLY_2}
            alt="image"
          />
          <img
            className="absolute w-[121px] -left-8 top-[21px] 2xl:w-[200px] 2xl:-left-16"
            // src={`${httpsCoreUrl}certificates/STRABERRY_2.webp`}
            src={STRABERRY_2}
            alt="image"
          />
          <img
            className="absolute w-[112px] left-[31px] top-[275px] 2xl:w-[160px]"
            // src={`${httpsCoreUrl}certificates/BUTTERFLY_1.webp`}
            src={BUTTERFLY_1}
            alt="image"
          />
          <img
            className="absolute w-[103px] -left-12 top-[700px] 2xl:w-[200px] 2xl:top-[600px] 2xl:-left-24"
            // src={`${httpsCoreUrl}certificates/STRABERRY_1.1.webp`}
            src={STRABERRY_1}
            alt="image"
          />
        </div>

        {/* <div className="absolute text-white right-[10%]  top-[15%] w-80 z-40 sm:w-96 sm:right-36 sm:top-[10%] md:w-[470px] md:top-[10%] md:right-[20%] lg:w-[600px] lg:right-[150px] lg:top-[30%]  xl:right-0 xl:top-[30%] 2xl:right-0 2xl:top-[30%]">
          <h3 className="font-bold text-4xl text-center sm:text-5xl  md:text-6xl  lg:pr-24 lg:text-5xl xl:pb-10 xl:text-left ">Сливочное масло</h3>
          <p className="font-normal text-xl text-center sm:text-2xl mt-3 md:text-3xl md:mt-2  lg:text-2xl lg:w-[500px] xl:text-left xl:text-3xl leading-7 ">
            Натуральное сливочное масло – незаменимый помощник в приготовлении вкусностей для всей семьи.{" "}
          </p>
        </div> */}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Element08;
