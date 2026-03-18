import { v4 } from "uuid";
import type { IProductCatalog } from "ts/types/common.interface";

const oneVolume = "1,0 л";

// #region milk
// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const ws09 = `${CDN_BASE}/assets/media/picture/assets-epico/09ws.webp`;
const ws08 = `${CDN_BASE}/assets/media/picture/assets-epico/08ws.webp`;
const ws10 = `${CDN_BASE}/assets/media/picture/assets-epico/10ws.png`;
const ws11 = `${CDN_BASE}/assets/media/picture/assets-epico/11ws.webp`;
const ns09 = `${CDN_BASE}/assets/media/picture/assets-epico/09ns.webp`;
const ws54 = `${CDN_BASE}/assets/media/picture/assets-epico/54ws.webp`;
const ws47 = `${CDN_BASE}/assets/media/picture/assets-epico/47ws.webp`;
const ws03 = `${CDN_BASE}/assets/media/picture/assets-epico/03ws.webp`;
const ws02 = `${CDN_BASE}/assets/media/picture/assets-epico/02ws.webp`;
const ns54 = `${CDN_BASE}/assets/media/picture/assets-epico/54ns.webp`;
const ws80 = `${CDN_BASE}/assets/media/picture/assets-epico/80ws.webp`;
const ws81 = `${CDN_BASE}/assets/media/picture/assets-epico/81ws.webp`;
const ws07 = `${CDN_BASE}/assets/media/picture/assets-epico/07ws.webp`;
const ws06 = `${CDN_BASE}/assets/media/picture/assets-epico/06ws.webp`;
const ws24 = `${CDN_BASE}/assets/media/picture/assets-epico/24ws.webp`;
const ws25 = `${CDN_BASE}/assets/media/picture/assets-epico/25ws.webp`;
const ns07 = `${CDN_BASE}/assets/media/picture/assets-epico/07ns.webp`;
const ws55 = `${CDN_BASE}/assets/media/picture/assets-epico/55ws.png`;
const ws17 = `${CDN_BASE}/assets/media/picture/assets-epico/17ws.webp`;
const ws18 = `${CDN_BASE}/assets/media/picture/assets-epico/18ws.webp`;
const ws16 = `${CDN_BASE}/assets/media/picture/assets-epico/16ws.webp`;
const ns16 = `${CDN_BASE}/assets/media/picture/assets-epico/17ns.webp`;
const ws10alt = `${CDN_BASE}/assets/media/picture/assets-epico/10ns.png`;
const ws11alt = `${CDN_BASE}/assets/media/picture/assets-epico/11ns.png`;
const ws12alt = `${CDN_BASE}/assets/media/picture/assets-epico/12ns.png`;
const ws13alt = `${CDN_BASE}/assets/media/picture/assets-epico/71ws.png`;
const ws14alt = `${CDN_BASE}/assets/media/picture/assets-epico/14ws_alt.png`;
const ns70alt = `${CDN_BASE}/assets/media/picture/assets-epico/70ns.png`;
const ws15alt = `${CDN_BASE}/assets/media/picture/assets-epico/15ws_alt.png`;
const ws16alt = `${CDN_BASE}/assets/media/picture/assets-epico/16ws_alt.png`;
const ws17alt = `${CDN_BASE}/assets/media/picture/assets-epico/17ws_alt.png`;
const ws18alt = `${CDN_BASE}/assets/media/picture/assets-epico/18ws_alt.png`;
const ws19alt = `${CDN_BASE}/assets/media/picture/assets-epico/19ws_alt.png`;
const ws20alt = `${CDN_BASE}/assets/media/picture/assets-epico/20ws_alt.png`;
const ws04 = `${CDN_BASE}/assets/media/picture/assets-epico/04ws.png`;
const ws05 = `${CDN_BASE}/assets/media/picture/assets-epico/05ws.png`;
const ws53 = `${CDN_BASE}/assets/media/picture/assets-epico/53ws.webp`;
const ns53 = `${CDN_BASE}/assets/media/picture/assets-epico/53ns.webp`;
const ws52 = `${CDN_BASE}/assets/media/picture/assets-epico/52ws.png`;
const ws22 = `${CDN_BASE}/assets/media/picture/assets-epico/22ws.webp`;
const ws23 = `${CDN_BASE}/assets/media/picture/assets-epico/23ws.png`;
const ns23 = `${CDN_BASE}/assets/media/picture/assets-epico/23ns.png`;
const ns05 = `${CDN_BASE}/assets/media/picture/assets-epico/05ns.png`;
const ws01alt = `${CDN_BASE}/assets/media/picture/assets-epico/01ws.png`;
const ns01alt = `${CDN_BASE}/assets/media/picture/assets-epico/01ns.png`;
const ws02alt = `${CDN_BASE}/assets/media/picture/assets-epico/02ws.png`;
const ws03alt = `${CDN_BASE}/assets/media/picture/assets-epico/ws03.png`;
const ws04alt = `${CDN_BASE}/assets/media/picture/assets-epico/ws04.png`;
const ws05alt = `${CDN_BASE}/assets/media/picture/assets-epico/82ws.webp`;
const ws06alt = `${CDN_BASE}/assets/media/picture/assets-epico/83ws.webp`;
const ws07alt = `${CDN_BASE}/assets/media/picture/assets-epico/84ws.webp`;
const ws31 = `${CDN_BASE}/assets/media/picture/assets-epico/31ws.webp`;
const ws36 = `${CDN_BASE}/assets/media/picture/assets-epico/36ws.webp`;
const ws34 = `${CDN_BASE}/assets/media/picture/assets-epico/34ws.webp`;
const ws33 = `${CDN_BASE}/assets/media/picture/assets-epico/33ws.webp`;
const ws30 = `${CDN_BASE}/assets/media/picture/assets-epico/30ws.webp`;
const ws29 = `${CDN_BASE}/assets/media/picture/assets-epico/29ws.webp`;
const ws28 = `${CDN_BASE}/assets/media/picture/assets-epico/28ws.webp`;
const ws27 = `${CDN_BASE}/assets/media/picture/assets-epico/27ws.webp`;
const ws42 = `${CDN_BASE}/assets/media/picture/assets-epico/42ws.webp`;
const ws40 = `${CDN_BASE}/assets/media/picture/assets-epico/40ws.webp`;
const ws37 = `${CDN_BASE}/assets/media/picture/assets-epico/37ws.webp`;
const ws38 = `${CDN_BASE}/assets/media/picture/assets-epico/38ws.webp`;
const ns37 = `${CDN_BASE}/assets/media/picture/assets-epico/31ns.webp`;
const ws41 = `${CDN_BASE}/assets/media/picture/assets-epico/41ws.webp`;
const ws32 = `${CDN_BASE}/assets/media/picture/assets-epico/32ws.webp`;
const ws35 = `${CDN_BASE}/assets/media/picture/assets-epico/35ws.webp`;
const ws26 = `${CDN_BASE}/assets/media/picture/assets-epico/26ws.webp`;
const ws43 = `${CDN_BASE}/assets/media/picture/assets-epico/43ws.webp`;
const ns43 = `${CDN_BASE}/assets/media/picture/assets-epico/43ns.webp`;
const ws44 = `${CDN_BASE}/assets/media/picture/assets-epico/44ws.webp`;
const ws45 = `${CDN_BASE}/assets/media/picture/assets-epico/45ws.webp`;
const ws46 = `${CDN_BASE}/assets/media/picture/assets-epico/46ws.webp`;
const ws12 = `${CDN_BASE}/assets/media/picture/assets-epico/12ws.webp`;
const ws13 = `${CDN_BASE}/assets/media/picture/assets-epico/13ws.webp`;
const ws14 = `${CDN_BASE}/assets/media/picture/assets-epico/14ws.webp`;
const ws15 = `${CDN_BASE}/assets/media/picture/assets-epico/15ws.webp`;
const ws19 = `${CDN_BASE}/assets/media/picture/assets-epico/19ws.png`;
const ws20 = `${CDN_BASE}/assets/media/picture/assets-epico/20ws.png`;
const ws21 = `${CDN_BASE}/assets/media/picture/assets-epico/21ws.png`;
const ws72 = `${CDN_BASE}/assets/media/picture/assets-epico/72ws.png`;
const ns19 = `${CDN_BASE}/assets/media/picture/assets-epico/19ns.png`;
const ns50 = `${CDN_BASE}/assets/media/picture/assets-epico/50ns.png`;
const ws50 = `${CDN_BASE}/assets/media/picture/assets-epico/50ws.png`;
const ws49 = `${CDN_BASE}/assets/media/picture/assets-epico/49ws.png`;
const ws51 = `${CDN_BASE}/assets/media/picture/assets-epico/51ws.png`;
const ws48 = `${CDN_BASE}/assets/media/picture/assets-epico/48ws.png`;
const ns10 = `${CDN_BASE}/assets/media/picture/assets-epico/10ns.webp`;
const thisev = `${CDN_BASE}/assets/media/picture/assets-epico/37.webp`;
const thisix = `${CDN_BASE}/assets/media/picture/assets-epico/38.webp`;
const ws60 = `${CDN_BASE}/assets/media/picture/assets-epico/60ws.png`;
const ws61 = `${CDN_BASE}/assets/media/picture/assets-epico/61ws.png`;
const ws62 = `${CDN_BASE}/assets/media/picture/assets-epico/62ws.png`;
const ns56 = `${CDN_BASE}/assets/media/picture/assets-epico/56ns.png`;
const ws56 = `${CDN_BASE}/assets/media/picture/assets-epico/56ws.png`;
const ws57 = `${CDN_BASE}/assets/media/picture/assets-epico/57ws.png`;
const ws58 = `${CDN_BASE}/assets/media/picture/assets-epico/58ws.png`;
const ws59 = `${CDN_BASE}/assets/media/picture/assets-epico/59ws.png`;
const ns63 = `${CDN_BASE}/assets/media/picture/assets-epico/63ns.png`;
const ns64 = `${CDN_BASE}/assets/media/picture/assets-epico/64ns.png`;
const ns65 = `${CDN_BASE}/assets/media/picture/assets-epico/65ns.png`;
const ns79 = `${CDN_BASE}/assets/media/picture/assets-epico/79ns.png`;
const ns66 = `${CDN_BASE}/assets/media/picture/assets-epico/66ns.png`;
const ns67 = `${CDN_BASE}/assets/media/picture/assets-epico/67ns.png`;
const ns68 = `${CDN_BASE}/assets/media/picture/assets-epico/68ns.png`;
const ns69 = `${CDN_BASE}/assets/media/picture/assets-epico/69ns.png`;
const ns75 = `${CDN_BASE}/assets/media/picture/assets-epico/75ns.png`;
const ns76 = `${CDN_BASE}/assets/media/picture/assets-epico/76ns.png`;
const ns77 = `${CDN_BASE}/assets/media/picture/assets-epico/77ns.png`;

const milkProps = {
  category: "Молоко",
  volume: oneVolume,
  bg: "#60c0e5",
};

const milkData = [ws09, ws08, ws11, ws10].map((img, index) => ({
  title: `Молоко ${index % 2 === 0 ? "3,2" : "2,5"}%`,
  img: img,
  className: `${index > 1 ? "catalog-md" : ""}`,
  isShow: index === 0,
  weight: `${index % 2 === 0 ? "3,2" : "2,5"}%`,
  ...milkProps,
  imgns: index === 0 ? ns09 : undefined,
}));
// #endregion

// #region biokefir

const biokefirTitle = ["ваниль", "банан", "смородина", "клубника", "фруктовый микс", "облепиха"];

const biokefirProps = {
  category: "Биокефир",
  volume: oneVolume,
  weight: "2,5%",
};

const biokefirColor = [
  "#ffb459",
  "#e5e573",
  "#9973e5", // смородина
  "#e57373", // клубничный
];

const biokefirData = [ws54, ws47, ws03, ws02, ws80, ws81].map((img, index) => ({
  id: v4(),
  title: `Биокефир ${biokefirTitle[index] ?? ""}`,
  ...biokefirProps,
  className: "",
  img: img,
  bg: biokefirColor[index],
  isShow: index === 0,
  imgns: index === 0 ? ns54 : undefined,
}));
// #endregion

// #region kefir

const kefirProps = {
  category: "Кефир",
  volume: oneVolume,
  weight: undefined,
};

const kefirTitle = ["Кефир 2,5%", "Кефир 1,0%", "Кефир 2,5%", "Кефир 1,0%", "Кефир 1%"];

const kefirData = [ws07, ws06, ws24, ws25, ws55].map((img, index) => ({
  title: kefirTitle[index],
  //   title: `Кефир ${index % 2 === 0 ? "2,5" : "1,0"}%`,
  img: img,
  className: "catalog-md",
  ...kefirProps,
  isShow: index === 0,
  bg: "#26AF98",
  imgns: index === 0 ? ns07 : undefined,
}));
// #endregion

// #region cheese

const cheeseTitle = [
    "Сыр моцарелла", // ws17
    "Сыр голландский", // ws18
    "Сыр российский", // ws16
    "Чечил классический", // ws10alt
    "Чечил не копченый", // ws11alt
    "Чечил с перцем", // ws12alt
    "Сыр брынза", // ws13alt
    "Сыр голландский", // ns70alt
    "Сыр голландский", // ws14alt
    "Сыр моцарелла", // ws15alt
    "Сыр российский", // ws16alt
    "Сыр российский", // ws17alt
    "Сыр сулугуни копченый", // ws18alt
    "Сыр сулугуни", // ws19alt
    "Сыр Колбасный", // ws20alt
  ],
  cheeseBGColor = [
    "#d9825b",
    "#529fc9",
    "#c7ac71",
    "#d48d5c",
    "#f9b343",
    "#ef816f",
    "#61933a",
    "#84b4e2",
    "#337dc1",
    "#df5034",
    "#c59848",
    "#d8a657",
    "#eb5e28",
    "#3bc2bc",
    "#dda37c",
  ];

const cheeseData = [ws17, ws18, ws16, ws10alt, ws11alt, ws12alt, ws13alt, ns70alt, ws14alt, ws15alt, ws16alt, ws17alt, ws18alt, ws19alt, ws20alt].map(
  (img, index) => ({
    title: cheeseTitle[index],
    // img: elem,
    img: img,
    className: "catalog-md",
    volume: "90 г",
    weight: "2,5%",
    category: "Сыр",
    isShow: index === 0,
    bg: cheeseBGColor[index],
    imgns: index === 0 ? ns16 : undefined,
  })
);
// #endregion

// #region belyaRekaData

const chalapProps = {
  category: "Чалап",
  volume: "200 г",
  weight: 2.5,
  isShow: false,
  className: "h-[250px] ss:h-[380px] 2xl:h-[380px] mac:h-[480px]",
};

const belyaRekaData = [
  {
    title: "Чалап",
    img: ws05,
    className: "catalog-sm mac:h-[480px]",
    isShow: true,
    imgns: ns05,
    volume: 2.5,
    category: chalapProps.category,
    weight: chalapProps.weight,
    bg: "#41c3cc",
  },
  {
    title: "Чалап",
    img: ws04,
    volume: "200 г",
    isShow: false,
    className: "h-[250px] ss:h-[380px] 2xl:h-[380px] mac:h-[480px]",
    category: chalapProps.category,
    weight: chalapProps.weight,
    bg: "#41c3cc",
  },
  {
    title: "Зернистый творог 9%",
    img: ws53,
    className: "catalog-lg",
    volume: "200 г",
    weight: 2.5,
    category: "Зернистый творог",
    bg: "#E58673",
    imgns: ns53,
    isShow: true,
  },
  {
    title: "Зернистый творог 5%",
    img: ws52,
    className: "catalog-lg",
    volume: "200 г",
    weight: 2.5,
    category: "Зернистый творог",
    isShow: false,
    bg: "#d7bf83",
  },
  {
    title: "Домашний Айран",
    img: ws01alt, // ws01,
    className: "catalog-sm",
    volume: "1,0 л",
    weight: 2.5,
    category: "Айран",
    isShow: true,
    bg: "rgb(199, 211, 137)",
    imgns: ns01alt, //ws01,
  },
  {
    title: "Айран клубника домашний",
    img: ws02alt, // ws01,
    className: "catalog-sm",
    volume: "1,0 л",
    weight: 2.5,
    category: "Айран",
    isShow: false,
    bg: "rgb(199, 211, 137)",
  },
  {
    title: "Айран персик домашний",
    img: ws03alt, // ws01,
    className: "catalog-sm",
    volume: "1,0 л",
    weight: 2.5,
    category: "Айран",
    isShow: false,
    bg: "rgb(199, 211, 137)",
  },
  {
    title: "Айран сладкий домашний",
    img: ws04alt, // ws01,
    className: "catalog-sm",
    volume: "1,0 л",
    weight: 2.5,
    category: "Айран",
    isShow: false,
    bg: "rgb(199, 211, 137)",
    imgns: ws04alt, //ws01,
  },
  {
    title: "Айран вишня домашний",
    img: ws05alt, // ws01,
    className: "catalog-sm",
    volume: "1,0 л",
    weight: 2.5,
    category: "Айран",
    isShow: false,
    bg: "rgb(199, 211, 137)",
  },
  {
    title: "Айран киви домашний",
    img: ws06alt, // ws01,
    className: "catalog-sm",
    volume: "1,0 л",
    weight: 2.5,
    category: "Айран",
    isShow: false,
    bg: "rgb(199, 211, 137)",
  },
  {
    title: "Айран лесные ягоды домашний",
    img: ws07alt, // ws01,
    className: "catalog-sm",
    volume: "1,0 л",
    weight: 2.5,
    category: "Айран",
    isShow: false,
    bg: "rgb(199, 211, 137)",
  },
  {
    title: "Сгущенка цельным молоком",
    img: ws23,
    className: "catalog-sm",
    volume: "400 г",
    weight: 2.5,
    category: "Сгущенка",
    isShow: true,
    bg: "#3998E5",
    imgns: ns23,
  },
  {
    title: "Сгущенка обезжиренное с сахором",
    img: ws22,
    className: "catalog-sm",
    volume: "400 г",
    weight: 2.5,
    category: "Сгущенка",
    isShow: false,
    bg: "#3998E5",
  },
  ...cheeseData,
];
// #endregion

// #region dessert (MERGED)

// Imports from dessertPieces

const desertImg = [
  ws31,
  ws36,
  ws34,
  ws33,
  ws30,
  ws29,
  ws28,
  ws27,
  ws42,
  ws40,
  ws38,
  ws37,
  ws41,
  ws32,
  ws35,
  ws26, // Added pieces
];

const dessertTitle = [
  "Персик-Маракуйя",
  "Семечка",
  // "Киви",
  "Фисташка",
  "Ананас",
  // "Арахис",
  "Дыня",
  "Черника",
  "Банан",
  "Абрикос-Манго",
  // "Миндаль",
  "Изюм",
  // "Шоколад",
  "Вишня",
  // "Злаки",
  "Ваниль",
  "Клубника",
  // Added pieces titles
  "Шоколад",
  "Арахис",
  "Киви",
  "Миндаль",
];

const dessertWeight = "200 гр";

const dessertColor = [
  "#7cd9d1", // Персик-Маракуйя
  "#ccc", // Семечка
  "#c8d977", // Фисташка
  "#ecd1c3", // Ананас
  "#ffeb66", // Дыня
  "#73b6e5", // Черника
  "#e5de73", // Банан
  "#e57ee5", // Абрикос-Манго
  "#a39dc3", // Изюм
  "#e5ac5c", // Вишня
  "#e5de73", // Ваниль
  "#e55c5c", // Клубника
  // Added pieces colors
  "#BE8C3C", // Шоколад
  "#bf8ae5", // Арахис
  "#c6e567", // Киви
  "#e5ac39", // Миндаль
];

const dessertData = desertImg.map((img, index) => ({
  id: v4(),
  title: `Десерт ${dessertTitle[index] ?? ""}`,
  lifeCycle: "10 суток",
  weight: "2,5%",
  volume: dessertWeight,
  img: img,

  imgns: index === 0 ? ns37 : undefined,
  className: "catalog-sm",
  category: "Десерт",
  price: 86,
  oldPrice: 149,
  count: 0,
  startingPrice: 86,
  min: 10,
  max: 50,

  isShow: index === 0,
  bg: dessertColor[index],
}));
// #endregion

// #region tvorog

const tvorogData = [
  {
    title: "Творог 0%",
    img: ws43, //`${httpsCoreUrl}/43ws.webp`,
    className: "catalog-sm",
    volume: "400 г",
    weight: 0,
    category: "Творог",
    isShow: true,
    bg: "#8ECDDB",
    imgns: ns43,
  },
  {
    title: "Творог 5%",
    img: ws45, // `${httpsCoreUrl}/45ws.webp`,
    className: "catalog-sm",
    volume: "400 г",
    weight: 5,
    category: "Творог",
    isShow: false,
    bg: "#77D22D",
  },
  {
    title: "Творог 9%",
    img: ws46, //`${httpsCoreUrl}/46ws.webp`,
    className: "catalog-sm",
    volume: "400 г",
    weight: 9,
    category: "Творог",
    bg: "#DE822C",
    isShow: false,
  },
  {
    title: "Творог 18%",
    img: ws44, //`${httpsCoreUrl}/44ws.webp`,
    className: "catalog-sm",
    volume: "400 г",
    weight: 18,
    category: "Творог",
    isShow: false,
    bg: "#D98CA6",
  },
];
// #endregion

// #region smetana

const bgColor = ["#9CC95C", "#41c5e6", "#7cc71c", "#54b5d7"];

const smetanaData = [ws12, ws13, ws14, ws15].map((img, index) => ({
  title: `Сметана ${index % 2 === 0 ? "20" : "15"}%`,
  img: img,
  className: "catalog-sm",
  volume: `${index >= 2 ? "200" : "400"} гр`,
  category: "Сметана",
  isShow: index === 0,
  weight: `${index % 2 === 0 ? "20" : "15"}%`,
  bg: bgColor[index],
  imgns: index === 0 ? ws12 : undefined,
}));
// #endregion

// #region yogurt

const yogurtTitle = ["банан", "абрикос", "клубника", "шабдалы"];
const yogurtColor = [
  "#73e5b6", // банан
  "#e5a15c", // абрикос
  "#e58673", // клубничный
  "#dda572", // шабдалы
];

const yogurtData = [ws19, ws20, ws21, ws72].map((img, index) => ({
  title: `Йогурт ${yogurtTitle[index] ?? ""}`,
  img: img,
  className: "catalog-sm",
  volume: "90 г",
  weight: "2,5%",

  category: "Йогурт",
  isShow: index == 0,
  bg: yogurtColor[index],
  imgns: ns19,
}));
// #endregion

// #region tomolok

const tomolokTitle = ["классический", "брусника", "облепиха", "черника"],
  tomolokColor = ["#62ABCC", "#db006f", "#df4b1a", "#7b0e79"];

const tomolokData = [ws50, ws49, ws51, ws48].map((img, index) => ({
  id: v4(),
  title: `Томолок ${tomolokTitle[index] ?? ""}`,
  lifeCycle: "10 суток",
  volume: "400 г",
  img: img,
  className: "catalog-md",
  category: "Томолок",
  weight: "2,5%",
  bg: tomolokColor[index],
  textColor: index === tomolokTitle.length - 1 ? "#ffffff" : undefined,
  isShow: index === 0,
  imgns: index === 0 ? ns50 : undefined,
}));
// #endregion

// #region batter

const batterTitle = [
    "Масло традиционное",
    "Масло домашнее сливочное",
    "Масло Крестьянское",
    "Масло легкое",
    "Жогорку сапаттагы май",
    "Каймак май женил",
  ],
  batterBGColor = ["#e1d1b9", "#f4a498", "#ecd849", "#c5c7c8", "#ececec", "#252525"];

const batterData = [ns10, thisev, thisix, ws60, ws61, ws62].map((img, index) => ({
  id: v4(),
  title: batterTitle[index],
  lifeCycle: "10 суток",
  volume: "400 г",
  img: img,
  className: "catalog-xs",
  category: "Масло",
  weight: "2,5%",
  bg: batterBGColor[index],
  //   textColor: "#ffffff",
  textColor: index === batterTitle.length - 1 ? "#ffffff" : undefined,
  isShow: index === 0,
  imgns: index === 0 ? ns10 : undefined,
}));
// #endregion

// #region bifiLife

const bifiLifeTitle = ["ананаса", "малина-землянина", "манго маракуя", "дыни"],
  bifiLifeBGColor = ["#659c73", "#e8609e", "#a45373", "#b1ce7f"];

const bifiLifeData = [ws56, ws57, ws58, ws59].map((img, index) => ({
  id: v4(),
  title: `Bifi Life с кусочками ${bifiLifeTitle[index] ?? ""}`,
  lifeCycle: "10 суток",
  volume: "400 г",
  img: img,
  className: "catalog-xs",
  category: "Bifi Life",
  weight: "2,5%",
  bg: bifiLifeBGColor[index],
  isShow: index === 0,
  imgns: index === 0 ? ns56 : undefined,
}));
// #endregion

// #region BIGBatter

const BIGBatterTitle = ["Масло традиционное", "Жогорку сапаттагы май", "Масло Крестьянское", "Масло легкое"],
  BIGBatterBGColor = ["#d4c4b8", "#ebebec", "#dbd27d", "#dededf"];

const BIGBatterData = [ns64, ns63, ns65, ns79].map((img, index) => ({
  id: v4(),
  title: BIGBatterTitle[index],
  lifeCycle: "10 суток",
  volume: "400 г",
  img: img,
  className: "catalog-xs",
  category: "BIGBatter",
  weight: "2,5%",
  bg: BIGBatterBGColor[index],
  isShow: index === 0,
  imgns: index === 0 ? ns64 : undefined,
}));
// #endregion

// #region BIGDessert

// 2 group
// import ns78 from "/assets/media/picture/assets-epico/78ns.png";

// prettier-ignore
const BIGTvorogTitle = ["Мейиз", "Кара орук", "Шоколад"], BIGTvorogBGColor = ["#8080b5", "#702a61", "#755136"];

// prettier-ignore
const BIGDessertTitle = ["Ананас", "Банан", "Киви", "Клубника", ...BIGTvorogTitle], BIGDessertBGColor = ["#d69a79", "#e5de73", "#c8de69", "#e55c5c", ...BIGTvorogBGColor];

const BIGDessertData = [ns66, ns67, ns68, ns69, ns76, ns75, ns77].map((img, index) => ({
  id: v4(),
  title: `Десерт ${BIGDessertTitle[index] ?? ""}`,
  lifeCycle: "10 суток",
  volume: "500 г",
  img: img,
  className: "catalog-xs",
  category: "BIGDessert",
  weight: "2,5%",
  bg: BIGDessertBGColor[index],
  isShow: index === 0,
  imgns: index === 0 ? ns66 : undefined,
  // textColor: `${index === BIGDessertTitle.length ? "#ffffff" : ""}`,
}));
// #endregion

const allProducts = [
  ...milkData,
  ...biokefirData,
  ...kefirData,
  ...belyaRekaData,
  ...dessertData,
  ...tvorogData,
  // ...dessertPiecesData, // REMOVED (merged into dessertData)
  ...smetanaData,
  ...yogurtData,
  ...tomolokData,
  ...batterData,
  ...bifiLifeData,
  ...BIGBatterData,
  ...BIGDessertData,
];

const createProduct: (product: Omit<IProductCatalog, "id">) => IProductCatalog = ({
  title,
  props_product: propsProduct,
  img,
  className,
  category,
  price,
  old_price: oldPrice,
  starting_price: startingPrice,
  min,
  max,
  isShow,
  imgns,
  textColor,
  bg,
}) => ({
  id: v4(),
  title,
  props_product: propsProduct,
  img,
  className,
  category,
  price,
  old_price: oldPrice,
  textColor,
  count: 0,
  starting_price: startingPrice,
  min,
  max,
  isShow,
  imgns,
  bg,
});

/* volume, weight, */
export const catalogElemMockNew: IProductCatalog[] = (allProducts as unknown as IProductCatalog[])
  .flat()
  .map(({ className, title, img, category, isShow, bg, imgns, textColor }) =>
    createProduct({
      title: title,
      props_product: {
        life_cycle: 10,
        weight: 2.5,
        volume: 2.5,
        temperature_keep: "+2°C до +6°C",
      },
      img,
      textColor,
      className: className ?? "",
      category,
      price: 86,
      old_price: 149,
      starting_price: 86,
      min: 10,
      max: 50,
      isShow,
      bg,
      imgns,
    })
  );
