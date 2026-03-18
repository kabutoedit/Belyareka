import type { FC } from "react";
import type { SliderELement } from "ts/types/common.interface";
import { useMediaQuery } from "usehooks-ts";

interface DynamicSlideProps extends SliderELement {
  productImageDesktop?: string;
  productImageMobile?: string;
}

const DynamicSlide: FC<DynamicSlideProps> = ({ productImageDesktop, productImageMobile }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const productImage = isMobile && productImageMobile ? productImageMobile : productImageDesktop;

  return (
    <div className="w-full h-[100vh] z-30 absolute inset-0">
      {productImage && (
        <img className="w-full h-full object-cover object-[20%_bottom] 2xl:object-[center_bottom]" src={productImage} alt="Slide" draggable="false" />
      )}
    </div>
  );
};

export default DynamicSlide;
