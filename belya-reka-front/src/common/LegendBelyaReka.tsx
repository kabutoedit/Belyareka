import { FC } from "react";
import type { ICommonElements } from "ts/types/common.interface";

const LegendBelyaReka: FC<ICommonElements> = ({ className = "", children, styled }) => (
  <h1 style={styled} className={`${className} slm--legend-md font-bold text-hexahrome 2xl:text-5xl text-4xl uppercase leading-12 font-cocosignum`}>
    {children}
  </h1>
);

export default LegendBelyaReka;
