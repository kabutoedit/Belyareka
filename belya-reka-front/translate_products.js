import axios from "axios";

const TOKEN =
  "b4af051d27fdbf105a67dc49dbfaba74ead486539444d0463344190e00f7d721049950aee91df22e4462d2f7a093ff168160e7bd61dac0c6d7e9f5fa614c3c4ef4cf3ae9f20fd5d56f760995a51ca88cad895a529258c784c9a653f70e9974b388c95a5fab991729a3eaada0ec7b18f0dc7502a89272f6ccdb692c8f641d7a16";
const BASE_URL = "https://belayareka.kg/api";

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

// Словарь для точного перевода по названиям из твоей админки
const areaDict = {
  Все: { en: "All", ky: "Баары" },
  "Баткенская область": { en: "Batken Region", ky: "Баткен облусу" },
  "Город Бишкек": { en: "Bishkek City", ky: "Бишкек шаары" },
  Бишкек: { en: "Bishkek City", ky: "Бишкек шаары" },
  "Джалал-Абадская область": { en: "Jalal-Abad Region", ky: "Жалал-Абад облусу" },
  "Иссык-Кульская область": { en: "Issyk-Kul Region", ky: "Ысык-Көл облусу" },
  "Чуйская область": { en: "Chuy Region", ky: "Чүй облусу" },
  "Ошская область": { en: "Osh Region", ky: "Ош облусу" },
  "Таласская область": { en: "Talas Region", ky: "Талас облусу" },
  "Нарынская область": { en: "Naryn Region", ky: "Нарын облусу" },
};

function getTranslation(ruTitle, lang) {
  if (!ruTitle) return "";
  const cleanTitle = ruTitle.trim();
  if (areaDict[cleanTitle]) return areaDict[cleanTitle][lang];

  for (const key of Object.keys(areaDict)) {
    if (cleanTitle.toLowerCase().includes(key.toLowerCase().split(" ")[0])) {
      return areaDict[key][lang];
    }
  }
  return cleanTitle;
}

async function translateSalesAreas() {
  try {
    console.log("📥 Загружаем регионы продаж вместе с координатами...");

    // Загружаем русские регионы
    const res = await axios.get(`${BASE_URL}/sales-areas?locale=ru&pagination[pageSize]=100`, { headers });
    const areas = res.data.data;

    if (!areas || areas.length === 0) {
      console.log("⚠️ Регионы не найдены. Проверь эндпоинт /api/sales-areas");
      return;
    }

    for (const item of areas) {
      const { id, attributes } = item;
      const ruTitle = attributes.title;

      // Вытаскиваем координаты и порядок
      const latitude = attributes.lat;
      const longitude = attributes.lng;
      const orderNum = attributes.order ?? 0;

      for (const locale of ["ky", "en"]) {
        try {
          const translatedTitle = getTranslation(ruTitle, locale);

          await axios.post(
            `${BASE_URL}/sales-areas/${id}/localizations`,
            {
              locale: locale,
              title: translatedTitle,
              // Прокидываем координаты и порядок
              lat: latitude,
              lng: longitude,
              order: orderNum,
            },
            { headers }
          );

          console.log(`✅ ${locale.toUpperCase()}: ${ruTitle} -> ${translatedTitle} (lat: ${latitude}, lng: ${longitude}, order: ${orderNum})`);
        } catch (err) {
          if (err.response?.status === 400) {
            console.log(`ℹ️ Регион "${ruTitle}" (${locale}) уже локализован.`);
          } else {
            console.error(`❌ Ошибка на ID ${id} (${locale}):`, err.response?.data || err.message);
          }
        }
      }
    }
    console.log("🏁 Все регионы продаж с координатами успешно переведены!");
  } catch (error) {
    console.error("⛔️ Ошибка скрипта:", error.message);
  }
}

translateSalesAreas();
