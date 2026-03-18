import { type FC, useEffect, useState } from "react";
import AwwardItemCommon from "common/awwardItemCommon";
import LegendBelyaReka from "common/LegendBelyaReka";
import { $api, API_URL } from "../../api";

interface AwardItem {
  id: number;
  title: string;
  date: string;
  description: string;
  img: string;
  order: number;
}

const AboutAwwardsSection: FC = () => {
  const [awards, setAwards] = useState<AwardItem[]>([]);

  useEffect(() => {
    $api
      .get("/awards?populate=*&locale=ru&sort=order:asc")
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

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          normalizedData.sort((a: any, b: any) => a.order - b.order);
          setAwards(normalizedData);
        }
      })
      .catch(() => {
        console.error("Error loading awards");
      });
  }, []);

  if (awards.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="h-[100px] md:h-[150px]" />
      <LegendBelyaReka className="font-cocosignum">Награды</LegendBelyaReka>

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
