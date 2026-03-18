import { motion } from "framer-motion";
import { forwardRef, memo } from "react";
// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const Logo = `${CDN_BASE}/assets/media/svg/logo.svg`;

interface ILocalNav {
  close: (args: number) => void;
  index: number;
  className?: string;
}

const NavAssortiment = memo(
  forwardRef<HTMLDivElement, ILocalNav>(({ close, index, className }, ref) => (
    <motion.nav className={`header is_active-item ${className ?? ""}`} exit={{ opacity: 0 }} ref={ref}>
      <div className="absolute custom-container mac:px-[404px]">
        <img className="" src={Logo} alt="logo" />
        {/* <img className="absolute top-0" src={Logo} alt="logo" /> */}
      </div>

      <div />

      <div className="flex items-end h-[100px]">
        <button className="close header__close" style={{ transform: "translate(0px, 0px)" }} onClick={() => close(index)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 35 35" fill="none">
            <path d="M26.25 8.75L8.75 26.25" stroke="#061E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.75 8.75L26.25 26.25" stroke="#061E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </motion.nav>
  ))
);

export default NavAssortiment;
