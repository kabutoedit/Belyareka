import type { FC } from "react";
import { Helmet } from "react-helmet";

import { ErrorOfEdges } from "data/imports/imports.naming";
import ContactsSection from "components/ContactsSection";
import PageError from "common/pageError";

const components = [ContactsSection];

const Contacts: FC = () => (
  <>
    <Helmet>
      <title> Контакты для информации — Белая река продукты питания </title>
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

export default Contacts;
