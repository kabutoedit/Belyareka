import type { FC } from "react";

interface iSpace {
  width?: string | number;
  height: string | number;
}

const Space: FC<iSpace> = ({ width = "100%", height }) => {
  return <div style={{ width: width, height }} />;
};

export default Space;
