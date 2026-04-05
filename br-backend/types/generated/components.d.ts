import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsHeroSlide extends Schema.Component {
  collectionName: 'components_elements_hero_slides';
  info: {
    displayName: 'HeroSlide';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    productImageDesktop: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    productImageMobile: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ContactsContactItem extends Schema.Component {
  collectionName: 'components_contacts_contact_items';
  info: {
    displayName: '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F';
    description: '\u0410\u0434\u0440\u0435\u0441, \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438\u043B\u0438 email';
  };
  attributes: {
    type: Attribute.Enumeration<['address', 'email', 'phone']> &
      Attribute.DefaultTo<'address'>;
    value: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.hero-slide': ElementsHeroSlide;
      'contacts.contact-item': ContactsContactItem;
    }
  }
}
