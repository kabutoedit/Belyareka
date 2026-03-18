import type { FC } from "react";

import CountUp from "react-countup";
import LottieAnimationComponent from "components/LottieComponent";
import { useInView } from "react-intersection-observer";
import type { achievItem } from "ts/types/common.interface";

const AchievItem: FC<achievItem> = ({ className = "", lottie, count, description, suffix }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div className={`${className} achiev__block`}>
      <div className="flex flex-col md:items-stretch items-center md:gap-y-2 gap-y-0">
        <div ref={inViewRef} className="achiev__lottie-anim w-32 min-h-20">
          <LottieAnimationComponent animationData={lottie} loop={false} autoplay={inView} />
        </div>
        <h3 className="font-bold text-4xl text-hexahrome">
          <CountUp duration={5} separator=" " end={count} suffix={undefined} scrollSpyOnce={true} enableScrollSpy={true} />
          {suffix && <span className="ml-2">{suffix}</span>}
        </h3>

        <span className="achiev__subject text-center md:text-left text-lg 2xl:font-normal font-bold first-letter:capitalize text-jetblack">
          {description}
        </span>
      </div>
    </div>
  );
};

export default AchievItem;
