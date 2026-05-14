// import type { FC } from "react";
// import { Helmet } from "react-helmet";

// import { ErrorOfEdges } from "data/imports/imports.naming";
// import PageError from "common/pageError";
// import ContainerLayout from "layout/ContainerLayout";
// import PartnersCollabSection from "components/PartnersCollabSection";
// // CDN Base URL for DigitalOcean Spaces
// const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

// const banner = `${CDN_BASE}/assets/media/picture/Banner_1.png`;

// import BannerCommon from "common/bannerCommon";
// import PartnersForm from "common/PartnersForm";

// const components = [PartnersCollabSection];

// const Partners: FC = () => (
//   <>
//     <Helmet>
//       <title> Информация для партнеров Белая река продукты питания </title>
//     </Helmet>
//     <main className="overflow-hidden">
//       <BannerCommon
//         banner={banner}
//         bannerTitle="Партнерам"
//         bannerDescription={
//           <p className="text-white 2xl:text-2xl text-lg text-balance">
//             «Белая река» нацелена на плодотворные партнерские отношения, <br /> в основе которых — сочетание взаимной пользы и динамичного развития
//           </p>
//         }
//       />

//       {components.map((MainComponent, index) => (
//         <ErrorOfEdges key={index} fallback={<PageError />}>
//           <ContainerLayout>
//             <MainComponent />
//           </ContainerLayout>
//         </ErrorOfEdges>
//       ))}

//       <ContainerLayout className="mt-24">
//         <PartnersForm />
//       </ContainerLayout>
//     </main>
//   </>
// );

// export default Partners;

import { type FC } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { ErrorOfEdges } from "data/imports/imports.naming";
import PageError from "common/pageError";
import ContainerLayout from "layout/ContainerLayout";
import PartnersCollabSection from "components/PartnersCollabSection";
import BannerCommon from "common/bannerCommon";
import PartnersForm from "common/PartnersForm";

// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";
const banner = `${CDN_BASE}/assets/media/picture/Banner_1.png`;

const components = [PartnersCollabSection];

const Partners: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("partners_page.seo_title")}</title>
      </Helmet>

      <main className="overflow-hidden">
        <BannerCommon
          banner={banner}
          bannerTitle={t("partners_page.banner_title")}
          bannerDescription={<p className="text-white 2xl:text-2xl text-lg text-balance">{t("partners_page.banner_description")}</p>}
        />

        {components.map((MainComponent, index) => (
          <ErrorOfEdges key={index} fallback={<PageError />}>
            <ContainerLayout>
              <MainComponent />
            </ContainerLayout>
          </ErrorOfEdges>
        ))}

        <ContainerLayout className="mt-24">
          {/* Внутри PartnersForm тоже нужно будет использовать t() для лейблов полей */}
          <PartnersForm />
        </ContainerLayout>
      </main>
    </>
  );
};

export default Partners;
