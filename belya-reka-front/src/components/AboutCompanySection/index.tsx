import { companyCartMainMock, i18n } from "data/mock/";
import Plyr from "plyr-react";
import { Link } from "react-router-dom";
import { type FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "plyr-react/plyr.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import CartMainCommon from "common/cartMainCommon";
import ContainerLayout from "layout/ContainerLayout";
import LegendBelyaReka from "common/LegendBelyaReka";
import { getAboutCompany } from "store/slices/aboutCompanySlice";
import { AppDispatch, RootState } from "store/index";

const AboutCompanySection: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { aboutData, loading } = useSelector((state: RootState) => state.aboutCompanySlice);

  useEffect(() => {
    dispatch(getAboutCompany("ru"));
  }, [dispatch]);

  const sources = [
    {
      src: aboutData?.attributes.video_url || "",
      type: "video/mp4",
      size: 480,
    },
  ];

  return (
    <section id="about" className="about my-20" style={{ overflow: "hidden" }}>
      <ContainerLayout className="about__container">
        {/* Блок Видео */}
        <div className="overflow-hidden rounded-xl w-full">
          <div className="relative">
            <Plyr
              source={{
                type: "video",
                sources: sources,
              }}
              options={{
                clickToPlay: true,
                autoplay: false,
                i18n: i18n,
                hideControls: false,
              }}
            />
          </div>
        </div>

        {/* Блок Описания */}
        <div className="about__company flex items-start justify-between md:flex-nowrap flex-wrap">
          {/* Левая колонка */}
          <div className="about__title md:w-2/4 w-full">
            <LegendBelyaReka className="font-cocosignum">
              {loading === "loading" ? "..." : aboutData?.attributes.title || "О КОМПАНИИ"}
            </LegendBelyaReka>

            <span className="br-text-medium mt-8 block leading-7 text-balance whitespace-pre-wrap">
              {aboutData?.attributes.subtitle || "заглушка текст"}
            </span>
          </div>

          {/* Правая колонка (Rich Text) */}
          <div className="2xl:mt-0 mt-4 w-full 2xl:w-5/12">
            <div className="about__descr br--text-xs text-gray-700 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:ml-5 [&>strong]:font-bold">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{aboutData?.attributes.description || "заглушка текст"}</ReactMarkdown>
            </div>

            <Link
              to="/about"
              className="button__focus text-light bg-hexahrome about__btn px-10 py-4 mt-6 lg:mt-16 inline-block no-underline rounded-full">
              Подробнее
            </Link>
          </div>
        </div>

        {/* Карточки */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-20">
          {companyCartMainMock?.map((company, index) => (
            <CartMainCommon
              className="bg-air col-span-1 rounded-xl flex"
              key={index}
              title={company.title}
              lottieMock={company.animElem}
              descr={company.descr}
            />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default AboutCompanySection;
