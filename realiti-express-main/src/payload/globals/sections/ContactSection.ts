import { revalidateTag } from '@/payload/hooks/revalidateTag'
import { GlobalConfig } from 'payload'

export const ContactSection: GlobalConfig = {
    slug: 'contact-section',
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
            defaultValue: 'Still have some questions?',
            required: true,
            admin: {
                disabled: true,
                description: 'This is a designed title, it cannot be changed',
            },
        },
        {
            name: 'targetMail',
            label: 'Target Mail',
            type: 'text',
            defaultValue: 'eva@eevr.com',
            required: true,
        },
    ],
}
