import type { StrapiApp } from "@strapi/strapi/admin";

const BELAYA_REKA_LOGO =
  "https://belaya-reka-storage.fra1.digitaloceanspaces.com/assets/media/picture/logo.svg";
const MONS_DEVELOPER_LOGO =
  "https://belaya-reka-storage.fra1.digitaloceanspaces.com/assets/media/picture/monsdeveloper.svg";

export default {
  config: {
    locales: ["ru"],
    auth: {
      logo: BELAYA_REKA_LOGO,
    },
    menu: {
      logo: BELAYA_REKA_LOGO,
    },
    translations: {
      ru: {
        "Auth.form.welcome.title": "Войдите в панель управления",
        "Auth.form.welcome.subtitle": "Войдите в свою учетную запись Admin",
      },
      en: {
        "Auth.form.welcome.title": "Войдите в панель управления",
        "Auth.form.welcome.subtitle": "Войдите в свою учетную запись Admin",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    // Создаём элемент логотипа MonsDeveloper
    const logoContainer = document.createElement("div");
    logoContainer.id = "mons-developer-logo";
    logoContainer.innerHTML = `
      <img src="${MONS_DEVELOPER_LOGO}" alt="MonsDeveloper" />
    `;
    document.body.appendChild(logoContainer);

    // Добавляем стили
    const style = document.createElement("style");
    style.innerHTML = `
      /* Контейнер логотипа MonsDeveloper */
      #mons-developer-logo {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        pointer-events: none;
      }

      #mons-developer-logo img {
        width: 150px;
        height: auto;
        display: block;
        opacity: 0.5;
      }

      /* Адаптивность для мобильных */
      @media (max-width: 768px) {
        #mons-developer-logo {
          bottom: 15px;
        }
        #mons-developer-logo img {
          width: 120px;
        }
      }

      @media (max-width: 480px) {
        #mons-developer-logo {
          bottom: 10px;
        }
        #mons-developer-logo img {
          width: 100px;
        }
      }
    `;
    document.head.appendChild(style);

    // Скрываем логотип когда пользователь в админке (не на странице входа)
    const checkAndToggleLogo = () => {
      const isAuthPage = window.location.pathname.includes("/auth/");
      const logo = document.getElementById("mons-developer-logo");
      if (logo) {
        logo.style.display = isAuthPage ? "block" : "none";
      }
    };

    // Проверяем при загрузке и при изменении URL
    checkAndToggleLogo();
    window.addEventListener("popstate", checkAndToggleLogo);

    // Наблюдаем за изменениями URL (для SPA навигации)
    const observer = new MutationObserver(() => {
      checkAndToggleLogo();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    console.log("Belaya Reka Admin initialized");
  },
};
