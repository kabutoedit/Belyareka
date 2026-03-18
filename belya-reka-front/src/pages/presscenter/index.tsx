import type { FC } from "react";
import { Helmet } from "react-helmet";
import BannerCommon from "common/bannerCommon";
import PageError from "common/pageError";
import PressCenterSection from "components/PressCenterSection";
import { ErrorOfEdges } from "data/imports/imports.naming";
import ContainerLayout from "layout/ContainerLayout";
// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const banner = `${CDN_BASE}/assets/media/picture/Banner_3.png`;

const components = [PressCenterSection];

const PressCenter: FC = () => (
  <>
    <Helmet>
      <title>Пресс-Центр</title>
    </Helmet>
    <main>
      <BannerCommon
        banner={banner}
        bannerTitle="Пресс-центр"
        bannerDescription={
          <p className="text-white text-2xl text-balance">
            Честно и открыто рассказываем об актуальных новостях <br /> компании «Белая река»
          </p>
        }
      />

      {components.map((MainComponent, index) => (
        <ErrorOfEdges key={index} fallback={<PageError />}>
          <ContainerLayout>
            <MainComponent />
          </ContainerLayout>
        </ErrorOfEdges>
      ))}
    </main>
  </>
);

export default PressCenter;
