import BannerCommon from "common/bannerCommon";
import BelyaRekaProductsSection from "components/BelyaRekaProductsSection";
import type { FC } from "react";

import ContainerLayout from "layout/ContainerLayout";
import { Helmet } from "react-helmet";

// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const banner = `${CDN_BASE}/assets/media/picture/Banner_2.png`;

const Products: FC = () => (
  <>
    <Helmet>
      <title> Молочные продукты Белая река </title>
    </Helmet>
    <BannerCommon
      banner={banner}
      bannerTitle="Продукция"
      bannerDescription={
        <p className="text-white text-2xl">
          Мы формируем линейку с учётом разных потребностей семьи: для завтрака, для перекуса, для приготовления блюд и десертов. В основе каждого
          продукта — натуральное сырьё, контроль качества и продуманная технология производства.
        </p>
      }
    />
    <ContainerLayout className="my-32">
      <div className=" overflow-hidden rounded-2xl">
        <BelyaRekaProductsSection />
      </div>
    </ContainerLayout>
  </>
);

export default Products;
