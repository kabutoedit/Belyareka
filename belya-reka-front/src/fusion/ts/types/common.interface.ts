import { CSSProperties, ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface ICommonElements extends IChildren {
  styled?: Record<string, string>;
  className?: string;
}

export interface ICompanyCartMain extends Pick<ICommonElements, "className"> {
  lottieMock: object;
  title: string;
  descr: string;
}

export interface IBannerCommon {
  className?: string | undefined;
  banner: string;
  bannerTitle: string;
  bannerDescription: ReactNode;
  styles?: Record<string, string>;
}

export interface ICommonItems {
  [key: string]: string;
}

export interface IValuesCompany extends Omit<ICommonElements, "children"> {
  img: string | undefined;
  title: string;
  descr: string;
}

export interface ICommonApi extends Omit<ICommonElements, "children"> {
  api: {
    img: string | undefined;
    styles: CSSProperties | undefined;
  }[];
}

export interface IContactItemCommon {
  className?: string | undefined;
  cityName: string | undefined;
  item: {
    icon: string | undefined;
    address: string | undefined;
    link: string | undefined;
  }[];
}

export interface IProductUI {
  id: string | number;
  title: string;
  starting_price: number;
  img: string;
  value: number;
  // description: string | undefined; для блока ассортимент
  weight: number;
  className: string | undefined;
  category: string;
  businessCategory: string;
  price: number;
  old_price: number | null;
  newCount: number;
  inToggled: boolean;
  bg: string | undefined;
  imgns?: string;
  isShow: boolean;
  count?: number | null;
  textColor?: "#252525" | "#ffffff" | string;

  min?: number;
  max?: number;

  isHas?: boolean;

  props_product: {
    id?: string;
    life_cycle: number;
    weight: number;
    volume: number;
    temperature_keep?: string;
    product?: string;
  } | null;
}

// export interface ICatalogUI {}

export interface IProductCatalog
  extends Pick<
    IProductUI,
    | "count"
    | "id"
    | "props_product"
    | "className"
    | "title"
    | "img"
    | "price"
    | "old_price"
    | "category"
    | "starting_price"
    | "min"
    | "max"
    | "isShow"
    | "bg"
    | "imgns"
    | "textColor"
  > {}

export interface IProductCountItem extends Pick<IProductUI, "count" | "price"> {}

export interface IProductsCatalogDelivery
  extends Pick<IProductUI, "id" | "title" | "category" | "img" | "price" | "old_price" | "props_product" | "starting_price" | "count" | "isHas"> {}

export interface ICatalogSlice {
  catalogs: IProductCatalog;
}

export interface IRaionBtn {
  area: string;
  title: string;
  coor: number[];
}

export interface StepStyleProps {
  step?: string; // Или более точный тип, который соответствует вашим ожиданиям
  color?: string | undefined;
  // disabled?: boolean;
}

export type withLineType = "0%" | "20%" | "40%" | "60%" | "80%" | "100%";
export interface StepContainerProps {
  width?: string; // Или более точный тип, который соответствует вашим ожиданиям
  withline?: withLineType;
  lineanimation?: "true" | "false";
}

export interface achievItem {
  className?: string;
  lottie: object;
  count: number | 0;
  description: string | undefined;
  suffix: string | undefined;
}

interface Step {
  id?: string;
  label: string;
  description: string;
  step: number;
  img?: string;
}

export interface IProgressBar {
  step: Step[];
  button?: boolean;
  className?: string | undefined;
}

export interface IMainNewsCommon {
  id: number;
  className?: string;
  styled?: CSSProperties;
  img: string | undefined;
  title: string | undefined;
  description: string | undefined;
}
export interface SliderELement {
  activeIndex?: number;
  index?: number;
  activeSlide?: boolean;
  durationSlide?: number;
}

export interface PressCenterItem {
  id: number;
  slider_image: string;
  title: string;
  date: string;
  description: string;
  subtitle: string;
  primary_image: string;
  secondary_image: string;
  descr_bold: string;
}
