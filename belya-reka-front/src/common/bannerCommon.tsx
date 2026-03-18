import { FC } from "react";
import type { IBannerCommon } from "ts/types/common.interface";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerCommon: FC<IBannerCommon> = ({ banner, bannerTitle, bannerDescription, className = "" }) => (
  <div className={`page__info_banner bg-gray-200 relative ${className} `}>
    <LazyLoadImage className="absolute top-0 left-0 object-cover" src={banner} placeholderSrc={banner} width="100%" height="100%" effect="blur" />
    {/* <LazyLoadImage className="absolute top-0 left-0 object-cover" src={banner} placeholderSrc={banner} width="100%" height="460" effect="blur" /> */}

    <div className="custom-container pt-32 relative z-10 mac:px-[500px]">
      <h1 className="2xl:text-6xl xl:text-5xl md:text-4xl text-4xl font-bold font-inter text-white mb-5">{bannerTitle}</h1>
      {bannerDescription}
    </div>
  </div>
);

export default BannerCommon;
