import { revalidateTag } from '@/payload/hooks/revalidateTag'
import { GlobalConfig } from 'payload'

export const SpeakersSection: GlobalConfig = {
    slug: 'speakers-section',
    label: 'Speakers Section',
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
            defaultValue: 'Speakers',
            required: true,
        },
        {
            name: 'speakers',
            label: 'Partners',
            type: 'array',
            labels: {
                singular: 'Speaker',
                plural: 'Speakers',
            },
            minRows: 1,
            required: true,
            fields: [
                {
                    name: 'name',
                    label: 'Name',
                    type: 'text',
                },
                {
                    name: 'position',
                    label: 'Position',
                    type: 'text',
                },
                {
                    name: 'image',
                    label: 'Image',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'linkedinUrl',
                    label: 'LinkedIn URL',
                    type: 'text',
                },
                {
                    name: 'xUrl',
                    label: 'X URL',
                    type: 'text',
                },
                {
                    name: 'isDisclosed',
                    label: 'Is Disclosed (Name visible)',
                    type: 'checkbox',
                    required: true,
                    defaultValue: false,
                },
                {
                    name: 'bio',
                    label: 'Bio',
                    type: 'textarea',
                    required: false,
                }

            ],
        },
    ],
}

