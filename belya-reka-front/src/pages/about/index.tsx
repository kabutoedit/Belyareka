import type { FC } from "react";
import { Helmet } from "react-helmet";

import AboutFounderSection from "components/AboutFounderSection/";
import { ErrorOfEdges } from "data/imports/imports.naming";
import PageError from "common/pageError";
import BannerCommon from "common/bannerCommon";
import AboutCount from "common/aboutCount";
import ContainerLayout from "layout/ContainerLayout";
import AboutAwwardsSection from "components/AboutAwwardsSection";
import AboutValuesSection from "components/AboutValuesSection";
import AboutProudSection from "components/AboutProudSection";
// Business Task
import ProductionCycle from "core/ProductionCycle";
// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const banner = `${CDN_BASE}/assets/media/picture/Banner_1.png`;

import Space from "common/Space";

const components = [AboutCount, AboutFounderSection, AboutAwwardsSection, AboutValuesSection, AboutProudSection, ProductionCycle];

const About: FC = () => (
  <>
    <Helmet>
      <title>О компании Белая река </title>
      <meta
        property="og:description"
        content="«Белая река-Продукты питания» объединяет предприятия по переработке молока с собственных ферм «Белая река»"
      />
      <meta property="og:title" content="Белая река" />
      <meta property="og:url" content="https://monstrcorp.com/" />
      <meta property="og:image" content="https://backend.monstrcorp.com/media/frontend_media/certificates/banner04.webp" />
    </Helmet>

    <main className="overflow-hidden">
      <BannerCommon
        banner={banner}
        bannerTitle="О нашей компании"
        bannerDescription={
          <p className="text-white text-2xl text-balance max-w-[800px]">
            «Белая река» — это больше, чем просто молоко. Это история о чистоте, доверии и заботе, рожденная в самом сердце Кыргызстана. Мы верим, что
            настоящее качество начинается с отношения — к делу, к людям, к земле. Поэтому каждое утро мы встречаем с уверенностью, что делаем
            правильное: создаём продукты, в которых нет ничего лишнего.
          </p>
        }
      />
      <Space height={"100px"} />
      {components?.map((MainComponent, index) => (
        <ErrorOfEdges key={index} fallback={<PageError />}>
          <ContainerLayout>
            <MainComponent />
          </ContainerLayout>
        </ErrorOfEdges>
      ))}
    </main>
  </>
);

export default About;
