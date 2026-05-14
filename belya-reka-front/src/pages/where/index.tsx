// import { Helmet } from "react-helmet";
// import type { FC } from "react";

// import BannerCommon from "common/bannerCommon";
// import PageError from "common/pageError";
// import WhereBlock from "components/WhereSection";
// import { ErrorOfEdges } from "data/imports/imports.naming";
// import ContainerLayout from "layout/ContainerLayout";
// // CDN Base URL for DigitalOcean Spaces
// const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

// const banner = `${CDN_BASE}/assets/media/picture/Banner_3.png`;

// const components = [WhereBlock];

// const Where: FC = () => (
//   <>
//     <Helmet>
//       <title> Где купить молочные продукты питания Белая река </title>
//     </Helmet>
//     <main>
//       <BannerCommon
//         banner={banner}
//         bannerTitle="Где купить"
//         bannerDescription={
//           <p className="text-white text-2xl ">
//             Продукция «Белая река» представлена в торговых сетях и розничных магазинах по <br /> всему Кыргызстану, а также доступна в Казахстане.{" "}
//             <br /> Мы обеспечиваем широкую дистрибуцию, чтобы любимые продукты были рядом — в <br />
//             удобном формате и в шаговой доступности.
//           </p>
//         }
//       />
//       {components?.map((MainComponent, index) => (
//         <ErrorOfEdges key={index} fallback={<PageError />}>
//           <ContainerLayout>
//             <MainComponent />
//           </ContainerLayout>
//         </ErrorOfEdges>
//       ))}
//     </main>
//   </>
// );

// export default Where;

import { type FC } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import BannerCommon from "common/bannerCommon";
import PageError from "common/pageError";
import WhereBlock from "components/WhereSection";
import { ErrorOfEdges } from "data/imports/imports.naming";
import ContainerLayout from "layout/ContainerLayout";

// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";
const banner = `${CDN_BASE}/assets/media/picture/Banner_3.png`;

const components = [WhereBlock];

const Where: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("where_to_buy_page.seo_title")}</title>
      </Helmet>
      <main>
        <BannerCommon
          banner={banner}
          bannerTitle={t("where_to_buy_page.banner_title")}
          bannerDescription={<p className="text-white text-2xl">{t("where_to_buy_page.banner_description")}</p>}
        />
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
};

export default Where;
