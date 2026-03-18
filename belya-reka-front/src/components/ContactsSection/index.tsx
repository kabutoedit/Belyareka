import { type FC, useState, useEffect } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import ContainerLayout from "layout/ContainerLayout";
import ContactItemCommon from "common/ContactItemCommon";
import ContactsSectionForm from "common/contactsSectionForm";
import { $api } from "../../api";

// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const banner = `${CDN_BASE}/assets/media/picture/Banner_1.png`;
const locationIcon = `${CDN_BASE}/assets/media/picture/localSvg.svg`;
const telephoneIcon = `${CDN_BASE}/assets/media/picture/telephone.svg`;
const mailIcon = `${CDN_BASE}/assets/media/picture/mail.svg`;

import BannerCommon from "common/bannerCommon";
import Space from "common/Space";
import { IContactItemCommon } from "ts/types/common.interface";

// Интерфейсы для Strapi API
interface StrapiContactItem {
  id: number;
  type: "address" | "email" | "phone";
  value: string;
  link: string | null;
}

interface StrapiContactCard {
  id: number;
  documentId: string;
  cityName: string;
  order: number;
  contacts: StrapiContactItem[];
}

interface StrapiDepartment {
  id: number;
  documentId: string;
  title: string;
  order: number;
  contact_cards: StrapiContactCard[];
}

interface TabData {
  title: string;
  data: IContactItemCommon["item"][];
  city: string[];
}

// Функция для получения иконки по типу контакта
const getIconByType = (type: string): string => {
  const normalizedType = type?.toLowerCase();
  switch (normalizedType) {
    case "email":
      return mailIcon;
    case "phone":
      return telephoneIcon;
    case "address":
    default:
      return locationIcon;
  }
};

// Функция для генерации ссылки по типу контакта
const getLinkByType = (type: string, value: string): string => {
  const normalizedType = type?.toLowerCase();
  switch (normalizedType) {
    case "email":
      return `mailto:${value}`;
    case "phone":
      return `tel:${value}`;
    case "address":
    default:
      return ""; // Адрес без ссылки
  }
};

// Функция для преобразования данных из Strapi
const transformDepartments = (departments: StrapiDepartment[]): TabData[] => {
  if (!departments || !Array.isArray(departments)) {
    return [];
  }

  return departments
    .filter((dept) => dept && dept.title)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map((dept) => {
      const cards = dept.contact_cards || [];
      const sortedCards = Array.isArray(cards) ? [...cards].sort((a, b) => (a.order || 0) - (b.order || 0)) : [];

      return {
        title: dept.title,
        data: sortedCards.map((card) => {
          const contacts = card.contacts || [];
          return contacts.map((contact) => ({
            icon: getIconByType(contact.type),
            address: contact.value,
            link: getLinkByType(contact.type, contact.value),
          }));
        }),
        city: sortedCards.map((card) => card.cityName || ""),
      };
    });
};

const classCommonTablist =
  "flex justify-center items-center xl:py-8 px-24 py-4 text-center cursor-pointer bg-elephant whitespace-nowrap rounded-t-3xl";
const classCommonTabPanel = "grid grid-cols-1 lg:grid-cols-2 gap-5";

const ContactsSection: FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabData, setTabData] = useState<TabData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        // Deep populate: contact_cards и их contacts
        const response = await $api.get("/contact-departments", {
          params: {
            "populate[contact_cards][populate][0]": "contacts",
            "sort[0]": "order:asc",
          },
        });

        const departments = response.data.data as StrapiDepartment[];

        const transformedData = transformDepartments(departments);

        setTabData(transformedData);
      } catch (error) {
        console.error("Ошибка загрузки отделов:", error);
        setTabData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  // Определяем активную категорию или "Нет Отдела" если табов нет
  const activeCategory = tabData.length > 0 ? tabData[tabIndex]?.title : "Нет Отдела";
  const hasTabs = tabData.length > 0;

  if (isLoading) {
    return (
      <section className="relative">
        <BannerCommon
          banner={banner}
          bannerTitle="Контакты"
          bannerDescription={
            <p className="text-white md:text-2xl text-lg text-balance block">
              Точки продаж молочной продукции <br /> «Белая река» созданной по принципу «от поля до прилавка»
            </p>
          }
        />
        <Space height={"100px"} />
        <ContainerLayout>
          <div className="flex justify-center items-center py-20">
            <p className="text-lg text-gray-500">Загрузка...</p>
          </div>
        </ContainerLayout>
      </section>
    );
  }

  // Если нет табов - показываем только форму
  if (!hasTabs) {
    return (
      <section className="relative">
        <BannerCommon
          banner={banner}
          bannerTitle="Контакты"
          bannerDescription={
            <p className="text-white md:text-2xl text-lg text-balance block">
              Точки продаж молочной продукции <br /> «Белая река» созданной по принципу «от поля до прилавка»
            </p>
          }
        />
        <Space height={"100px"} />
        <ContainerLayout>
          <div>
            <ContactsSectionForm category="Нет Отдела" />
          </div>
        </ContainerLayout>
      </section>
    );
  }

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} direction="ltr">
      <section className="relative">
        <BannerCommon
          banner={banner}
          bannerTitle="Контакты"
          bannerDescription={
            <p className="text-white md:text-2xl text-lg text-balance block">
              Точки продаж молочной продукции <br /> «Белая река» созданной по принципу «от поля до прилавка»
            </p>
          }
        />
        <div className="flex justify-center w-full">
          <div className="absolute bottom-0 xl:overflow-hidden overflow-x-scroll xl:w-auto w-full xl:px-0 z-[2]">
            <TabList className={"flex gap-x-8"}>
              {tabData.map((item, index) => (
                <Tab key={index} className={`${classCommonTablist}`}>
                  {item.title}
                </Tab>
              ))}
            </TabList>
          </div>
        </div>
      </section>

      <Space height={"100px"} />

      <ContainerLayout>
        <div>
          {tabData?.map((item, index) => (
            <TabPanel key={index} className={`${classCommonTabPanel}`}>
              {item.data?.map((el, cardIndex) => (
                <div key={cardIndex} className={`col-span-1 sm:flex flex-col`}>
                  <ContactItemCommon className="grid-span-1" cityName={item.city[cardIndex]} item={el} />
                </div>
              ))}
            </TabPanel>
          ))}
        </div>

        <div>
          <ContactsSectionForm category={activeCategory} />
        </div>
      </ContainerLayout>
    </Tabs>
  );
};

export default ContactsSection;
