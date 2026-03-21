import {
  ActiveStep,
  MainContainer,
  StepContainer,
  StepLabel,
  StepLine,
  StepStyle,
  StepWrapper,
  StepsLabelContainer,
} from "common/progressBarElementsCommon";
import { AnimatePresence, motion } from "framer-motion";
import { type FC, useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "usehooks-ts";
import { v4 } from "uuid";

import type { IProgressBar } from "fusion/ts/types/common.interface";

export const ProgressBar: FC<IProgressBar> = ({ className = "", step, button }) => {
  const isMobile = useMediaQuery("(max-width: 768.98px)");

  const [activeStep, setActiveStep] = useState<number>(1);
  const totalSteps = step.length;

  const delay = 10_000;

  const stepsWithId = step.map((step) => ({
    ...step,
    id: v4(),
  }));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (activeStep < totalSteps) {
        setActiveStep(activeStep + 1);
      } else {
        setActiveStep(1);
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [activeStep, totalSteps]);

  const hiddenEndLineStep = stepsWithId.length - 1;

  const lineAnimation = (step: number): "completed" | "animate" | "incomplete" => {
    if (activeStep > step) {
      return "completed";
    } else if (activeStep === step) {
      return "animate";
    } else {
      return "incomplete";
    }
  };

  return (
    <MainContainer className={`${className}`}>
      {!isMobile ? (
        <StepContainer className="step-container">
          {stepsWithId.map(({ id, step, label }, index) => (
            <div className="" key={id}>
              <StepWrapper className="step-wrapper cursor-pointer" onClick={() => setActiveStep(step)}>
                <StepStyle color="#f1f1f1" className="step-style" step={activeStep >= step ? "completed" : "incomplete"}>
                  {activeStep + 1 > step ? <ActiveStep></ActiveStep> : null}
                </StepStyle>
                <StepsLabelContainer>
                  <StepLabel className="step-label text-wrap" key={step}>
                    {label}
                  </StepLabel>
                </StepsLabelContainer>
              </StepWrapper>
              {hiddenEndLineStep !== index && (
                <StepLine $lineanimation={lineAnimation(step)} className={`absolute top-1/2 ml-3 h-1 w-[25%] transition-all`} />
              )}
            </div>
          ))}
        </StepContainer>
      ) : null}

      <div className="md:mt-28 grid md:grid-cols-2 gap-5">
        {stepsWithId.map(({ id, step, description, label }) => (
          <AnimatePresence key={id}>
            {step === activeStep && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.7 }}
                key={id}
                className="col-span-1">
                <span className="md:text-xl text-base mb-2 inline-block font-semibold">
                  {step} Этап {isMobile ? "\u2212 " + label : ""}
                </span>
                <p className="md:text-xl text-base text-balance">{description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        ))}

        {stepsWithId.map(({ id, step, img }) => (
          <AnimatePresence key={id}>
            {step === activeStep && (
              <motion.div
                initial={{ x: !isMobile ? 20 : -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.7 }}
                key={id}
                className="col-span-1 w-full overflow-hidden rounded-lg">
                <LazyLoadImage
                  wrapperClassName="w-full"
                  className="w-full sm:h-[370px] h-60 object-cover rounded-xl"
                  placeholderSrc={img}
                  src={img}
                  effect="blur"
                />
              </motion.div>
            )}
          </AnimatePresence>
        ))}

        {button && (
          <div className="col-span-1 flex gap-5 py-2">
            <button
              onClick={() => setActiveStep(activeStep > 1 ? activeStep - 1 : totalSteps)}
              className="size-16 bg-snow rounded-full button__focus--gray">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.53546 7.99822L9.72266 1.81103L7.95496 0.0433254L-4.3869e-05 7.99822L7.95496 15.9531L9.72266 14.1854L3.53546 7.99822Z"
                  fill="black"
                />
              </svg>
            </button>

            <button
              onClick={() => setActiveStep(activeStep < totalSteps ? activeStep + 1 : 1)}
              className="text-base bg-hexahrome h-16 rounded-full px-16 text-white font-medium button__focus">
              Далее
            </button>
          </div>
        )}
      </div>
    </MainContainer>
  );
};

export default ProgressBar;
