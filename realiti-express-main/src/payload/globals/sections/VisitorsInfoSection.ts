import { revalidateTag } from '@/payload/hooks/revalidateTag'
import { GlobalConfig } from 'payload'

export const VisitorInfoSection: GlobalConfig = {
    slug: 'visitors-info-section',
    label: 'Visitors Info Section',
    hooks: {
        afterChange: [
            revalidateTag,
        ],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            defaultValue: 'Visitors Info',
            required: true,
        },
        {
            name: 'howToGetThere',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                    required: true,
                    defaultValue: 'How to get there',
                },
                {
                    name: 'content',
                    label: 'Description',
                    type: 'textarea',
                    required: true,
                    defaultValue: 'Tallinn is well-connected to major European cities, making it easily accessible for international attendees. The city`s efficient public transport system and compact size ensure convenient travel and accommodation options. Tallinn Airport, located just a short drive from the city center, offers direct flights to numerous destinations.'

                }
            ],
        },
        {
            type: 'group',
            name: 'nearbyHotels',
            fields: [
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                    required: true,
                    defaultValue: 'Nearby Hotels to stay in Tallinn',
                },
                {
                    name: 'content',
                    label: 'Content',
                    type: 'array',
                    labels: {
                        singular: 'Hotel',
                        plural: 'Hotels',
                    },
                    minRows: 1,
                    required: true,
                    fields: [
                        {
                            name: 'title',
                            label: 'Title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'description',
                            label: 'Description',
                            type: 'textarea',
                            required: true,
                        },
                        {
                            name: 'link',
                            label: 'Link',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
            ],
        }
    ],
}

