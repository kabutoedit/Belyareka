import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store/index.ts";

import App from "./app/app.tsx";
import { NotificationProvider } from "helpers/NotificationContext.tsx";
import "assets/styles/index.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/css";
import "react-dropdown/style.css";
import "react-lazy-load-image-component/src/effects/blur.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <Provider store={store}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </Provider>
  </BrowserRouter>
);
