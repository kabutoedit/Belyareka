import type { FC } from "react";
import type { IContactItemCommon } from "ts/types/common.interface";

const ContactItemCommon: FC<IContactItemCommon> = ({ cityName, item }) => (
  <div className="contact-item bg-hexahrome p-8 rounded-2xl flex gap-x-4 xl:flex-nowrap flex-wrap xl:gap-y-0 gap-y-5">
    <h3 className="contact__city text-lg text-white font-semibold xl:w-2/5 w-full">{cityName}</h3>
    <div className="contact__address flex gap-y-8 flex-col">
      {item?.map((contact, index) => (
        <address key={index} className="contact__address_item flex gap-x-2 items-center">
          <img loading="lazy" src={contact.icon} alt="svg" className="max-w-6 max-h-6 size-full" />
          {contact.link ? (
            <a href={contact.link} className="text-base font-normal no-underline text-white leading-normal">
              {contact.address}
            </a>
          ) : (
            <span className="text-base font-normal text-white leading-normal">{contact.address}</span>
          )}
        </address>
      ))}
    </div>
  </div>
);

export default ContactItemCommon;
