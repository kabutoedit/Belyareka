import { type FC, useEffect, useState } from "react";
import LegendBelyaReka from "common/LegendBelyaReka";
import ValueItemCommon from "common/valueItemCommon";
import { partnersCollabMock } from "data/mock";
import Space from "common/Space";
import { $api, API_URL } from "../../api";

interface Partner {
  id: number;
  Name: string;
  Logo?: {
    url?: string;
    data?: {
      attributes?: {
        url: string;
      };
    };
  };
}

const PartnersCollabSection: FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    $api
      .get("/partners?populate=*&sort=Order:asc")
      .then((response) => {
        setPartners(response.data.data);
      })
      .catch((err) => console.error("Ошибка API:", err));
  }, []);

  return (
    <section>
      <Space height={"100px"} />
      <LegendBelyaReka>ПРИНЦИПЫ СОТРУДНИЧЕСТВА</LegendBelyaReka>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 xl:gap-8 mt-8 ">
        {partnersCollabMock?.map((elem, index) => (
          <ValueItemCommon key={index} className={`w-full`} title={elem.title} descr={elem.descr} img={elem.img} />
        ))}
      </div>

      <Space height={"100px"} />

      <LegendBelyaReka className="lg:mb-20 mb-10 uppercase">ТОРГОВЫЕ СЕТИ</LegendBelyaReka>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 2xl:mt-0 mt-10 items-center justify-items-center">
        {partners.map((partner) => {
          let url = partner.Logo?.url;

          if (!url) {
            url = partner.Logo?.data?.attributes?.url;
          }

          if (!url) return null;

          const fullImageUrl = url.startsWith("http") ? url : `${API_URL}${url}`;

          return (
            <div key={partner.id} className="w-full flex justify-center p-4">
              <img
                src={fullImageUrl}
                alt={partner.Name}
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
