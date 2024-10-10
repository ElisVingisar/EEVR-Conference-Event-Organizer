import { revalidateTag } from '@/payload/hooks/revalidateTag'
import { GlobalConfig } from 'payload'

export const EventTeacksSection: GlobalConfig = {
    slug: 'event-tracks-section',
    label: 'Event Tracks Section',

    admin: {
        description: "Event Tracks Section",

    },
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
            name: 'day1',
            label: "Day 1 Agenda",
            type: 'array',
            labels: {
                singular: 'Event',
                plural: 'Events',
            },
            required: true,
            minRows: 1,
            fields: [
                {
                    name: 'hourStart',
                    label: 'Start Time',
                    required: false,
                    admin: {
                        date: {
                            pickerAppearance: 'timeOnly',
                            displayFormat: 'HH:mm',
                        }
                    },
                    type: 'date',
                },
                {
                    name: 'hourEnd',
                    required: false,
                    admin: {
                        date: {
                            pickerAppearance: 'timeOnly',
                            displayFormat: 'HH:mm',
                        }
                    },
                    label: 'End Time',
                    type: 'date',
                },
                {
                    name: 'title',
                    required: true,
                    label: 'Title',
                    type: 'text',
                },
                {
                    name: 'location',
                    label: 'Location',
                    type: 'text',
                },
            ],
        },
        {
            name: 'day2',
            label: "Day 2 Agenda",
            type: 'array',
            labels: {
                singular: 'Event',
                plural: 'Events',
            },
            required: true,
            minRows: 1,
            fields: [
                {
                    name: 'hourStart',
                    label: 'Start Time',

                    required: true,
                    admin: {
                        date: {
                            pickerAppearance: 'timeOnly',
                            displayFormat: 'HH:mm',
                        }
                    },
                    type: 'date',
                },
                {
                    name: 'hourEnd',
                    required: true,
                    admin: {
                        date: {
                            pickerAppearance: 'timeOnly',
                            displayFormat: 'HH:mm',
                        }
                    },
                    label: 'End Time',
                    type: 'date',
                },
                {
                    name: 'title',
                    required: true,
                    label: 'Title',
                    type: 'text',
                },
                {
                    name: 'location',
                    label: 'Location',
                    type: 'text',
                },
            ],
        },
    ],
}

