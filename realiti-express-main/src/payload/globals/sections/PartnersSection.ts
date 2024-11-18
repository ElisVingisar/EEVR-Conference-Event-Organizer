import { revalidateTag } from '@/payload/hooks/revalidateTag'
import { GlobalConfig } from 'payload'

export const PartnersSection: GlobalConfig = {
    slug: 'partners-section',
    label: 'Partners Section',
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
            defaultValue: 'Partners',
            required: true,
        },
        {
            name: 'partners',
            label: 'Partners',
            type: 'array',
            labels: {
                singular: 'Partner',
                plural: 'Partners',
            },
            minRows: 1,
            required: true,
            fields: [
                {
                    name: 'name',
                    label: 'Name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'image',
                    label: 'Image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'url',
                    label: 'URL',
                    type: 'text',
                },
            ],
        },
    ],
}
