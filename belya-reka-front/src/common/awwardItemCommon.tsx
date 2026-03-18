import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import type { ICommonItems } from "ts/types/common.interface";

const AwwardItemCommon: FC<ICommonItems> = ({ awwardTitle, awwardDate, awwardContent, awwardImg }) => {
  return (
    <div className="awward__block">
      <div className="grid md:grid-cols-[220px,_1fr] gap-x-10 h-full">
        <div className="awward__block_image bg-silver h-full">
          <LazyLoadImage className="w-full min-h-[200px]" src={awwardImg} placeholderSrc={awwardImg} effect="blur" alt="awward-image" />
        </div>

        <div className="2xl:p-10 2xl:pl-0 p-5">
          <div className="awward__block_content_inner">
            <h4 className="2xl:text-2xl text-lg font-bold text-jetblack">{awwardTitle}</h4>
            {awwardDate && <span className="text-ghost awward__block_date mt-1 mb-5 block text-sm ">{awwardDate}</span>}
            <p className="text-jetblack awward__block_descr font-normal 2xl:text-base text-lg">{awwardContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwwardItemCommon;
