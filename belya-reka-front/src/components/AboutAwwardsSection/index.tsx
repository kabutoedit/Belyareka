// import { type FC, useEffect, useState } from "react";
// import AwwardItemCommon from "common/awwardItemCommon";
// import LegendBelyaReka from "common/LegendBelyaReka";
// import { $api, API_URL } from "../../api";

// interface AwardItem {
//   id: number;
//   title: string;
//   date: string;
//   description: string;
//   img: string;
//   order: number;
// }

// const AboutAwwardsSection: FC = () => {
//   const [awards, setAwards] = useState<AwardItem[]>([]);

//   useEffect(() => {
//     $api
//       .get("/awards?populate=*&locale=ru&sort=order:asc")
//       .then((res) => {
//         const strapiData = res.data.data;

//         if (strapiData && strapiData.length > 0) {
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           const normalizedData = strapiData.map((item: any) => {
//             const attr = item.attributes || item;

//             // Обработка картинки
//             const imgField = attr.Image || attr.img || attr.image;
//             let imgUrl = "";
//             if (imgField) {
//               if (imgField.url) imgUrl = imgField.url;
//               else if (imgField.data?.attributes?.url) imgUrl = imgField.data.attributes.url;
//               else if (Array.isArray(imgField) && imgField[0]?.url) imgUrl = imgField[0].url;
//             }

//             return {
//               id: item.id,
//               title: attr.Title || attr.title || "",
//               date: attr.Date || attr.date || "",
//               description: attr.Description || attr.description || "",
//               img: imgUrl ? (imgUrl.startsWith("http") ? imgUrl : `${API_URL}${imgUrl}`) : "",
//               order: attr.order || 9999,
//             };
//           });

//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           normalizedData.sort((a: any, b: any) => a.order - b.order);
//           setAwards(normalizedData);
//         }
//       })
//       .catch(() => {
//         console.error("Error loading awards");
//       });
//   }, []);

//   if (awards.length === 0) {
//     return null;
//   }

//   return (
//     <section>
//       <div className="h-[100px] md:h-[150px]" />
//       <LegendBelyaReka className="font-cocosignum">Награды</LegendBelyaReka>

//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10 md:mt-12">
//         {awards.map((award) => (
//           <AwwardItemCommon
//             key={String(award.id)}
//             awwardTitle={award.title}
//             awwardDate={award.date}
//             awwardContent={award.description}
//             awwardImg={award.img}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AboutAwwardsSection;

import { type FC, useEffect, useState } from "react";
import AwwardItemCommon from "common/awwardItemCommon";
import LegendBelyaReka from "common/LegendBelyaReka";
import { $api, API_URL } from "../../api";
import { useTranslation } from "react-i18next";

interface AwardItem {
  id: number;
  title: string;
  date: string;
  description: string;
  img: string;
  order: number;
}

const AboutAwwardsSection: FC = () => {
  const { t, i18n } = useTranslation();
  const [awards, setAwards] = useState<AwardItem[]>([]);

  useEffect(() => {
    // Используем i18n.language, чтобы Strapi отдал контент на нужном языке
    // Важно: в Strapi должны быть созданы локализации для этих записей
    $api
      .get(`/awards?populate=*&locale=${i18n.language}&sort=order:asc`)
      .then((res) => {
        const strapiData = res.data.data;

        if (strapiData && strapiData.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const normalizedData = strapiData.map((item: any) => {
            const attr = item.attributes || item;

            // Обработка картинки
            const imgField = attr.Image || attr.img || attr.image;
            let imgUrl = "";
            if (imgField) {
              if (imgField.url) imgUrl = imgField.url;
              else if (imgField.data?.attributes?.url) imgUrl = imgField.data.attributes.url;
              else if (Array.isArray(imgField) && imgField[0]?.url) imgUrl = imgField[0].url;
            }

            return {
              id: item.id,
              title: attr.Title || attr.title || "",
              date: attr.Date || attr.date || "",
              description: attr.Description || attr.description || "",
              img: imgUrl ? (imgUrl.startsWith("http") ? imgUrl : `${API_URL}${imgUrl}`) : "",
              order: attr.order || 9999,
            };
          });

          // Сортировка
          normalizedData.sort((a: any, b: any) => a.order - b.order);
          setAwards(normalizedData);
        }
      })
      .catch(() => {
        console.error("Error loading awards");
      });
  }, [i18n.language]); // Перезапускаем запрос при смене языка

  if (awards.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="h-[100px] md:h-[150px]" />
      {/* Текст "Награды" берем из JSON */}
      <LegendBelyaReka className="font-cocosignum">{t("about.awards_title")}</LegendBelyaReka>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10 md:mt-12">
        {awards.map((award) => (
          <AwwardItemCommon
            key={String(award.id)}
            awwardTitle={award.title}
            awwardDate={award.date}
            awwardContent={award.description}
            awwardImg={award.img}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutAwwardsSection;
