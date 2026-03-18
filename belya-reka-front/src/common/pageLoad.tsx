import type { FC } from "react";
import LottieAnimationComponent from "components/LottieComponent";

import loadingLottie from "assets/media/lottie/lotties.json";

const PageLoad: FC = () => (
  <div className="bg-hexahrome w-full h-dvh fixed z-50 flex justify-center items-center">
    <LottieAnimationComponent width={200} height={200} animationData={loadingLottie} loop={true} autoplay={true} />
  </div>
);

export default PageLoad;
