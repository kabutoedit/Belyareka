import type { ICommonElements } from "ts/types/common.interface";
import { Toaster } from "react-hot-toast";

const ContainerLayout = ({ children, className = "" }: ICommonElements) => {
  return (
    <div className={`custom-container ${className} mac:px-[500px]`}>
      {children}
      <Toaster position="top-right" />
    </div>
  );
};
export default ContainerLayout;
