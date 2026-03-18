import type { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

import type { SliderELement } from "ts/types/common.interface";
import { imageProps } from "data/mock";
import dessert_common from "/assets/media/picture/dessert_common.webp";
import APRICOT_1 from "/assets/media/picture/APRICOT_1.webp";
import MELON from "/assets/media/picture/MELON.webp";
import BLUEBERRY_2 from "/assets/media/picture/BLUEBERRY_2.webp";
import BLUEBERRY_3 from "/assets/media/picture/BLUEBERRY_3.webp";
import MINT_3 from "/assets/media/picture/MINT_3.webp";
import APRICOT_2 from "/assets/media/picture/APRICOT_2.webp";
import MINT_2 from "/assets/media/picture/APRICOT_2.webp";
import MINT_1 from "/assets/media/picture/MINT_1.webp";

const Element07: FC<SliderELement> = ({ activeSlide, durationSlide }) => {
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
          <div className="absolute w-[800px] bottom-10 left-6 sm:left-20 md:left-24 lg:left-32 -z-10">
            <img
              className="absolute h-[175px] bottom-2 sm:h-52 md:h-64 lg:h-[300px]"
              {...imageProps}
              // src={`${httpsCoreUrl}certificates/dessert_common.webp`}
              src={dessert_common}
            />
          </div>

          <div className="relative z-40">
            {isMobile && (
              <img
                className="absolute w-[58px] right-5 top-[730px] lg:w-[100px] lg:top-[700px]"
                // src={`${httpsCoreUrl}certificates/APRICOT_1.webp`}
                src={APRICOT_1}
                alt="image"
              />
            )}
            {!isMobile && <img className="absolute w-[58px] right-[20%] lg:w-[350px] bottom-0" src={MELON} alt="image" />}
            <img className="absolute sm:w-[102px] w-[56px] right-2 top-[400px]" src={BLUEBERRY_3} alt="image" />
            <img
              className="absolute sm:w-[158px] w-[80px] sm:-right-10 right-10 top-[185px]"
              // src={`${httpsCoreUrl}certificates/BLUEBERRY_2.webp`}
              src={BLUEBERRY_2}
              alt="image"
            />
            <img
              className="absolute w-[186px] right-[27px] -top-10 md:w-[200px] md:right-64 2xl:right-[700px] "
              // src={`${httpsCoreUrl}certificates/MINT_3.webp`}
              src={MINT_3}
              alt="image"
            />
            <img
              className="absolute w-[113px] left-[69px] -top-7 md:left-72 2xl:w-[140px] 2xl:left-80 "
              // src={`${httpsCoreUrl}certificates/APRICOT_2.webp`}
              src={APRICOT_2}
              alt="image"
            />
            <img
              className="absolute w-[69px] -left-3 top-[51px] 2xl:w-[80px]"
              //  src={`${httpsCoreUrl}certificates/MINT_2.webp`}
              src={MINT_2}
              alt="image"
            />
            <img
              className="absolute w-[122px] -left-16 top-[340px] 2xl:w-40 2xl:-left-20"
              // src={`${httpsCoreUrl}certificates/MINT_1.webp`}
              src={MINT_1}
              alt="image"
            />
            <img
              className="absolute w-[195px] -left-20 top-[750px] lg:w-[250px] lg:top-[700px] lg:-left-28"
              // src={`${httpsCoreUrl}certificates/MINT_2.webp`}
              src={MINT_2}
              alt="image"
            />
          </div>

          {/* <div className="absolute text-white right-[10%]  top-[15%] w-80 z-40 sm:w-96 sm:right-36 sm:top-[10%] md:w-[470px] md:top-[10%] md:right-[20%] lg:w-[600px] lg:right-[150px] lg:top-[30%]  xl:right-0 xl:top-[30%] 2xl:right-0 2xl:top-[30%]">
            <h3 className="font-bold text-4xl text-center sm:text-5xl  md:text-6xl lg:pr-24  lg:text-5xl xl:pb-10 xl:text-left ">Творожный десерт</h3>
            <p className="font-normal text-xl text-center sm:text-2xl mt-3 md:text-3xl md:mt-2  lg:text-2xl lg:w-[500px] xl:text-left xl:text-3xl leading-7 ">
              Любимый творожный десерт стал ещё аппетитнее. Выбирайте вкус своего настроения.{" "}
            </p>
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Element07;
