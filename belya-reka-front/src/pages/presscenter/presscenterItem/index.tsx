import { useEffect, type FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import ContainerLayout from "layout/ContainerLayout";
import { AppDispatch, RootState } from "store/index";
import { getPrssCntr } from "store/slices/presscenterSlices";
import ArticleItemCommon from "common/articleItemCommon";

const PressCenterElem: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { presscenter, loading } = useSelector((state: RootState) => state.presscenterSlice);

  const newsItem = presscenter?.find((elem) => elem.id === Number(id));

  const otherNews = presscenter?.filter((elem) => elem.id !== Number(id)).slice(0, 3);

  useEffect(() => {
    if (presscenter.length === 0) {
      dispatch(getPrssCntr());
    }
  }, [dispatch, presscenter.length]);

  if (loading === "loading" && !newsItem) {
    return <div className="h-screen flex items-center justify-center">Загрузка...</div>;
  }

  if (!newsItem && loading === "idle") {
    return (
      <ContainerLayout className="pt-40 text-center">
        <div>Новость не найдена</div>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-500 underline">
          Назад
        </button>
      </ContainerLayout>
    );
  }

  const contentText = newsItem?.detail_text || newsItem?.description;

  return (
    <section>
      <div className="h-[20px] ss:h-[100px] md:h-[90px]" />

      <ContainerLayout>
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-500 hover:text-hexahrome transition-colors flex items-center gap-3 text-lg font-medium">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Все новости
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <div className="lg:col-span-2 order-1">
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold text-left leading-tight text-gray-900">{newsItem?.title}</h1>
          </div>

          <div className="lg:col-span-1 order-2 lg:order-last lg:row-span-3">
            {newsItem?.primary_image && (
              <div className="rounded-xl overflow-hidden w-fit lg:w-full">
                <LazyLoadImage
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                  wrapperClassName="w-full h-full"
                  src={newsItem.primary_image}
                  alt={newsItem.title}
                  effect="blur"
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-2 order-3">
            <div className="news-content text-gray-700 leading-relaxed text-left text-lg">
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  p: ({ children }) => <p style={{ marginBottom: "1rem" }}>{children}</p>,
                  strong: ({ children }) => <strong style={{ fontWeight: 700 }}>{children}</strong>,
                  em: ({ children }) => <em style={{ fontStyle: "italic" }}>{children}</em>,
                  del: ({ children }) => <del style={{ textDecoration: "line-through" }}>{children}</del>,
                  u: ({ children }) => <u style={{ textDecoration: "underline" }}>{children}</u>,
                  ul: ({ children }) => <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1rem" }}>{children}</ul>,
                  ol: ({ children }) => <ol style={{ listStyleType: "decimal", paddingLeft: "1.5rem", marginBottom: "1rem" }}>{children}</ol>,
                  li: ({ children }) => <li style={{ marginBottom: "0.5rem" }}>{children}</li>,
                  a: ({ href, children }) => (
                    <a href={href} style={{ color: "#00afef", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                  h1: ({ children }) => <h1 style={{ fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem" }}>{children}</h1>,
                  h2: ({ children }) => <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>{children}</h2>,
                  h3: ({ children }) => <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>{children}</h3>,
                }}>
                {contentText || ""}
              </Markdown>
            </div>

            <div className="mt-8 flex justify-end text-gray-400 font-medium text-base">{newsItem?.date}</div>
          </div>
        </div>

        {otherNews.length > 0 && (
          <div className="mt-20 pt-10 border-t border-gray-200">
            <h2 className="text-3xl font-bold mb-8 font-cocosignum text-left">ЧИТАЙТЕ ТАКЖЕ</h2>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
              {otherNews.map((item) => (
                <ArticleItemCommon key={item.id} {...item} />
              ))}
            </div>
          </div>
        )}
      </ContainerLayout>
    </section>
  );
};

export default PressCenterElem;
