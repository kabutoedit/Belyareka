import { type FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import LegendBelyaReka from "common/LegendBelyaReka";
import NewsMainCommon from "common/newsMainCommon";
import ContainerLayout from "layout/ContainerLayout";
import Space from "common/Space";
import { news } from "data/routes/routes.json";

import { getPrssCntr } from "store/slices/presscenterSlices";
import { AppDispatch, RootState } from "store/index";

const MainNewsSection: FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { presscenter } = useSelector((state: RootState) => state.presscenterSlice);

  useEffect(() => {
    const currentLocale = i18n.language === "kgz" ? "ky" : i18n.language;

    dispatch(getPrssCntr(currentLocale));
  }, [dispatch, i18n.language]);

  const lastNews = presscenter ? presscenter.slice(0, 3) : [];

  return (
    <section className="mt-20">
      <Space height={"100px"} />
      <ContainerLayout>
        <div className="flex justify-between items-end md:items-center gap-y-2 gap-x-2 w-full">
          <LegendBelyaReka className="font-cocosignum">{t("news.title")}</LegendBelyaReka>

          <NavLink
            className="button__focus px-5 md:px-6 py-2 md:py-4 rounded-full font-medium text-sm md:text-base bg-hexahrome hover:bg-[#00afefec] text-white no-underline text-nowrap"
            to={news}>
            {t("news.goToNews")}
          </NavLink>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-10 ">
          {lastNews.length > 0 ? (
            lastNews.map((item) => <NewsMainCommon key={item.id} {...item} />)
          ) : (
            <div className="col-span-3 text-center py-10 text-gray-400">{t("news.empty")}</div>
          )}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default MainNewsSection;
