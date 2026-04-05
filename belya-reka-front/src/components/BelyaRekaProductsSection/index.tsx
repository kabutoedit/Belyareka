"use client";
import { useEffect, useState, useCallback, useRef, useMemo, type FC } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLockedBody, useMediaQuery, useWindowSize } from "usehooks-ts";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { twMerge } from "tailwind-merge";
import NavAssortiment from "common/navAssortiment";
import { container, items } from "data/mock";
import type { IProductCatalog } from "ts/types/common.interface";
import BelyaRekaDescriptionCommon from "common/BelyaRekaDescriptionCommon";

const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const arrow = `${CDN_BASE}/assets/media/svg/assortment_arrow_navigate.svg`;
const arrowNew = `${CDN_BASE}/assets/media/svg/assortment_arrow_navigate_left.svg`;

import "swiper/css";
import "swiper/css/navigation";

type coor = "x" | "y" | "left" | "right" | "top" | "bottom";

const animationTimingFunc: string = "easeInOut";
const animationDuration = 0.3;

async function fetchAllProducts(): Promise<IProductCatalog[]> {
  const pageSize = 100;
  const res = await fetch(`${STRAPI_URL}/api/products?populate=category&populate=image&pagination[pageSize]=${pageSize}`);

  const json = await res.json();
  console.log(json);

  return json.data.map((item: any) => {
    const a = item.attributes;
    const imageUrl = a.image?.data?.attributes?.url ?? "";
    const categoryName = a.category?.data?.attributes?.name ?? "";
    return {
      id: String(item.id),
      title: a.name ?? "",
      img: imageUrl,
      imgns: imageUrl,
      className: a.className ?? "",
      isShow: a.isShow ?? false,
      bg: a.bg ?? "",
      category: categoryName,
      textColor: undefined,
      props_product: {
        life_cycle: 10,
        weight: 2.5,
        volume: 2.5,
        temperature_keep: "+2°C до +6°C",
      },
      price: 86,
      old_price: 149,
      starting_price: 86,
      min: 10,
      max: 50,
      count: 0,
    };
  });
}

const BelyaRekaProductsSection: FC = () => {
  const [allProducts, setAllProducts] = useState<IProductCatalog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllProducts().then((data) => {
      setAllProducts(data);
      setLoading(false);
    });
  }, []);

  const refNavWidth = useRef<HTMLDivElement>(null);
  const [navWidth, setNavWidth] = useState(0);
  const refContainer = useRef<HTMLDivElement>(null);
  const refCoor = useRef<HTMLDivElement>(null);
  const [clickedItem, setClickedItem] = useState<boolean | null>(null);
  const [categories, setCategories] = useState<string | null>(null);
  const [cleanElem, setCleanElem] = useState<IProductCatalog>();
  const [itemNumber, setItemNumber] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [bgColor, setBgColor] = useState<string | undefined>(undefined);
  const [clickedIndex, setClickedIndex] = useState<number | null>();
  const [showProductDetail, setShowProductDetail] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const isIpad = useMediaQuery("(max-width: 989px)");
  const { width, height } = useWindowSize();
  const [locked, setLocked] = useLockedBody(false, "root");

  const filteredItem = useMemo(() => {
    return allProducts?.filter((product) => product.category === categories) || [];
  }, [categories, allProducts]);

  const filteredItemCatalog = useMemo(() => allProducts?.filter((product) => product.isShow) || [], [allProducts]);

  const [productStates, setProductStates] = useState<boolean[]>([]);
  const [activeProductIndex, setActiveProductIndex] = useState<number | null>(null);

  useEffect(() => {
    setProductStates(Array(filteredItemCatalog.length).fill(false));
  }, [filteredItemCatalog.length]);

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (refNavWidth.current && refNavWidth.current.offsetWidth) {
      if (!navWidth) {
        setNavWidth(refNavWidth.current.offsetWidth / 2 - 70);
      }
    }
  }, [itemNumber, navWidth]);

  const toggleProductState = useCallback(
    (index: number) => {
      setProductStates((prevProductStates) => {
        const newProductStates = [...prevProductStates];
        if (newProductStates[index] !== undefined) {
          newProductStates[index] = !newProductStates[index];
        }
        return newProductStates;
      });
    },
    [setProductStates]
  );

  const childSize = (i: number, size: "clientHeight" | "clientWidth") => {
    const container = refContainer.current;
    if (container && container.children[i]) {
      return container.children[i][size] ?? 0;
    }
    return 0;
  };
  const childCoor = (i: number, coordinate: coor) => refContainer?.current?.children[i]?.getBoundingClientRect()[coordinate] ?? 0;
  const parentCoor = (coordinate: coor) => refContainer?.current?.getBoundingClientRect()[coordinate] ?? 0;
  const proCoor = (coordinate: coor) => refCoor?.current?.parentElement?.getBoundingClientRect()[coordinate] ?? 0;

  const [knowYourPlaceState, setKnowYourPlaceState] = useState(false);

  const handleAnimateClick = (i: number, variant: "show" | "close") => {
    if (isMobile && isIpad) {
      if (filteredItemCatalog[i]) {
        setCleanElem(filteredItemCatalog[i]);
      }
    }
    if (variant === "show") {
      setShowProductDetail(true);
      setActiveProductIndex(i);
      setItemNumber(i);
      setKnowYourPlaceState(false);
      setBgColor(filteredItemCatalog[i]?.bg);
    } else {
      setShowProductDetail(false);
    }
    const matchingItem = filteredItemCatalog[i];
    if (matchingItem) {
      setClickedIndex(i);
      toggleProductState(i);
      setLocked(!locked);
      setClickedItem(!clickedItem);
      if (variant === "show") setBgColor(matchingItem.bg);
    }
    setTimeout(() => {
      setClickedIndex(() => null);
    }, 1000);
  };

  const handleClick = (index: number) => {
    const matchingItem = filteredItem[index];
    if (matchingItem) {
      setCleanElem(matchingItem);
      setBgColor(matchingItem.bg);
    }
  };

  useEffect(() => {
    if (typeof hoveredItem === "number" && filteredItemCatalog[hoveredItem]) {
      if (isMobile === false && isIpad === false && showProductDetail === false) {
        setCleanElem(filteredItemCatalog[hoveredItem]);
      }
      const matchingIndex = filteredItemCatalog[hoveredItem]?.category;
      setCategories(matchingIndex);
    }
  }, [hoveredItem, showProductDetail, isMobile, isIpad]);

  useEffect(() => {
    if (!swiperRef.current || !cleanElem || !filteredItem || !swiperRef.current.swiper) return;
    const swiper = swiperRef.current.swiper;
    const index = filteredItem.findIndex((item) => item.id === cleanElem.id);
    if (index < 0 || !swiper.slides[index]) return;
    const slide = swiper.slides[index];
    const slideLeft = slide.offsetLeft;
    const slideWidth = slide.offsetWidth;
    const swiperWidth = swiper.width;
    const currentTranslate = -swiper.getTranslate();
    const isLeftHidden = slideLeft < currentTranslate;
    const isRightHidden = slideLeft + slideWidth > currentTranslate + swiperWidth;
    if (isRightHidden) {
      swiper.slideNext();
    } else if (isLeftHidden) {
      swiper.slidePrev();
    }
  }, [cleanElem, filteredItem]);

  const [hasMore, setHasMore] = useState(true);
  const [newInfiniteItems, setNewInfiniteItems] = useState<IProductCatalog[]>([]);

  useEffect(() => {
    if (filteredItemCatalog.length > 0) {
      setNewInfiniteItems(filteredItemCatalog.slice(0, 4));
      setHasMore(filteredItemCatalog.length > 4);
    }
  }, [filteredItemCatalog]);

  const loadMoreCatalogs = (itemsArray: IProductCatalog[], itemsPerPage: number) => {
    if (!Array.isArray(itemsArray)) return;
    const startIndex = newInfiniteItems.length;
    const endIndex = startIndex + itemsPerPage;
    const nextItems = itemsArray.slice(startIndex, endIndex);
    setNewInfiniteItems((prevItems) => [...prevItems, ...nextItems]);
    if (endIndex >= itemsArray.length) {
      setHasMore(false);
    }
  };

  const onPrevHandler = () => {
    if (activeProductIndex && activeProductIndex > 0) {
      const prevItem = filteredItemCatalog[activeProductIndex - 1];
      if (prevItem) {
        const matchingIndex = prevItem.category;
        setCategories(matchingIndex);
        const qwert = allProducts?.filter((product) => product.category === matchingIndex);
        if (qwert && qwert.length > 0) setCleanElem(qwert[0]);
        setBgColor(prevItem.bg);
        setActiveProductIndex((prev) => prev && prev - 1);
      }
    }
    setKnowYourPlaceState(true);
  };

  const onNextHandler = () => {
    if (typeof activeProductIndex === "number" && activeProductIndex < filteredItemCatalog.length - 1) {
      const nextItem = filteredItemCatalog[activeProductIndex + 1];
      if (nextItem) {
        const matchingIndex = nextItem.category;
        setCategories(matchingIndex);
        setCleanElem(allProducts?.filter((product) => product.category === matchingIndex)[0]);
        setBgColor(nextItem.bg);
        setActiveProductIndex((prev) => (prev ?? 0) + 1);
      }
    }
    setKnowYourPlaceState(true);
  };

  const onPrevTag = () => {
    if (!cleanElem || !filteredItem) return;
    const currentIndex = filteredItem.findIndex((item) => item.id === cleanElem.id);
    if (currentIndex > 0) {
      handleClick(currentIndex - 1);
    }
  };

  const onNextTag = () => {
    if (!cleanElem || !filteredItem) return;
    const currentIndex = filteredItem.findIndex((item) => item.id === cleanElem.id);
    if (currentIndex < filteredItem.length - 1) {
      handleClick(currentIndex + 1);
    }
  };

  const blockPlace = useCallback(
    (i: number) => {
      if (typeof itemNumber === "number") {
        return {
          width: childSize(i, "clientWidth"),
          height: childSize(i, "clientHeight"),
          x: childCoor(i, "left") + parentCoor("left") - proCoor("left"),
          y: childCoor(i, "y"),
        };
      }
      return { width: 0, height: 0, x: 0, y: 0 };
    },
    [itemNumber]
  );

  const controls = useAnimation();

  useEffect(() => {
    if (knowYourPlaceState) {
      controls.start({
        scale: [1, 0.9, 1],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [activeProductIndex, knowYourPlaceState]);

  if (loading) return null;

  return (
    <>
      <div ref={refCoor} className="overflow-hidden">
        <AnimatePresence>
          {clickedItem && (
            <div className="products-item">
              {filteredItemCatalog?.map((item, i) =>
                itemNumber === i ? (
                  <motion.div
                    key={i}
                    className={`products-item__bg fixed z-[5]`}
                    initial={{
                      ...blockPlace(activeProductIndex ?? 0),
                      backgroundColor: item.bg,
                      pointerEvents: "none",
                      opacity: 1,
                    }}
                    animate={{
                      width: width,
                      height: !isIpad ? height : "100dvh",
                      backgroundColor: bgColor,
                      x: 0,
                      y: 0,
                    }}
                    exit={{
                      ...blockPlace(activeProductIndex ?? 0),
                    }}
                    transition={{
                      ease: animationTimingFunc,
                      duration: animationDuration,
                    }}></motion.div>
                ) : null
              )}

              <div className="products-item__container flex flex-col relative z-[200] h-full w-full md:px-24 px-5">
                <div className="flex-grow flex flex-wrap lg:items-center items-start content-center w-full h-full relative overflow-y-auto lg:overflow-y-visible">
                  {allProducts?.map((item, i: number) =>
                    itemNumber === i
                      ? [
                          <NavAssortiment
                            key={`nav-${i}`}
                            close={() => handleAnimateClick(i, "close")}
                            index={i}
                            className="w-full flex justify-between absolute top-0 z-50"
                            ref={refNavWidth}
                          />,
                          <motion.div
                            key={`arrows-${i}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.2 }}
                            className="absolute w-full flex justify-between px-2 md:px-0 top-[30%] lg:top-1/2 lg:-translate-y-1/2 z-20 pointer-events-none left-0 right-0">
                            <div className="inline-flex pointer-events-auto pl-2 sm:pl-4 md:pl-10">
                              {activeProductIndex ? (
                                <button onClick={onPrevHandler} className="p-0 hover:scale-110 transition-transform">
                                  <img src={arrowNew} alt="arrow prev category" className="size-10 sm:size-12 md:size-14 lg:size-[72px]" />
                                </button>
                              ) : (
                                <div className="size-10 sm:size-12 md:size-14 lg:size-[72px]" />
                              )}
                            </div>
                            {activeProductIndex !== filteredItemCatalog.length - 1 && (
                              <button
                                onClick={onNextHandler}
                                className="inline-flex pointer-events-auto pr-2 sm:pr-4 md:pr-10 p-0 hover:scale-110 transition-transform"
                                style={{ transform: "scaleX(-1)" }}>
                                <img src={arrowNew} alt="arrow next category" className="size-10 sm:size-12 md:size-14 lg:size-[72px]" />
                              </button>
                            )}
                          </motion.div>,
                          productStates[i] && (
                            <>
                              <motion.div
                                key={`header-product-${i}`}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                layoutId={`${item.id}-${i}`}
                                layout
                                className={`lg:w-1/2 w-full lg:h-2/5 h-auto flex items-center justify-center relative mb-6 lg:mb-0 ${
                                  clickedIndex === i ? " relative z-[10] " : ""
                                }`}>
                                <AnimatePresence mode="wait">
                                  {filteredItem?.map((item, index: number) => {
                                    return cleanElem?.id === item.id ? (
                                      <motion.div
                                        key={index}
                                        initial={{ scale: 0.66 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0.66, opacity: 0 }}
                                        transition={{ ease: "easeOut", duration: 0.3 }}
                                        className={"product-item__imgs product-item__imgs--active h-full w-full flex justify-center"}>
                                        <motion.div animate={controls} className="w-full h-full flex justify-center items-center py-4 lg:py-0">
                                          <LazyLoadImage
                                            className={twMerge(
                                              "object-contain w-[250px] h-[250px] max-w-[250px] max-h-[250px] lg:w-[400px] lg:h-[400px] lg:max-w-[400px] lg:max-h-[400px] xl:w-[490px] xl:h-[490px] 2xl:max-w-[490px] 2xl:max-h-[490px] bg-contain bg-[50%] bg-no-repeat",
                                              item.className
                                            )}
                                            placeholderSrc={item.imgns}
                                            src={item.img}
                                            loading="lazy"
                                            effect="blur"
                                            alt="image"
                                          />
                                        </motion.div>
                                      </motion.div>
                                    ) : null;
                                  })}
                                </AnimatePresence>
                              </motion.div>
                              {filteredItem?.map((item, index) =>
                                cleanElem?.id === item.id ? (
                                  <motion.div
                                    className="lg:w-1/2 w-full lg:pl-10 flex flex-col justify-center mt-8 lg:mt-0 px-4 lg:px-0"
                                    key={`product-descr-${index}`}
                                    variants={container}
                                    transition={{ delay: 0 }}
                                    initial="hidden"
                                    animate="show"
                                    exit={{ opacity: 0 }}
                                    custom={index}>
                                    <BelyaRekaDescriptionCommon
                                      key={index}
                                      className="w-full"
                                      item={item}
                                      animation={items}
                                      textColor={item.textColor}
                                    />
                                  </motion.div>
                                ) : null
                              )}
                            </>
                          ),
                        ]
                      : null
                  )}
                </div>

                <motion.div
                  className="w-full flex items-center justify-center pb-8 pt-4 relative z-[60]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}>
                  <div className="w-full max-w-7xl flex items-center justify-between gap-2 sm:gap-4 px-2 sm:px-4">
                    <button
                      onClick={onPrevTag}
                      className="pt-2 pb-1 bg-black rounded-full flex-shrink-0"
                      disabled={filteredItem && cleanElem && filteredItem.indexOf(cleanElem) === 0}>
                      <img src={arrow} alt="prev tag" className="w-4 h-3 sm:w-6 sm:h-5" />
                    </button>
                    <div className="flex-1 overflow-hidden mx-2 sm:mx-4">
                      <Swiper
                        ref={swiperRef}
                        slidesPerView="auto"
                        centeredSlides={false}
                        centerInsufficientSlides={true}
                        spaceBetween={10}
                        className="flex justify-center"
                        modules={[Navigation]}>
                        {filteredItem?.map((item, index) => (
                          <SwiperSlide key={index} style={{ width: "auto" }}>
                            <motion.button
                              className={`product-button px-4 sm:px-6 py-2 rounded-full whitespace-nowrap transition-all duration-200 text-sm sm:text-base
                                ${
                                  item.id === cleanElem?.id
                                    ? "bg-blue-500 text-white shadow-lg scale-105"
                                    : "bg-white text-gray-800 hover:bg-gray-100"
                                }`}
                              onClick={() => handleClick(index)}>
                              {item.title}
                            </motion.button>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <button onClick={onNextTag} className="pt-2 pb-1 bg-black rounded-full flex-shrink-0">
                      <div style={{ transform: "scaleX(-1)" }}>
                        <img src={arrow} alt="next tag" className="w-4 h-3 sm:w-6 sm:h-5" />
                      </div>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

        <section className="grid 2xl:grid-cols-4 grid-cols-1 lg:grid-cols-4 sm:grid-cols-2" ref={refContainer}>
          {(isMobile ? newInfiniteItems : filteredItemCatalog)?.map((item, i) => (
            <div key={i} className={`h-80 box-border cover-products`}>
              {!productStates[i] && (
                <div
                  className={`${clickedIndex === i ? "relative z-[70]" : ""}`}
                  style={{ backgroundColor: item.bg }}
                  onClick={() => handleAnimateClick(i, "show")}
                  onMouseMove={() => setHoveredItem(i)}
                  aria-disabled="false">
                  <motion.div
                    className={`belayareka__inner text-center flex justify-center items-center h-80 ${item.className ?? ""}`}
                    transition={{
                      duration: knowYourPlaceState ? 0 : animationDuration,
                      ease: knowYourPlaceState ? "linear" : animationTimingFunc,
                    }}
                    layoutId={`${item.id}-${i}`}>
                    <img
                      className={`h-3/5 object-contain cover-products-image`}
                      style={{
                        willChange: "transform",
                        transformStyle: "preserve-3d",
                        transition: "all .4s ease 0s",
                      }}
                      src={item.imgns || ""}
                      alt={item.title}
                    />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>

      {hasMore && isMobile && (
        <div className="flex justify-center w-full items-center">
          <button
            className="bg-hexahrome px-10 text-white py-5 rounded-full text-base font-semibold -z-0 mt-5 button__focus"
            onClick={() => loadMoreCatalogs(filteredItemCatalog, 4)}>
            Показать еще
          </button>
        </div>
      )}
    </>
  );
};

export default BelyaRekaProductsSection;
