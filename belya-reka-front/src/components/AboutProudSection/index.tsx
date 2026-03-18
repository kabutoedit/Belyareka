import { type FC, useEffect, useState } from "react";
import LegendBelyaReka from "common/LegendBelyaReka";
import ValueItemCommon from "common/valueItemCommon";
import LazyLoadLayout from "layout/LazyLoadLayout";
import { $api, API_URL } from "../../api";

interface ProudItem {
  id: number;
  title: string;
  description: string;
  img: string;
  order: number;
}

const AboutProudSection: FC = () => {
  // 1. Сразу ставим заглушки по умолчанию
  const [items, setItems] = useState<ProudItem[]>([]);

  useEffect(() => {
    // 2. Пытаемся получить реальные данные
    $api
      .get("/proud-items?populate=*&locale=ru&sort=order:asc")
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
              title: attr.Title || attr.title || "Без заголовка",
              description: attr.Description || attr.description || "",
              img: imgUrl ? (imgUrl.startsWith("http") ? imgUrl : `${API_URL}${imgUrl}`) : "",
              order: attr.order || 9999,
            };
          });

          // Сортируем по order
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          normalizedData.sort((a: any, b: any) => a.order - b.order);

          // 3. ЕСЛИ УСПЕХ: Заменяем заглушки на реальные данные
          setItems(normalizedData);
        }
      })
      .catch(() => {
        console.error("Error loading proud items");
      });
  }, []);

  return (
    <section className="mt-28">
      <LazyLoadLayout>
        <div className="">
          {/* <div className="flex lg:justify-between justify-normal lg:flex-nowrap flex-wrap gap-24"> */}
          {/* КОЛОНКА 1 */}
          <div className="lg:w-1/3 flex-grow-0">
            <LegendBelyaReka className="xl:mb-24 mb-10 block">
              мы <br />
              гордимся
            </LegendBelyaReka>

            {/* {items.slice(0, 1).map((item) => (
              <ValueItemCommon key={item.id} title={item.title} descr={item.description} img={item.img} />
            ))} */}
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-24">
            {items.map((item) => (
              <ValueItemCommon key={item.id} title={item.title} descr={item.description} img={item.img} />
            ))}
          </div>

          {/* КОЛОНКА 2 */}
          {/* <div className="flex md:w-1/3 flex-col flex-grow-0 gap-y-24">
            {items.slice(1, 3).map((item) => (
              <ValueItemCommon key={item.id} title={item.title} descr={item.description} img={item.img} />
            ))}
          </div> */}

          {/* КОЛОНКА 3 */}
          {/* <div className="flex md:w-1/3 flex-col gap-y-24 mt-12">
            {items.slice(3).map((item) => (
              <ValueItemCommon key={item.id} title={item.title} descr={item.description} img={item.img} />
            ))}
          </div> */}
        </div>
      </LazyLoadLayout>
    </section>
  );
};

export default AboutProudSection;
