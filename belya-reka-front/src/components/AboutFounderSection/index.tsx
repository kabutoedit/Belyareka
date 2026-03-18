import type { FC } from "react";

const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";
const quotes = `${CDN_BASE}/assets/media/picture/quotes.svg`;
const director = "/public/director.png";

const AboutFounderSection: FC = () => {
  return (
    <section className="founder-block mt-[200px] 2xl:mt-52 pb-4 bottom relative">
      <div className="founder__container flex">
        <div className="founder__wrapper flex flex-col items-start justify-end">
          <img loading="lazy" className="absolute top-0 -left-20 2xl:-left-24 hidden md:block" src={quotes} alt="quotes" />
          <p className="2xl:text-2xl text-lg md:w-2/4  font-semibold text-jetblack">
            «Белая река» — это компания с открытым сердцем и доброй душой. Здесь люди работают с любовью и заботой, чтобы дарить вам настоящее,
            вкусное и натуральное молоко.
          </p>

          <div className="founder__sign_block mt-[52px] font-bold text-start">
            <div>
              <span className="founder__name text-xl font-semibold text-jetblack">Суюндук Кадырович</span>
              <p className="text-sm 2xl:text-lg opacity-60 font-bold text-jetblack">«Белая река»</p>
            </div>
          </div>
        </div>
        <img className="h-[370px] absolute top-[-166px] right-0" src={director} alt="director" />
      </div>
    </section>
  );
};

export default AboutFounderSection;
