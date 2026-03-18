import styled from "styled-components";
import type { StepContainerProps, StepStyleProps } from "ts/types/common.interface";

export const ActiveStep = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50px;
  background-color: #00afef;
  transition: all 1s ease 0s;
`;

export const MainContainer = styled.main`
  width: 100%;
  max-width: 100%;
`;
export const StepContainer = styled.div<StepContainerProps>`
  display: flex;
  justify-content: space-between;
  transition: all 1s ease 0s;
  position: relative;

  &:before {
    background: #eee;
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    transition: width 1s ease 0s;
  }
  &:after {
    content: "";
    position: absolute;
    background: #00afef;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    //
    transform: translateY(-50%);
    left: 0;
  }
`;

const getLineAnimation = (variant: "completed" | "animate" | "incomplete") => {
  if (variant === "animate") {
    return "animation: widthFull 10s linear forwards;";
  } else {
    return "";
  }
};

export const StepLine = styled.div<{ $lineanimation: "completed" | "animate" | "incomplete" }>`
  transition: all 1s ease 0s;

  &:before {
    content: "";
    background: #eee;
    height: 4px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: width 1s ease 0s;
  }

  &:after {
    content: "";
    background: ${({ $lineanimation }) => ($lineanimation === "completed" || $lineanimation === "animate" ? "#00afef" : "#eee")};
    height: 4px;
    width: ${({ $lineanimation }) => ($lineanimation ? "100%" : "0%")};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    ${({ $lineanimation }) => getLineAnimation($lineanimation)}

    @keyframes widthFull {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  }
`;

export const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
  transition: all 0.5s ease 0s;

  &:last-child {
    transform: translateX(4px);
  }
`;

export const StepStyle = styled.div<StepStyleProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : "#CCCCCC")};
  border: 3px solid #f1f1f1;
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  transition: all 0.4s ease 0s;
  align-items: center;
`;

export const StepsLabelContainer = styled.div`
  width: max-content;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: all 0.4s ease 0s;

  @media (max-width: 1025.99px) {
    width: auto;
  }
`;

export const StepLabel = styled.span`
  font-size: 15px;
  line-height: 17px;
  color: #aaa;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
