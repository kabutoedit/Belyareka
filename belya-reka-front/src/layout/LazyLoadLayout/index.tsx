import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

const LazyLoadLayout = ({
  threshold = 1,
  className = "",
  children,
  show = false,
  index,
}: {
  className?: string;
  threshold?: number;
  children: ReactNode;
  show?: boolean;
  index?: number;
}) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const [loaded, setLoaded] = useState<boolean>(false);
  const [error] = useState<null>(null);

  if (inView && !loaded && !error) {
    setLoaded(true);
  }

  return (
    <div className={`${className}`} key={`Lazy-load-component-${index}`} ref={inViewRef}>
      {error ? <div>Error: {error}</div> : loaded ? children : show ? <div className="loading-animation">Loading...</div> : null}
    </div>
  );
};

export default LazyLoadLayout;
