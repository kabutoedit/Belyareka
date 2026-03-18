import { type FC, Fragment, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLockedBody, useMediaQuery } from "usehooks-ts";
import { Cross as Hamburger } from "hamburger-react";
import ReactDropdown, { type Option } from "react-dropdown";

import { about, where, products, partners, contacts, news, home } from "data/routes/routes.json";
import SocialMediaItems from "common/SocialMediaItems";

// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const Logo = `${CDN_BASE}/assets/media/svg/logo.svg`;

type DropdownChangeHandler = (selected: Option) => void;

const navLink = [
  { link: home, title: "Главная", isDesc: true, disabled: false, isNew: false },
  { link: about, title: "О компании", isDesc: true, disabled: false, isNew: false },
  { link: products, title: "Продукция", isDesc: true, disabled: false, isNew: false },
  { link: where, title: "Где купить", isDesc: true, disabled: false, isNew: false },
  { link: partners, title: "Партнерам", isDesc: true, disabled: false, isNew: false },
  { link: contacts, title: "Контакты", isDesc: true, disabled: false, isNew: false },
  { link: news, title: "Пресс-центр", isDesc: true, disabled: false, isNew: false },
  { link: "tel:0553333000", title: "+996 (553) 333-000", isDesc: false },
];

const langaugeOptions = [
  { label: "ru", value: "Русский" },
  { label: "kg", value: "Кыргызский" },
  { label: "en", value: "English" },
];

const Nav: FC = () => {
  const { pathname } = useLocation();

  const locationPathName = useLocation();
  const [selectedOption, setSelectedOption] = useState(langaugeOptions[0].value);
  const isIpad = useMediaQuery("(max-width: 1330.98px)"); // for adaptive
  const [locked, setLocked] = useLockedBody(false, "root");

  /* hamburger menu */
  const [isOpen, setIsopen] = useState(false);
  const defaultValue = langaugeOptions[0];

  const handleToggleClick = () => {
    setIsopen(!isOpen);
    setLocked(!locked);
  };

  const handleDropdownChange: DropdownChangeHandler = (selected) => {
    setSelectedOption(selected.value);
  };

  return (
    <>
      <div className={`${locationPathName.pathname === "/" ? "" : "mt-20"}`}>
        {/* <div className={`${locationPathName.pathname === "/" ? "" : "mt-20"} py-2`}> */}
        {isOpen && (
          <div className="fixed top-0 left-0 z-[999] h-dvh w-full overflow-y-auto mobile-menu bg-white bg-opacity-30">
            <div className="relative w-full bg-white *:text-hexahrome rounded-b-lg p-6 pt-5 h-full">
              <div className="flex justify-between w-full ">
                <NavLink to="/" onClick={handleToggleClick}>
                  <img className="absolute top-0" src={Logo} alt="logo" />
                </NavLink>
                <div className="rounded bg-hexahrome h-fit button__focus">
                  <Hamburger toggled={isOpen} distance="md" rounded={true} color="white" size={18} hideOutline={false} onToggle={handleToggleClick} />
                </div>
              </div>

              <div className="mt-10 flex flex-col justify-between items-end">
                <div className="flex sm:flex-wrap flex-col gap-5 text-right flex-wrap ">
                  {navLink?.map((navLink, i) =>
                    navLink.isDesc ? (
                      <Link className="text-hexahrome no-underline font-medium text-[17px]" key={i} to={navLink.link} onClick={handleToggleClick}>
                        {navLink.title}
                      </Link>
                    ) : null
                  )}
                </div>

                <div className="text-right flex items-end flex-col gap-y-[10px] mt-8">
                  <div>
                    <a href="tel:+996553333000" className="text-hexahrome no-underline font-bold text-base mb-1 inline active:bg-[#009ED8]">
                      +996 &#40;553&#41; 333 000
                    </a>
                    <span className="font-medium text-xs no-underline block">Политика защиты персональных данных</span>
                  </div>
                  <SocialMediaItems />
                </div>
              </div>
            </div>
          </div>
        )}

        <nav className={`${isOpen ? "nav show" : "nav"} flex items-center md:flex-row flex-col z-50 px-5 top-0 fixed`}>
          <div className={`relative custom-container flex justify-between items-start md:items-center mac:px-[500px]`}>
            <Link className="flex justify-center items-center relative md:top-0" to="/">
              <img className="logo__belyareka w-auto h-24 ss:h-auto" src={Logo} alt="logo_flag" />
            </Link>

            {!isIpad && (
              <div className="flex gap-x-6 2xl:font-normal lg:font-medium 2xl:text-base lg:text-sm">
                {navLink?.map(
                  ({ isDesc, link, title, isNew }, i) =>
                    isDesc && (
                      <Fragment key={i}>
                        {isNew ? (
                          <div className="relative nav__link text-nowrap text-sm">
                            {title}
                            {/* {isNew && <div className="text-xs bg-hexahrome rounded-b-lg text-white inline px-2 py-0.5 absolute top-5 right-6">Скоро</div>} */}
                          </div>
                        ) : (
                          <Link
                            className={`${
                              pathname === link ? " text-[#00afef!important]" : ""
                            } nav__link text-sm no-underline font-normal relative flex justify-center text-nowrap`}
                            to={link}>
                            {title}
                            {pathname === link && (
                              <svg
                                className="absolute -bottom-5"
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.13397 0.5C7.51887 -0.166666 8.48112 -0.166667 8.86602 0.5L15.7942 12.5C16.1791 13.1667 15.698 14 14.9282 14H1.0718C0.301996 14 -0.179129 13.1667 0.205771 12.5L7.13397 0.5Z"
                                  fill="#00AFEF"
                                />
                              </svg>
                            )}
                          </Link>
                        )}
                      </Fragment>
                    )
                )}
              </div>
            )}

            <div className="flex gap-x-6 w-fit items-center mt-5 md:mt-0">
              <ReactDropdown options={langaugeOptions} value={defaultValue} placeholder={selectedOption} onChange={handleDropdownChange} />

              {isIpad && (
                <div className="hamburger__menu-btn bg-hexahrome rounded button__focus">
                  <Hamburger toggled={isOpen} distance="md" rounded={true} color="#fff" size={18} hideOutline={false} onToggle={handleToggleClick} />
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
