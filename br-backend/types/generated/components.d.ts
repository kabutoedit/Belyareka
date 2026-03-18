import type { Schema, Struct } from '@strapi/strapi';

export interface ContactsContactItem extends Struct.ComponentSchema {
  collectionName: 'components_contacts_contact_items';
  info: {
    description: '\u0410\u0434\u0440\u0435\u0441, \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438\u043B\u0438 email';
    displayName: '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F';
  };
  attributes: {
    link: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['address', 'email', 'phone']> &
      Schema.Attribute.DefaultTo<'address'>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_elements_hero_slides';
  info: {
    displayName: 'HeroSlide';
  };
  attributes: {
    description: Schema.Attribute.Text;
    productImageDesktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    productImageMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contacts.contact-item': ContactsContactItem;
      'elements.hero-slide': ElementsHeroSlide;
    }
  }
}
