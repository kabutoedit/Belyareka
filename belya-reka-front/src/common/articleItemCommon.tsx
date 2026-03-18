import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import type { PressCenterItem } from "ts/types/common.interface";

const ArticleItemCommon: FC<PressCenterItem> = (props) => (
  <Link to={`/news/${props.id}`} className="presscenter-item__link no-underline">
    <article className="text-light bg-jetblack col-span-1 relative w-full rounded-xl overflow-hidden h-80 p-8 flex flex-col justify-end cursor-pointer">
      <LazyLoadImage
        wrapperClassName="w-full absolute top-0 left-0 z-10 h-full object-cover  opacity-60"
        className="w-full h-full object-cover opacity-60 bg-jetblack"
        src={props.primary_image}
        placeholderSrc={props.primary_image}
        alt={props.title}
        effect="blur"
      />
      <div className="relative z-20 font-medium">
        <span className="mb-1 block">{props.date}</span>
        <h3 className=" text-lg leading-6 font-bold text-light mb-3">{props.title}</h3>
        <span className="text-sm leading-5 font-medium">{props.subtitle}</span>
      </div>
    </article>
  </Link>
);

export default ArticleItemCommon;
