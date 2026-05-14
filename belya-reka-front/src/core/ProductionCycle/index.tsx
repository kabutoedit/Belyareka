// import type { FC } from "react";
// import LegendBelyaReka from "common/LegendBelyaReka";
// import ProgressBar from "components/ProgressBarAboutSection";

// // mockdata
// import { steps } from "data/mock";

// const ProductionCycle: FC = () => {
//   return (
//     <main className="mt-28">
//       <LegendBelyaReka>ЦИКЛ ПРОИЗВОДСТВА</LegendBelyaReka>
//       <ProgressBar className="mt-10" step={steps} button={true} />
//     </main>
//   );
// };

// export default ProductionCycle;

import { type FC } from "react";
import LegendBelyaReka from "common/LegendBelyaReka";
import ProgressBar from "components/ProgressBarAboutSection";
import { useTranslation } from "react-i18next";

const ProductionCycle: FC = () => {
  const { t } = useTranslation();

  // Получаем массив этапов из JSON-файла текущего языка
  const localizedSteps = t("production.steps_list", { returnObjects: true }) as Array<{
    step: number;
    label: string;
    description: string;
    img: string;
  }>;

  return (
    <main className="mt-28">
      <LegendBelyaReka>{t("production.title")}</LegendBelyaReka>

      {/* Проверяем, что данные — это массив, прежде чем рендерить */}
      {Array.isArray(localizedSteps) && <ProgressBar className="mt-10" step={localizedSteps} button={true} />}
    </main>
  );
};

export default ProductionCycle;
