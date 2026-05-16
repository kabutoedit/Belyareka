// import { type FC, useEffect, useState } from "react";
// import LegendBelyaReka from "common/LegendBelyaReka";
// import ValueItemCommon from "common/valueItemCommon";
// import { partnersCollabMock } from "data/mock";
// import Space from "common/Space";
// import { $api, API_URL } from "../../api";

// interface Partner {
//   id: number;
//   name: string;
//   logoUrl: string | null;
// }

// const PartnersCollabSection: FC = () => {
//   const [partners, setPartners] = useState<Partner[]>([]);

//   useEffect(() => {
//     $api
//       .get("/partners?populate=*&sort=Order:asc")
//       .then((response) => {
//         const mapped: Partner[] = response.data.data.map((item: any) => ({
//           id: item.id,
//           name: item.attributes.Name,
//           logoUrl: item.attributes.Logo?.data?.attributes?.url || null,
//         }));
//         setPartners(mapped);
//       })
//       .catch((err) => console.error("Ошибка API:", err));
//   }, []);

//   return (
//     <section>
//       <Space height={"100px"} />
//       <LegendBelyaReka>ПРИНЦИПЫ СОТРУДНИЧЕСТВА</LegendBelyaReka>

//       <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 xl:gap-8 mt-8 ">
//         {partnersCollabMock?.map((elem, index) => (
//           <ValueItemCommon key={index} className={`w-full`} title={elem.title} descr={elem.descr} img={elem.img} />
//         ))}
//       </div>

//       <Space height={"100px"} />

//       <LegendBelyaReka className="lg:mb-20 mb-10 uppercase">ПАРТНЕРЫ</LegendBelyaReka>

//       <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 2xl:mt-0 mt-10 items-center justify-items-center">
//         {partners.map((partner) => {
//           if (!partner.logoUrl) return null;
//           const fullImageUrl = partner.logoUrl.startsWith("http") ? partner.logoUrl : `${API_URL}${partner.logoUrl}`;
//           return (
//             <div key={partner.id} className="w-full flex justify-center p-4">
//               <img
//                 src={fullImageUrl}
//                 alt={partner.name}
//                 className="max-h-[80px] max-w-[160px] w-auto h-auto object-contain hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default PartnersCollabSection;

// import { type FC, useEffect, useState } from "react";
// import LegendBelyaReka from "common/LegendBelyaReka";
// import ValueItemCommon from "common/valueItemCommon";
// import Space from "common/Space";
// import { $api, API_URL } from "../../api";
// import { useTranslation } from "react-i18next";

// interface Partner {
//   id: number;
//   name: string;
//   logoUrl: string | null;
// }

// const PartnersCollabSection: FC = () => {
//   const { t, i18n } = useTranslation();
//   const [partners, setPartners] = useState<Partner[]>([]);

//   // Локализованный массив принципов сотрудничества из JSON
//   const collaborationPrinciples = t("partners.principles_list", { returnObjects: true }) as Array<{
//     title: string;
//     descr: string;
//     img: string;
//   }>;

//   useEffect(() => {
//     // Для партнеров (логотипов) локаль может быть не важна, если названия брендов не меняются,
//     // но лучше передавать для порядка.
//     $api
//       .get(`/partners?populate=*&sort=Order:asc&locale=ru`)
//       .then((response) => {
//         const mapped: Partner[] = response.data.data.map((item: any) => ({
//           id: item.id,
//           name: item.attributes.Name,
//           logoUrl: item.attributes.Logo?.data?.attributes?.url || null,
//         }));
//         setPartners(mapped);
//       })
//       .catch((err) => console.error("Ошибка API:", err));
//   }, []);

//   return (
//     <section>
//       <Space height={"100px"} />
//       <LegendBelyaReka>{t("partners.principles_title")}</LegendBelyaReka>

//       <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 xl:gap-8 mt-8 ">
//         {/* Используем данные из i18next вместо прямого импорта mock */}
//         {Array.isArray(collaborationPrinciples) &&
//           collaborationPrinciples.map((elem, index) => (
//             <ValueItemCommon key={index} className="w-full" title={elem.title} descr={elem.descr} img={elem.img} />
//           ))}
//       </div>

//       <Space height={"100px"} />

//       <LegendBelyaReka className="lg:mb-20 mb-10 uppercase">{t("partners.title")}</LegendBelyaReka>

//       <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 2xl:mt-0 mt-10 items-center justify-items-center">
//         {partners.map((partner) => {
//           if (!partner.logoUrl) return null;
//           const fullImageUrl = partner.logoUrl.startsWith("http") ? partner.logoUrl : `${API_URL}${partner.logoUrl}`;
//           return (
//             <div key={partner.id} className="w-full flex justify-center p-4">
//               <img
//                 src={fullImageUrl}
//                 alt={partner.name}
//                 className="max-h-[80px] max-w-[160px] w-auto h-auto object-contain hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default PartnersCollabSection;

import { type FC, useEffect, useState } from "react";
import LegendBelyaReka from "common/LegendBelyaReka";
import ValueItemCommon from "common/valueItemCommon";
import Space from "common/Space";
import { $api, API_URL } from "../../api";
import { useTranslation } from "react-i18next";

const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const proudfs = `${CDN_BASE}/assets/media/picture/proudfs.webp`;
const proud04 = `${CDN_BASE}/assets/media/picture/proud04.webp`;
const step01 = `${CDN_BASE}/assets/media/picture/01.webp`;

interface Partner {
  id: number;
  name: string;
  logoUrl: string | null;
}

const PartnersCollabSection: FC = () => {
  const { t } = useTranslation();
  const [partners, setPartners] = useState<Partner[]>([]);

  // Собираем массив принципов динамически:
  // Картинки берутся из локальных импортов, а тексты — строго из JSON под нужный язык

  const collaborationPrinciples = [
    {
      title: t("partners_collab.honesty.title"),
      descr: t("partners_collab.honesty.descr"),
      img: proudfs,
    },
    {
      title: t("partners_collab.openness.title"),
      descr: t("partners_collab.openness.descr"),
      img: proud04,
    },
    {
      title: t("partners_collab.reliability.title"),
      descr: t("partners_collab.reliability.descr"),
      img: step01,
    },
  ];

  useEffect(() => {
    // Делаем чистый запрос без локали, чтобы логотипы грузились ВСЕГДА
    $api
      .get(`/partners?populate=*&sort=Order:asc`)
      .then((response) => {
        if (!response.data?.data) {
          setPartners([]);
          return;
        }

        const mapped: Partner[] = response.data.data.map((item: any) => {
          const attr = item.attributes || item;
          // Безопасный поиск картинки (с учетом регистра Logo/logo)
          const logoUrl = attr?.Logo?.data?.attributes?.url || attr?.logo?.data?.attributes?.url || item.Logo?.url || null;

          return {
            id: item.id,
            name: attr?.Name || attr?.name || "Partner",
            logoUrl: logoUrl,
          };
        });
        setPartners(mapped);
      })
      .catch((err) => console.error("Ошибка API Partners:", err));
  }, []);

  return (
    <section>
      <Space height={"100px"} />
      <LegendBelyaReka>{t("partners.principles_title")}</LegendBelyaReka>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 xl:gap-8 mt-8">
        {/* Рендерим наш синхронизированный с i18n массив */}
        {collaborationPrinciples.map((elem, index) => (
          <ValueItemCommon key={index} className="w-full" title={elem.title} descr={elem.descr} img={elem.img} />
        ))}
      </div>

      <Space height={"100px"} />

      <LegendBelyaReka className="lg:mb-20 mb-10 uppercase">{t("partners.title")}</LegendBelyaReka>

      {/* Блок партнеров, который теперь работает всегда */}
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

export default PartnersCollabSection;
