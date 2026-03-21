import { type FC, useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useDispatch, useSelector } from "react-redux";

import LegendBelyaReka from "common/LegendBelyaReka";
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";
const mapPinIcon = `${CDN_BASE}/assets/media/picture/map-pin.svg`;

import LazyLoadLayout from "layout/LazyLoadLayout";
import Space from "common/Space";
import { $api, API_URL } from "../../api";
import { AppDispatch, RootState } from "store/index";
import { getSalesPoints } from "store/slices/salesPointsSlice";

interface Partner {
  id: number;
  name: string;
  logoUrl: string | null;
}

const classActiveButton = "bg-hexahrome text-white";
const classDisableButton = "bg-snow text-ghost";
const classCustomButton = "where-block__btn rounded-full 2xl:text-base text-sm color-white flex-shrink-0 font-semibold 2xl:px-10 px-4 2xl:py-5 py-4";

const DEFAULT_CENTER = [42.875986, 74.603672];

const customIcon = {
  iconLayout: "default#image",
  iconImageHref: mapPinIcon,
  iconImageSize: [36, 35],
  iconImageOffset: [-18, -35],
};

const WhereBlock: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { areas, districts } = useSelector((state: RootState) => state.salesPointsSlice);

  const [coor, setCoor] = useState<number[]>(DEFAULT_CENTER);
  const [titleArea, setTitleArea] = useState<string>("Все");
  const [activeRaions, setActiveRaions] = useState<any[]>([]);
  const [titleRaion, setTitleRaion] = useState<string>("");
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    dispatch(getSalesPoints("ru"));

    $api
      .get("/partners?populate=*&sort=Order:asc")
      .then((response) => {
        const mapped: Partner[] = response.data.data.map((item: any) => ({
          id: item.id,
          name: item.attributes.Name,
          logoUrl: item.attributes.Logo?.data?.attributes?.url || null,
        }));
        setPartners(mapped);
      })
      .catch((err) => console.error("Ошибка API Partners:", err));
  }, [dispatch]);

  function selectedButtonArea(coordinates: number[], title: string) {
    setCoor(coordinates);
    setTitleArea(title);
    setTitleRaion("");
    if (title === "Все") {
      setActiveRaions([]);
    } else {
      const filteredDistricts = districts.filter((district) => district.areaTitle === title);
      setActiveRaions(filteredDistricts);
    }
  }

  function selectedButtonRaion(coordinates: number[], title: string) {
    setCoor(coordinates);
    setTitleRaion(title);
  }

  return (
    <section>
      <Space height={"100px"} />
      <LegendBelyaReka>Торговые точки</LegendBelyaReka>

      {/* ОБЛАСТИ */}
      <div className="flex 2xl:gap-5 gap-3 flex-wrap md:mt-16 mt-5">
        <button
          className={`${titleArea === "Все" ? classActiveButton : classDisableButton} ${classCustomButton} button__focus`}
          onClick={() => selectedButtonArea(DEFAULT_CENTER, "Все")}>
          Все
        </button>
        {areas.map((btn) => (
          <button
            key={btn.id}
            className={`${btn.title === titleArea ? classActiveButton : classDisableButton} ${classCustomButton} button__focus`}
            onClick={() => selectedButtonArea(btn.coor, btn.title)}>
            {btn.title}
          </button>
        ))}
      </div>

      <LegendBelyaReka className="mt-16 md:mb-10 mb-5 block">{titleArea}</LegendBelyaReka>

      {/* РАЙОНЫ */}
      <div className="flex 2xl:gap-5 gap-3 flex-wrap">
        {activeRaions.length > 0
          ? activeRaions.map((btn) => (
              <button
                className={`${btn.title === titleRaion ? classActiveButton : classDisableButton} ${classCustomButton} button__focus`}
                key={btn.id}
                onClick={() => selectedButtonRaion(btn.coor, btn.title)}>
                {btn.title}
              </button>
            ))
          : titleArea !== "Все" && <div className="text-gray-400">Нет точек в этом регионе</div>}
      </div>

      {/* КАРТА */}
      <div className="mt-8 w-full h-[500px]">
        <LazyLoadLayout>
          <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
            <Map
              width="100%"
              height="500px"
              defaultState={{ center: DEFAULT_CENTER, zoom: 7 }}
              state={{
                center: coor,
                zoom: titleArea === "Все" ? 7 : 11,
                controls: ["zoomControl", "fullscreenControl"],
              }}>
              {titleArea === "Все" ? (
                areas.map((area, index) => <Placemark key={index} geometry={area.coor} options={customIcon} />)
              ) : titleRaion ? (
                <Placemark geometry={coor} options={customIcon} />
              ) : (
                <>
                  <Placemark geometry={coor} options={customIcon} />
                  {activeRaions.map((raion, index) => (
                    <Placemark key={index} geometry={raion.coor} options={customIcon} />
                  ))}
                </>
              )}
            </Map>
          </YMaps>
        </LazyLoadLayout>
      </div>

      <LegendBelyaReka className="my-16 block">Партнеры</LegendBelyaReka>

      {/* Блок торговых сетей из Strapi */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 2xl:mt-0 mt-10 items-center justify-items-center">
        {partners.map((partner) => {
          if (!partner.logoUrl) return null;
          const fullImageUrl = partner.logoUrl.startsWith("http") ? partner.logoUrl : `${API_URL}${partner.logoUrl}`;
          return (
            <div key={partner.id} className="w-full flex justify-center p-4">
              <img
                src={fullImageUrl}
                alt={partner.name}
                className="max-h-[80px] max-w-[160px] w-auto h-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhereBlock;
