import PageLoad from "../common/pageLoad";
import ErrorBoundary from "../common/ErrorBoundary";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const TheProgenitorLayout = lazy(() => import("layout/TheProgenitorLayout"));
const Main = lazy(() => import("pages/main"));
const About = lazy(() => import("pages/about"));
const Products = lazy(() => import("pages/products"));
const Where = lazy(() => import("pages/where"));
const Partners = lazy(() => import("pages/partners"));
const Contacts = lazy(() => import("pages/contacts"));
const PressCenter = lazy(() => import("pages/presscenter"));
const PressCenterElem = lazy(() => import("pages/presscenter/presscenterItem"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoad />}>
        <Routes>
          <Route path="/" element={<TheProgenitorLayout />}>
            <Route index element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/where" element={<Where />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/news" element={<PressCenter />} />
            <Route path="news/:id" element={<PressCenterElem />} />
            <Route path="/*" element={<h1>Ничего не найдено</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
