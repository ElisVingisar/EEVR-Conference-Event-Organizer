/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    feedback: Feedback;
    register: Register;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    feedback: FeedbackSelect<false> | FeedbackSelect<true>;
    register: RegisterSelect<false> | RegisterSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    'about-section': AboutSection;
    'buy-ticket-section': BuyTicketSection;
    'contact-section': ContactSection;
    'cta-section': CtaSection;
    'event-tracks-section': EventTracksSection;
    'features-section': FeaturesSection;
    'partners-section': PartnersSection;
    'speakers-section': SpeakersSection;
    'visitors-info-section': VisitorsInfoSection;
    'why-tallinn-section': WhyTallinnSection;
  };
  globalsSelect: {
    'about-section': AboutSectionSelect<false> | AboutSectionSelect<true>;
    'buy-ticket-section': BuyTicketSectionSelect<false> | BuyTicketSectionSelect<true>;
    'contact-section': ContactSectionSelect<false> | ContactSectionSelect<true>;
    'cta-section': CtaSectionSelect<false> | CtaSectionSelect<true>;
    'event-tracks-section': EventTracksSectionSelect<false> | EventTracksSectionSelect<true>;
    'features-section': FeaturesSectionSelect<false> | FeaturesSectionSelect<true>;
    'partners-section': PartnersSectionSelect<false> | PartnersSectionSelect<true>;
    'speakers-section': SpeakersSectionSelect<false> | SpeakersSectionSelect<true>;
    'visitors-info-section': VisitorsInfoSectionSelect<false> | VisitorsInfoSectionSelect<true>;
    'why-tallinn-section': WhyTallinnSectionSelect<false> | WhyTallinnSectionSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "feedback".
 */
export interface Feedback {
  id: number;
  satisfactionRating: number;
  organizationRating: number;
  futureSpeakers?: string | null;
  additionalComments?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "register".
 */
export interface Register {
  id: number;
  name: string;
  email: string;
  info?: string | null;
  talkTitle: string;
  arrivalDate?: string | null;
  departureDate?: string | null;
  hotelAccommodation?: ('ownAccommodation' | 'needAccommodation') | null;
  dietaryRestrictions?: string | null;
  specialRequests?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'feedback';
        value: number | Feedback;
      } | null)
    | ({
        relationTo: 'register';
        value: number | Register;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "feedback_select".
 */
export interface FeedbackSelect<T extends boolean = true> {
  satisfactionRating?: T;
  organizationRating?: T;
  futureSpeakers?: T;
  additionalComments?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "register_select".
 */
export interface RegisterSelect<T extends boolean = true> {
  name?: T;
  email?: T;
  info?: T;
  talkTitle?: T;
  arrivalDate?: T;
  departureDate?: T;
  hotelAccommodation?: T;
  dietaryRestrictions?: T;
  specialRequests?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "about-section".
 */
export interface AboutSection {
  id: number;
  title: string;
  description: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "buy-ticket-section".
 */
export interface BuyTicketSection {
  id: number;
  title: string;
  ticketUrl: string;
  ticketOptions?:
    | {
        title: string;
        description: string;
        price: number;
        included: {
          included: string;
          id?: string | null;
        }[];
        notIncluded?:
          | {
              notIncluded?: string | null;
              id?: string | null;
            }[]
          | null;
        isFeatured?: boolean | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-section".
 */
export interface ContactSection {
  id: number;
  title: string;
  targetMail: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cta-section".
 */
export interface CtaSection {
  id: number;
  title?: string | null;
  description: string;
  button: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "event-tracks-section".
 */
export interface EventTracksSection {
  id: number;
  day1: {
    hourStart?: string | null;
    hourEnd?: string | null;
    title: string;
    location?: string | null;
    id?: string | null;
  }[];
  day2: {
    hourStart: string;
    hourEnd: string;
    title: string;
    location?: string | null;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "features-section".
 */
export interface FeaturesSection {
  id: number;
  features: {
    title?: string | null;
    keyTopics?:
      | {
          topic?: string | null;
          id?: string | null;
        }[]
      | null;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "partners-section".
 */
export interface PartnersSection {
  id: number;
  title: string;
  partners: {
    name: string;
    image: number | Media;
    url?: string | null;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "speakers-section".
 */
export interface SpeakersSection {
  id: number;
  title: string;
  speakers: {
    name?: string | null;
    position?: string | null;
    image?: (number | null) | Media;
    linkedinUrl?: string | null;
    xUrl?: string | null;
    isDisclosed: boolean;
    bio?: string | null;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "visitors-info-section".
 */
export interface VisitorsInfoSection {
  id: number;
  title: string;
  howToGetThere: {
    title: string;
    content: string;
  };
  nearbyHotels: {
    title: string;
    content: {
      title: string;
      description: string;
      link: string;
      id?: string | null;
    }[];
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "why-tallinn-section".
 */
export interface WhyTallinnSection {
  id: number;
  title: string;
  reasons: {
    title: string;
    text: string;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "about-section_select".
 */
export interface AboutSectionSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "buy-ticket-section_select".
 */
export interface BuyTicketSectionSelect<T extends boolean = true> {
  title?: T;
  ticketUrl?: T;
  ticketOptions?:
    | T
    | {
        title?: T;
        description?: T;
        price?: T;
        included?:
          | T
          | {
              included?: T;
              id?: T;
            };
        notIncluded?:
          | T
          | {
              notIncluded?: T;
              id?: T;
            };
        isFeatured?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-section_select".
 */
export interface ContactSectionSelect<T extends boolean = true> {
  title?: T;
  targetMail?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cta-section_select".
 */
export interface CtaSectionSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  button?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "event-tracks-section_select".
 */
export interface EventTracksSectionSelect<T extends boolean = true> {
  day1?:
    | T
    | {
        hourStart?: T;
        hourEnd?: T;
        title?: T;
        location?: T;
        id?: T;
      };
  day2?:
    | T
    | {
        hourStart?: T;
        hourEnd?: T;
        title?: T;
        location?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "features-section_select".
 */
export interface FeaturesSectionSelect<T extends boolean = true> {
  features?:
    | T
    | {
        title?: T;
        keyTopics?:
          | T
          | {
              topic?: T;
              id?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "partners-section_select".
 */
export interface PartnersSectionSelect<T extends boolean = true> {
  title?: T;
  partners?:
    | T
    | {
        name?: T;
        image?: T;
        url?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "speakers-section_select".
 */
export interface SpeakersSectionSelect<T extends boolean = true> {
  title?: T;
  speakers?:
    | T
    | {
        name?: T;
        position?: T;
        image?: T;
        linkedinUrl?: T;
        xUrl?: T;
        isDisclosed?: T;
        bio?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "visitors-info-section_select".
 */
export interface VisitorsInfoSectionSelect<T extends boolean = true> {
  title?: T;
  howToGetThere?:
    | T
    | {
        title?: T;
        content?: T;
      };
  nearbyHotels?:
    | T
    | {
        title?: T;
        content?:
          | T
          | {
              title?: T;
              description?: T;
              link?: T;
              id?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "why-tallinn-section_select".
 */
export interface WhyTallinnSectionSelect<T extends boolean = true> {
  title?: T;
  reasons?:
    | T
    | {
        title?: T;
        text?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}