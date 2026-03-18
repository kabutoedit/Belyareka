import { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import type { IValuesCompany } from "ts/types/common.interface";

const ValueItemCommon: FC<IValuesCompany> = ({ className = "", styled, img, title, descr }) => {
  const [imageSrc, setImageSrc] = useState(false);

  const handleError = () => {
    setImageSrc(true); // Устанавливаем альтернативное изображение
  };

  return (
    <div className={`${className}`} style={styled}>
      <div className="flex flex-col gap-5">
        <div className="w-full h-full">
          {!imageSrc && (
            <LazyLoadImage
              wrapperClassName="w-full"
              className="w-full max-w-full h-[272px] rounded-xl object-cover object-center"
              src={img}
              placeholderSrc={img}
              alt="Image not found"
              effect="blur"
              onError={handleError}
            />
          )}
        </div>
        <h3 className="text-2xl font-bold text-hexahrome">{title}</h3>
        <p className=" text-jetblack font-normal text-lg leading-7">{descr}</p>
      </div>
    </div>
  );
};

export default ValueItemCommon;
