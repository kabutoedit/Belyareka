import type { FC } from "react";
import AchievItem from "common/achievItem";

// Lottie
import geoLottie from "assets/media/lottie/data_geo.json";
import lugLottie from "assets/media/lottie/data_lug.json";
import milkLottie from "assets/media/lottie/data_milk.json";
import peoplesLottie from "assets/media/lottie/data_peoples.json";
import teleshkiLottie from "assets/media/lottie/data_teleshki.json";
import tractorLottie from "assets/media/lottie/data_tractor.json";
import cowLottie from "assets/media/lottie/data_cow.json";
import ContainerLayout from "layout/ContainerLayout/index";

const achievInfo = [
  {
    lottieAnim: peoplesLottie,
    nums: 468,
    descr: "людей задействованы в работе",
    suffix: undefined,
    char: 95,
  },
  {
    lottieAnim: geoLottie,
    nums: 10_000,
    descr: "регионов продаж",
    suffix: undefined,
    char: 90,
  },
  {
    lottieAnim: cowLottie,
    nums: 15_000,
    descr: "Столько коров дают нам молоко",
    suffix: undefined,
    char: 80,
  },
  {
    lottieAnim: tractorLottie,
    nums: 200,
    descr: "единиц техники",
    suffix: undefined,
    char: 87,
  },
  {
    lottieAnim: lugLottie,
    nums: 8_000,
    descr: "гектаров выпасной земли",
    suffix: undefined,
    char: 79,
  },
  {
    lottieAnim: teleshkiLottie,
    nums: 8_000,
    descr: "магазинов",
    suffix: undefined,
    char: 85,
  },
  {
    lottieAnim: milkLottie,
    nums: 150,
    descr: "литров молока",
    suffix: "Тонн",
    char: 97,
  },
];

const AchievBlockSection: FC = () => (
  <ContainerLayout>
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10">
      {achievInfo?.map((achive) => (
        <AchievItem
          className="col-span-1"
          key={achive.descr}
          lottie={achive.lottieAnim}
          count={achive.nums}
          description={achive.descr}
          suffix={achive.suffix}
        />
      ))}
    </div>
    <div className="mt-20 mb-10">
      <p className="text-3xl text-gray-500 text-center">Написать наши показатели и показатели партнёров​</p>
    </div>
  </ContainerLayout>
);

export default AchievBlockSection;
