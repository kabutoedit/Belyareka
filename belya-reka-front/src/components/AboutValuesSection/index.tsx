import { type FC, useEffect, useState } from "react";
import LegendBelyaReka from "common/LegendBelyaReka";
import ValueItemCommon from "common/valueItemCommon";
import LazyLoadLayout from "layout/LazyLoadLayout";
import Space from "common/Space";

import { $api, API_URL } from "../../api";

interface ValueItem {
  id: number;
  title: string;
  descr: string;
  img: string;
  order: number;
}

const AboutValuesSection: FC = () => {
  const [values, setValues] = useState<ValueItem[]>([]);

  useEffect(() => {
    // 2. Получение данные из Strapi
    $api
      .get("/company-values?populate=*&locale=ru&sort=order:asc")
      .then((res) => {
        const strapiData = res.data.data;

        if (strapiData && strapiData.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const normalizedData = strapiData.map((item: any) => {
            const attr = item.attributes || item;

            // Картинка
            const imgField = attr.img || attr.image || attr.Image;
            let imgUrl = "";
            if (imgField) {
              if (imgField.url) imgUrl = imgField.url;
              else if (imgField.data?.attributes?.url) imgUrl = imgField.data.attributes.url;
              else if (Array.isArray(imgField) && imgField[0]?.url) imgUrl = imgField[0].url;
            }

            return {
              id: item.id,
              title: attr.title || attr.Title || "Заголовок",
              descr: attr.description || attr.Description || "",
              img: imgUrl ? (imgUrl.startsWith("http") ? imgUrl : `${API_URL}${imgUrl}`) : "",
              order: attr.order || 9999,
            };
          });

          // Сортируем по order
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          normalizedData.sort((a: any, b: any) => a.order - b.order);

          // 3. Заменяем заглушки на реальные данные
          setValues(normalizedData);
        }
      })
      .catch(() => {
        console.error("Error loading company values");
      });
  }, []);

  return (
    <main className="mt-0 lg:mt-24">
      <LazyLoadLayout>
        <Space height={"100px"} />
        <div className="flex lg:justify-between justify-normal lg:flex-nowrap flex-wrap gap-24">
          {/* КОЛОНКА 1 */}
          <div className="values-item lg:w-1/3 flex-grow-0">
            <LegendBelyaReka className="mb-10 lg:mb-24 block">
              Ценности <br />
              компании
            </LegendBelyaReka>
            {values.slice(0, 1).map((value) => (
              <ValueItemCommon key={value.id} title={value.title} descr={value.descr} img={value.img} />
            ))}
          </div>

          {/* КОЛОНКА 2 */}
          <div className="flex md:w-1/3 flex-col flex-grow-0 gap-y-24">
            {values.slice(1, 3).map((value) => (
              <ValueItemCommon key={value.id} title={value.title} descr={value.descr} img={value.img} />
            ))}
          </div>

          {/* КОЛОНКА 3 */}
          <div className="flex md:w-1/3 flex-col gap-y-24">
            {values.slice(3).map((value) => (
              <ValueItemCommon key={value.id} title={value.title} descr={value.descr} img={value.img} />
            ))}
          </div>
        </div>
      </LazyLoadLayout>
    </main>
  );
};

export default AboutValuesSection;
