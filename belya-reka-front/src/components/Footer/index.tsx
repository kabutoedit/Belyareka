import type { FC } from "react";
import ContainerLayout from "layout/ContainerLayout";
import { MapYandex } from "components/YMaps";
import LazyLoadLayout from "layout/LazyLoadLayout";

const contacts = [
  { title: "Отдел продаж (Бишкек)", link: "n.mambetov@belayareka.kg" },
  { title: "Отдел продаж (Ош)", link: "n.mamyrov@belayareka.kg" },
  { title: "Отдел продаж (Джалал-Абад)", link: "m.kushbakov@belayareka.kg" },
  { title: "Отдел экспорта", link: "a.asanbekov@belayareka.kg" },
  { title: "Отдел кадров", link: "r.rysbaeva@belayareka.kg" },
];

// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const footerImg = `${CDN_BASE}/assets/media/picture/Component 8.png`;
const telephoneSVG = `${CDN_BASE}/assets/media/picture/telephone.svg`;
const mailxl = `${CDN_BASE}/assets/media/picture/mail-xl.svg`;

const Footer: FC = () => {
  return (
    <footer className="footer bg-hexahrome mt-24">
      <ContainerLayout className="py-24">
        <div className="relative z-20 md:mb-36 mb-0">
          <h1 className="text-white text-4xl font-medium">Контакты</h1>

          <div className="flex md:flex-nowrap flex-wrap mb-8 text-white gap-5">
            <div className="footer__map md:w-3/4 w-full">
              <LazyLoadLayout>
                <MapYandex />
              </LazyLoadLayout>
            </div>
            <div className="md:w-1/4 w-full flex flex-col flex-shrink-0">
              <div className="flex flex-col gap-y-4">
                <h5 className="text-2xl font-bold">Горячая линия</h5>
                <a href="tel:+996553333000" className="text-white no-underline text-lg font-semibold flex gap-2">
                  <img loading="lazy" src={telephoneSVG} alt="phone" />
                  +996 &#40;553&#41; 333 000
                </a>
                <a href="tel:+996312603030" className="text-white no-underline text-lg font-semibold flex gap-2">
                  <img loading="lazy" src={telephoneSVG} alt="phone" />
                  +996 &#40;312&#41; 603 030
                </a>
                <span className="font-normal text-lg">
                  Время работы: с 7:30 до
                  <br /> 22:00 без выходных
                </span>
              </div>

              <div className="mt-20 flex flex-col gap-y-5">
                {contacts?.map((item, i) => (
                  <div key={i}>
                    <p className="mb-4">{item.title}</p>
                    <div>
                      <a className="text-white no-underline" href={`mailto:${item.link}`}>
                        <img loading="lazy" src={mailxl} alt="mail" className="mr-3" />
                        {item.link}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>

      <div className="w-full max-h-[272px] h-full object-bottom absolute bottom-0 left-0 pointer-events-none z-0">
        <img draggable="false" loading="lazy" className="w-full h-full object-cover z-0 object-top" src={footerImg} alt="footer img" />
      </div>
    </footer>
  );
};
export default Footer;
