import { FC } from "react";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import type { IMainNewsCommon } from "ts/types/common.interface";

const NewsMainCommon: FC<IMainNewsCommon> = ({ id, className, img, title, description, styled }) => (
  <NavLink
    to={`/news/${id}`}
    style={styled}
    className={`${className ?? ""} flex flex-col overflow-hidden rounded-2xl no-underline transition-transform hover:scale-[1.02]`}>
    <LazyLoadImage className="w-full h-[220px] object-cover" placeholderSrc={img} src={img} alt="image" />
    <div className="p-5 bg-snow h-full">
      <h4 className="font-bold text-lg leading-5 mb-3 text-jetblack">{title}</h4>
      <p className="leading-5 text-jetblack">{description}</p>
    </div>
  </NavLink>
);

export default NewsMainCommon;
