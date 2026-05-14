// import { lazy, type FC } from "react";
// import { Helmet } from "react-helmet";

// import AboutCompanySection from "components/AboutCompanySection";
// import { ErrorOfEdges } from "data/imports/imports.naming";
// import PageError from "common/pageError";
// import OurIndicatorsSection from "components/indicatorsMainSection";
// import AchievBlockSection from "components/AchievBlockSection";
// import MainNewsSection from "components/MainNewsSection";
// import CertificateMainSection from "components/CertificateSection";
// import Footer from "components/Footer";
// import BelyaRekaProductsSection from "components/BelyaRekaProductsSection";
// import HeaderPresentation from "components/HeaderPresentation";
// import LegendBelyaReka from "common/LegendBelyaReka";

// const YouTubeShortsSection = lazy(() => import("components/YouTubeShortsSection"));

// const BelyaRekaTitlte: FC = () => <LegendBelyaReka className="custom-container mb-5 font-cocosignum font-bold">Продукция</LegendBelyaReka>;

// const components = [
//   AboutCompanySection,
//   BelyaRekaTitlte,
//   BelyaRekaProductsSection,
//   CertificateMainSection,
//   OurIndicatorsSection,
//   AchievBlockSection,
//   YouTubeShortsSection,
//   MainNewsSection,
// ];

// const Main: FC = () => (
//   <>
//     <Helmet>
//       <title> Главная страница — Белая река </title>
//     </Helmet>

//     <HeaderPresentation />
//     {components?.map((MainComponent, index) => (
//       <ErrorOfEdges key={index} fallback={<PageError />}>
//         <MainComponent />
//       </ErrorOfEdges>
//     ))}
//     <Footer />
//   </>
// );

// export default Main;

import { lazy, type FC } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import AboutCompanySection from "components/AboutCompanySection";
import { ErrorOfEdges } from "data/imports/imports.naming";
import PageError from "common/pageError";
import OurIndicatorsSection from "components/indicatorsMainSection";
import AchievBlockSection from "components/AchievBlockSection";
import MainNewsSection from "components/MainNewsSection";
import CertificateMainSection from "components/CertificateSection";
import Footer from "components/Footer";
import BelyaRekaProductsSection from "components/BelyaRekaProductsSection";
import HeaderPresentation from "components/HeaderPresentation";
import LegendBelyaReka from "common/LegendBelyaReka";

const YouTubeShortsSection = lazy(() => import("components/YouTubeShortsSection"));

const BelyaRekaTitlte: FC = () => {
  const { t } = useTranslation();
  return <LegendBelyaReka className="custom-container mb-5 font-cocosignum font-bold">{t("main.productsTitle")}</LegendBelyaReka>;
};

const components = [
  AboutCompanySection,
  BelyaRekaTitlte,
  BelyaRekaProductsSection,
  CertificateMainSection,
  OurIndicatorsSection,
  AchievBlockSection,
  YouTubeShortsSection,
  MainNewsSection,
];

const Main: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("main.pageTitle")}</title>
      </Helmet>
      <HeaderPresentation />
      {components?.map((MainComponent, index) => (
        <ErrorOfEdges key={index} fallback={<PageError />}>
          <MainComponent />
        </ErrorOfEdges>
      ))}
      <Footer />
    </>
  );
};

export default Main;
