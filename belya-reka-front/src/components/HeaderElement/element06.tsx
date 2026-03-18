import type { FC } from "react";

import { useMediaQuery } from "usehooks-ts";

import { AnimatePresence, motion } from "framer-motion";
import type { SliderELement } from "ts/types/common.interface";
import { imageProps } from "data/mock";
import chalap_common from "/assets/media/picture/chalap_common.webp";
import kuurdak from "/assets/media/picture/kuurdak.webp";
import faadsflk34 from "/assets/media/picture/faadsflk34.webp";
import LEAF_1 from "/assets/media/picture/LEAF_1.webp";
import LEAF_2_1 from "/assets/media/picture/LEAF_2.1.webp";
import LEAF_3 from "/assets/media/picture/LEAF_3.webp";
import LEAF_4 from "/assets/media/picture/LEAF_4.webp";
import LEAF_5 from "/assets/media/picture/LEAF_5.webp";

const Element06: FC<SliderELement> = ({ activeSlide, durationSlide }) => {
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
          <div className="absolute w-[800px] bottom-0 left-8 sm:left-28 ">
            <img
              className="absolute h-[370px] bottom-10 left-0 xl:h-[480px] 2xl:h-[550px]"
              {...imageProps}
              // src={`${httpsCoreUrl}certificates/chalap_common.webp`}
              src={chalap_common}
            />
            {!isMobile && (
              <img
                className="absolute left-96 bottom-10 h-[200px] xl:left-[500px] 2xl:left-[600px] 2xl:h-[250px] -z-10"
                // src={`${httpsCoreUrl}certificates/kuurdak.webp`}
                src={kuurdak}
                {...imageProps}
              />
            )}
            {!isMobile && (
              <img
                className="absolute left-[350px] bottom-11 h-16 xl:left-[380px] xl:bottom-14 2xl:h-24 2xl:left-[420px]"
                // src={`${httpsCoreUrl}certificates/faadsflk34.webp`}
                src={faadsflk34}
                {...imageProps}
              />
            )}
          </div>
          {/* Parallax */}
          <div className="relative z-40">
            <img
              className="absolute w-[114px] right-0 top-[730px] xl:top-[680px] xl:w-44 xl:right-10 2xl:w-60 2xl:top-[640px]"
              // src={`${httpsCoreUrl}certificates/LEAF_1.webp`}
              src={LEAF_1}
              alt="image"
            />
            <img className="absolute w-[123px] right-0 top-64 xl:right-20 xl:top-80" src={LEAF_2_1} alt="image" />
            <img
              className="absolute w-[77px] right-[148px] top-56 xl:right-[700px] xl:w-24 2xl:w-28 2xl:top-48"
              // src={`${httpsCoreUrl}certificates/LEAF_3.webp`}
              src={LEAF_3}
              alt="image"
            />
            <img className="absolute w-[121px] -left-12 top-[204px]" src={LEAF_4} alt="image" />
            <img
              className="absolute w-[106px] -left-3 top-[700px] 2xl:w-52 2xl:top-[650px] 2xl:-left-10"
              // src={`${httpsCoreUrl}certificates/LEAF_5.webp`}
              src={LEAF_5}
              alt="image"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Element06;
