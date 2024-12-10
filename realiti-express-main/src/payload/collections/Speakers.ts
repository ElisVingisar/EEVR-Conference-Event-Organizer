import { CollectionConfig } from 'payload/types';

const Speakers: CollectionConfig = {
  slug: 'speakers',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'info',
      type: 'textarea',
    },
    {
      name: 'talkTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'arrivalDate',
      type: 'date',
    },
    {
      name: 'departureDate',
      type: 'date',
    },
    {
      name: 'hotelAccommodation',
      type: 'select',
      options: ['ownAccommodation', 'needAccommodation'],
    },
    {
      name: 'dietaryRestrictions',
      type: 'text',
    },
    {
      name: 'specialRequests',
      type: 'textarea',
    },
  ],
};

export default Speakers;
