import { CollectionConfig } from 'payload';
const Register: CollectionConfig = {
  slug: 'register',
  access: {
    create: () => true, // Allow all users to create records (you can modify this based on roles)
    read: () => true,
  },
  admin: {
    defaultColumns: ['name', 'email', 'info', 'talkTitle', 'arrivalDate', 'departureDate', 'hotelAccommodation', 'dietaryRestrictions', 'specialRequests', 'createdAt'],
    useAsTitle: 'name',
},
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
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
export default Register;