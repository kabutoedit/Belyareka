import { type FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LegendBelyaReka from "common/LegendBelyaReka";
import ArticleItemCommon from "common/articleItemCommon";
import Space from "common/Space";

import { getPrssCntr } from "store/slices/presscenterSlices";
import { AppDispatch, RootState } from "store/index";

const PressCenterSection: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { presscenter } = useSelector((state: RootState) => state.presscenterSlice);

  useEffect(() => {
    dispatch(getPrssCntr());
  }, [dispatch]);

  return (
    <div>
      <Space height={"100px"} />
      <div className="flex justify-between xl:items-center gap-5 mb-8 xl:flex-row flex-col">
        <LegendBelyaReka>НОВОСТИ</LegendBelyaReka>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-1 gap-x-5 gap-y-7">
        {presscenter && presscenter.length > 0 ? (
          presscenter.map((item) => (
            <ArticleItemCommon key={item.id} {...item} />
          ))
        ) : (
          <div className="col-span-3 text-center">Новости не найдены</div>
        )}
      </div>
    </div>
  );
};

export default PressCenterSection;
