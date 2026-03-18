import type { FC } from "react";
import LegendBelyaReka from "common/LegendBelyaReka";
import ProgressBar from "components/ProgressBarAboutSection";

// mockdata
import { steps } from "data/mock";

const ProductionCycle: FC = () => {
  return (
    <main className="mt-28">
      <LegendBelyaReka>ЦИКЛ ПРОИЗВОДСТВА</LegendBelyaReka>
      <ProgressBar className="mt-10" step={steps} button={true} />
    </main>
  );
};

export default ProductionCycle;
