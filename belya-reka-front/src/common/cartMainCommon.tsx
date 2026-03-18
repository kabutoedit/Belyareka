import LottieAnimationComponent from "components/LottieComponent";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
import type { ICompanyCartMain } from "ts/types/common.interface";

const CartMainCommon: FC<ICompanyCartMain> = ({ lottieMock: lottieAnim, className, title, descr }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div className={`${className ?? ""} cart__item px-8 py-8 flex flex-col gap-y-5`}>
      <div ref={inViewRef} className="carts__img flex justify-center">
        <LottieAnimationComponent width={200} height={200} animationData={lottieAnim} autoplay={inView} loop={true} />
      </div>
      <h3 className="cart__title text-2xl font-semibold">{title}</h3>
      <p className="cart__descr leading-6 br--text-xs">{descr}</p>
    </div>
  );
};

export default CartMainCommon;
