import { revalidateTag } from '@/payload/hooks/revalidateTag'
import { GlobalConfig } from 'payload'

export const FeaturesSection: GlobalConfig = {
    slug: 'features-section',
    label: 'Features Section',
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
            name: 'features',
            label: 'Features',
            type: 'array',
            labels: {
                singular: 'Feature',
                plural: 'Features',
            },
            minRows: 1,
            required: true,
            fields: [
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                },
                {
                    label: 'Key Topics',
                    name: 'keyTopics',
                    type: 'array',
                    labels: {
                        singular: 'Key Topic',
                        plural: 'Key Topics',
                    },
                    minRows: 1,
                    fields: [
                        {
                            name: 'topic',
                            label: 'Topic',
                            type: 'text',
                        },
                    ],
                }
            ],
        },
    ],
}

