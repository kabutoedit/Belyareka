import type { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

// ts
import type { SliderELement } from "ts/types/common.interface";
import { imageProps } from "data/mock";
import kefir from "/assets/media/picture/kefir_common.webp";
import wallnut01 from "/assets/media/picture/wallnut01.webp";
import wallnut02 from "/assets/media/picture/wallnut02.webp";
import wallnut03 from "/assets/media/picture/wallnut03.webp";
import nut from "/assets/media/picture/nut.webp";
import leaf02 from "/assets/media/picture/leaf02.webp";
import BROCCOLI_2 from "/assets/media/picture/BROCCOLI_2.webp";
import leaf01 from "/assets/media/picture/leaf01.webp";

const Element03: FC<SliderELement> = ({ activeSlide, durationSlide }) => {
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
          <div className="absolute md:w-[800px] sm:w-[200px] w-[140px] bottom-10 left-72 sm:bottom-12 sm:left-80 -z-10">
            <img
              className="absolute h-[370px] bottom-0 -left-56 sm:h-[350px] sm:-bottom-5 sm:-left-48 lg:h-[400px] xl:h-[500px] xl:-left-40 2xl:h-[580px] 2xl:-bottom-2"
              {...imageProps}
              // src={`${httpsCoreUrl}certificates/kefir_common.webp`}
              src={kefir}
            />
            {!isMobile && <img className="absolute bottom-0 w-40 right-0 md:w-64" src={nut} alt="nut" />}
          </div>

          <div className="relative z-40">
            {!isMobile && <img className="absolute md:w-[160px] md:-right-20 md:top-72 xl:w-44" src={wallnut01} alt="image" />}
            <img
              className="absolute w-[121px] -top-5 -right-10  lg:w-40 xl:w-52 xl:-top-20 xl:right-20 2xl:w-60"
              // src={`${httpsCoreUrl}certificates/leaf02.webp`}
              src={leaf02}
              alt="image"
            />
            <img
              className="absolute w-[111px] right-36 -top-4 sm:right-80 lg:w-32 lg:right-[420px] xl:right-[550px] 2xl:w-36 2xl:right-[600px]"
              // src={`${httpsCoreUrl}certificates/BROCCOLI_2.webp`}
              src={BROCCOLI_2}
              alt="image"
            />
            <img
              className="absolute w-48 -left-28 -top-20 lg:w-56 lg:-top-28 xl:w-60 xl:-left-[120px] 2xl:w-64"
              // src={`${httpsCoreUrl}certificates/wallnut02.webp`}
              src={wallnut02}
              alt="image"
            />
            <img
              className="absolute w-[124px] -left-20 top-72 xl:w-40 xl:-left-28 2xl:-left-20"
              // src={`${httpsCoreUrl}certificates/leaf01.webp`}
              src={leaf01}
              alt="image"
            />
            <img
              className="absolute w-[195px] -left-20 top-[650px] lg:w-56 lg:top-[660px] 2xl:top-[570px] 2xl:w-64 "
              // src={`${httpsCoreUrl}certificates/wallnut03.webp`}
              src={wallnut03}
              alt="image"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Element03;
