import { revalidateTag } from '@/payload/hooks/revalidateTag'
import { GlobalConfig } from 'payload'

export const CTASection: GlobalConfig = {
    slug: 'cta-section',
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
            defaultValue: 'Interested?',
        },
        {
            name: 'description',
            label: 'Description',
            type: 'text',
            defaultValue: 'Book your TICKET now for a jam-packed day of presentations, discussions and demos, followed by a day of hands-on workshops, topped off by the all-night gaming marathon, MängudeÖÖ.',
            required: true,
        },
        {
            name: 'button',
            label: 'Button',
            type: 'text',
            defaultValue: 'Get Tickets',
            required: true,
        }
    ],
}
