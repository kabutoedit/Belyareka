import { useInView } from "react-intersection-observer";
import type { FC } from "react";
import LegendBelyaReka from "common/LegendBelyaReka";
import LottieAnimationComponent from "components/LottieComponent";

import ContainerLayout from "layout/ContainerLayout";
import mapLottie from "assets/media/lottie/map.json";
import Space from "common/Space";

const OurIndicatorsSection: FC = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <section className="mt-20">
      <Space height={"100px"} />
      <ContainerLayout>
        <LegendBelyaReka className="font-cocosignum">НАШИ ПОКАЗАТЕЛИ</LegendBelyaReka>

        <div ref={inViewRef}>
          <LottieAnimationComponent loop={true} autoplay={inView} animationData={mapLottie}></LottieAnimationComponent>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OurIndicatorsSection;
