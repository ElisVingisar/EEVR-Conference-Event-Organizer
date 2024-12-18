import { CollectionConfig } from 'payload';
import { Global } from 'payload/types';

const addSpeakerToGlobal = async (speakerData) => {
  // This function would update the Speakers Section with new speaker data
  const speakersSection = await payload.findGlobal({
    slug: 'speakers-section'
  });
  console.log('Current Speakers Section:', speakersSection);

  const updatedSpeakers = [
    ...speakersSection.speakers,
    {
      name: speakerData.name,
      email: speakerData.email,
      talkTitle: speakerData.talkTitle,
    }
  ];

  await payload.updateGlobal({
    slug: 'speakers-section',
    data: {
      speakers: updatedSpeakers
    }
  });
};

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
