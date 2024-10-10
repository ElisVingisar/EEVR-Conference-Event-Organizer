import { revalidateTag } from '@/payload/hooks/revalidateTag'
import { GlobalConfig } from 'payload'

export const WhyTallinnSection: GlobalConfig = {
    slug: 'why-tallinn-section',
    label: 'Why Tallinn Section',
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
            defaultValue: 'Why Tallinn',
            required: true,
        },
        {
            name: 'reasons',
            label: 'Reasons',
            type: 'array',
            labels: {
                singular: 'Reason',
                plural: 'Reasons',
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
                    name: 'text',
                    label: 'Description',
                    type: 'textarea',
                    required: true,
                }
            ],
        }
    ],
}

