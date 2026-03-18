import { type FC, useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useMediaQuery } from "usehooks-ts";
import { useInView } from "react-intersection-observer";
import LazyLoadLayout from "layout/LazyLoadLayout";
import LottieAnimationComponent from "components/LottieComponent";
import mapLottie from "assets/media/lottie/lotties.json";
import mapPinIcon from "/assets/media/picture/map-pin.svg";

const icon = {
  url: mapPinIcon,
  size: [64, 64],
  offset: [-15, -15],
};

const yMap = {
  height: "400px",
  borderRadius: 20,
  WebkitBorderRadius: 20,
  MozBorderRadius: 20,
  OBorderRadius: 20,
  overflow: "hidden",
};
const coor = [42.887191963021, 74.86002490247726];

export const MapYandex: FC = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });
  const [loaded, setLoaded] = useState(false);

  if (inView && !loaded) {
    setLoaded(true);
  }

  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div ref={inViewRef} className="map-container" style={{ marginTop: "20px", overflow: "hidden" }}>
      {!loaded && <LottieAnimationComponent width={50} height={50} animationData={mapLottie} loop={true} autoplay={true} />}
      <LazyLoadLayout>
        <YMaps>
          <Map
            className="yMapsss"
            width={"100%"}
            height={"500px"}
            style={
              isMobile
                ? {
                    width: "100%",
                    ...yMap,
                  }
                : {
                    width: "700px",
                    ...yMap,
                  }
            }
            defaultState={{
              center: coor,
              zoom: 9,
            }}>
            <Placemark
              defaultGeometry={coor}
              options={{
                iconLayout: "default#image",
                iconImageHref: icon.url,
                iconImageSize: icon.size,
                iconImageOffset: icon.offset,
              }}
            />
          </Map>
        </YMaps>
      </LazyLoadLayout>
    </div>
  );
};
