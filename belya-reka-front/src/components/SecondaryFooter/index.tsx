import { type FC } from "react";
import ContainerLayout from "layout/ContainerLayout";
import { Link, useLocation } from "react-router-dom";
import { about, where, contacts, news } from "data/routes/routes.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoadLayout from "layout/LazyLoadLayout";
import SocialMediaItems from "common/SocialMediaItems";

const navLink = [
  { link: about, title: "О нас", isDesc: true },
  { link: contacts, title: "Контакты", isDesc: true },
  { link: news, title: "Пресс-центр", isDesc: true },
  { link: where, title: "Где купить", isDesc: true },
];

// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const Logo = `${CDN_BASE}/assets/media/picture/logo.svg`;
const LogoHalal = `${CDN_BASE}/assets/media/picture/HalalLogo.svg`;
const jugBr = `${CDN_BASE}/assets/media/picture/jugBr.svg`;
const milkFootgers = `${CDN_BASE}/assets/media/picture/milkFootgers.svg`;

const SecondaryFooter: FC = () => {
  const location = useLocation();

  if (["/", "/basket", "/profile"].includes(location.pathname)) return null;

  return (
    <footer className="bg-hexahrome text-light mt-16 relative h-[550px] md:h-[485px] xl:h-[330px]">
      <LazyLoadLayout>
        <ContainerLayout className="relative z-10 pt-8 pb-24">
          <div className="relative z-10 flex flex-col">
            <div className="w-full flex xl:justify-between justify-stretch items-center xl:flex-nowrap flex-wrap xl:gap-0 gap-4 z-10">
              <div className="flex gap-x-5 xl:w-auto w-full">
                <LazyLoadImage width={80} height={80} placeholderSrc={Logo} src={Logo} alt="iso" />
                <LazyLoadImage width={80} height={80} placeholderSrc={LogoHalal} src={LogoHalal} alt="halal" effect="blur" />
              </div>
              <div className="flex flex-col gap-y-5 xl:items-end items-start">
                <SocialMediaItems />
              </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row md:justify-between xl:flex-nowrap flex-wrap xl:gap-0 gap-y-4 z-50">
              <div>
                <span className="text-base">© 2025-2030 Белая река </span>
                <p className="xl:text-xs text-base">Политика защиты персональных данных</p>
              </div>

              <div className="flex gap-x-6 xl:flex-row flex-col xl:gap-y-0 gap-y-3">
                {navLink?.map((navLink) => (
                  <Link
                    key={navLink.link}
                    className="no-underline text-white xl:text-sm text-lg xl:font-normal font-semibold h-max"
                    to={navLink.link}>
                    {navLink.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </ContainerLayout>

        <div className="w-full max-h-[272px] h-full absolute bottom-0 pointer-events-none z-0">
          <img
            loading="lazy"
            className="absolute left-1/4 md:left-[1px] bottom-[60px] xl:bottom-[30px] max-h-[207px] w-full h-full z-0"
            src={jugBr}
            alt="milk footer"
          />

          <img
            loading="lazy"
            className="absolute -bottom-2 xl:-bottom-10 max-h-[86px] w-full h-full object-cover object-top z-0"
            src={milkFootgers}
            alt="milk footer"
          />
        </div>
      </LazyLoadLayout>
    </footer>
  );
};

export default SecondaryFooter;
