import { CollectionConfig } from 'payload';

export const Feedback: CollectionConfig = {
    slug: 'feedback',
    labels: {
        singular: 'Feedback',
        plural: 'Feedbacks',
    },
    admin: {
        defaultColumns: ['satisfactionRating', 'organizationRating', 'futureSpeakers', 'additionalComments', 'createdAt'],
        useAsTitle: 'satisfactionRating',
    },
    fields: [
        {
            name: 'satisfactionRating',
            type: 'number',
            label: 'Satisfaction Rating (1-5)',
            required: true,
            min: 1,
            max: 5,
        },
        {
            name: 'organizationRating',
            type: 'number',
            label: 'Event Organization Rating (1-5)',
            required: true,
            min: 1,
            max: 5,
        },
        {
            name: 'futureSpeakers',
            type: 'textarea',
            label: 'Future Speaker Requests',
        },
        {
            name: 'additionalComments',
            type: 'textarea',
            label: 'Additional Comments',
        },
    ],
};
