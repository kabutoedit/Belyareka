import React, { useRef, useEffect, useState } from "react";
import Lottie, { AnimationItem } from "lottie-web";
import { useInView } from "react-intersection-observer";

type LottieAnimationProps = {
  animationData: object;
  loop?: boolean | number;
  autoplay?: boolean;
  speed?: number;
  width?: number;
  height?: number;
  onLoaded?: () => void;
  onError?: (error: Error) => void;
};

const LottieAnimationComponent: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  speed = 1,
  width,
  height,
  onLoaded,
  onError,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [animationInstance, setAnimationInstance] = useState<AnimationItem | null>(null);
  const { ref: intersectionObserverRef, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Очистите контейнер перед созданием анимации
    containerRef.current.innerHTML = "";

    let anim: AnimationItem | null = null;

    // Если animationData - объект, использовать его напрямую
    if (isInView) {
      anim = Lottie.loadAnimation({
        container: containerRef.current!,
        renderer: "svg",
        loop,
        autoplay,
        animationData,
      });

      setAnimationInstance(anim);

      if (anim) {
        anim.setSpeed(speed);

        anim.addEventListener("DOMLoaded", () => {
          onLoaded && onLoaded();
        });

        anim.addEventListener("error", () => {
          onError && onError(new Error("Failed to load animation data."));
        });

        anim.addEventListener("config_ready", () => {});
      }
    }

    // Не вызывайте destroy, если анимация не была успешно создана
    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [animationData, loop, autoplay, speed, onLoaded, onError, isInView]);

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  useEffect(() => {
    if (!isInView && animationInstance) {
      animationInstance.stop();
    }
  }, [isInView, animationInstance]);

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        intersectionObserverRef(node);
      }}
      style={{ width, height }}
    />
  );
};

export default LottieAnimationComponent;
