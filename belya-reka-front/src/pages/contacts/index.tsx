// import type { FC } from "react";
// import { Helmet } from "react-helmet";

// import { ErrorOfEdges } from "data/imports/imports.naming";
// import ContactsSection from "components/ContactsSection";
// import PageError from "common/pageError";

// const components = [ContactsSection];

// const Contacts: FC = () => (
//   <>
//     <Helmet>
//       <title> Контакты для информации — Белая река продукты питания </title>
//     </Helmet>

//     <main>
//       {components.map((MainComponent, index) => (
//         <ErrorOfEdges key={index} fallback={<PageError />}>
//           <MainComponent />
//         </ErrorOfEdges>
//       ))}
//     </main>
//   </>
// );

// export default Contacts;

import { type FC } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { ErrorOfEdges } from "data/imports/imports.naming";
import ContactsSection from "components/ContactsSection";
import PageError from "common/pageError";

const components = [ContactsSection];

const Contacts: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("contacts_page.seo_title")}</title>
        <meta property="og:title" content={t("contacts_page.seo_title")} />
      </Helmet>

      <main>
        {components.map((MainComponent, index) => (
          <ErrorOfEdges key={index} fallback={<PageError />}>
            <MainComponent />
          </ErrorOfEdges>
        ))}
      </main>
    </>
  );
};

export default Contacts;
