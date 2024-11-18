// Unused

import { revalidateTag } from '@/payload/hooks/revalidateTag'
import { GlobalConfig } from 'payload'

export const HeroSection: GlobalConfig = {
    slug: 'hero-section',
    label: 'Hero (Not added)',
    hooks: {
        afterChange: [
            revalidateTag,
        ],
    },
    access: {
        read: () => true,
    },
    fields: [
    ],
}
