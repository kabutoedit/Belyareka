import { FC } from "react";
import { Variants, motion } from "framer-motion";
import type { IProductCatalog } from "ts/types/common.interface";

interface IBRekaDescriptionCommon {
  item: IProductCatalog;
  className: string;
  animation: Variants;
  textColor?: string;
}

const titleType = ["объем", "жиры", "хранения"];
const titleSuffixProps = ["г", "%", "суток"];

const textStyleFN = (color?: string) => (color ? `*:text-[#ffffff] ` : "*:text-jetblack ");

const BelyaRekaDescriptionCommon: FC<IBRekaDescriptionCommon> = ({ item, className, animation, textColor }) => (
  <div className={"product-item__descr-side w-full " + textStyleFN(textColor) + className}>
    <motion.h4 variants={animation} className="product-item__headline">
      {item.title}
    </motion.h4>

    <motion.div variants={animation} className="flex gap-x-9 mb-9" style={{ marginTop: "20px" }}>
      {[item.props_product?.volume, item.props_product?.weight, item.props_product?.life_cycle]?.map((item, index) => (
        <motion.div key={index}>
          <motion.span className="font-light mac:text-lg text-base">{titleType[index]}</motion.span>
          <motion.p className="mac:text-3xl text-2xl">
            {item} {titleSuffixProps[index]}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>

    <motion.span variants={animation} className="product-item__subtitle font-medium text-lg block mac:text-lg">
      Температура хранения
    </motion.span>

    <motion.span variants={animation} className="font-normal text-2xl block text-jetblack mac:text-3xl">
      {item.props_product?.temperature_keep}
    </motion.span>
  </div>
);

export default BelyaRekaDescriptionCommon;
