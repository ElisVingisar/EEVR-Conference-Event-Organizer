import { revalidateTag } from '@/payload/hooks/revalidateTag'
import { GlobalConfig } from 'payload'

// Sample:
/*
const buyTicketContent: BuyTicketContent = {
    title: "Buy Ticket",
    ticketUrl: 'https://fienta.com/realiti-express-first-baltic-xr-conf',
    ticketOptions: [
        {
            title: "Regular Realiti",
            description: "Gives you full access to the entire program.",
            price: 69.00,
            included: [
                "Full access to the entire program"
            ],
            notIncluded: [
                "Extra benefits available to VIP ticket holders"
            ]
        },
        {
            title: "Student Realiti",
            description: "Check out the big brains and the little dough. Students are most welcome and your STUDENT ID WILL BE CHECKED at the entrance. Gives you all the benefits of realiti.express.",
            price: 19.00,
            included: [
                "Full access to the entire program",
                //only if id is checked
                "Student ID checked at the entrance"
            ],
            notIncluded: [
                "Extra benefits available to VIP ticket holders"

            ]
        },
        {
            title: "VIP Realiti",
            description: "I am used to preferential treatment, and for a good reason. I will have access to everything on the program, plus a dinner with the presenters on Thursday, October 17.",
            price: 119.00,
            included: [
                "Full access to the entire program",
                "Event opening dinner with the presenters on Thursday, October 17",
                "Special VIP treatment"

            ],
            isFeatured: true,
            notIncluded: []
        },
        {
            title: "Team Realiti",
            description: "Bring you squad of 3 with a full access to everything.",
            price: 179.00,
            included: [
                "Full access to the entire program",
                "3 tickets"
            ],
            notIncluded: [
                "Extra benefits available to VIP ticket holders"
            ]
        }
    ]
}
*/

export const BuyTicketSection: GlobalConfig = {
    slug: 'buy-ticket-section',
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
            required: true,
            defaultValue: 'Buy Ticket',
        },
        {
            name: 'ticketUrl',
            label: 'Ticket URL',
            type: 'text',
            required: true,
            defaultValue: 'https://fienta.com/realiti-express-first-baltic-xr-conf',
        },
        {
            name: 'ticketOptions',
            label: 'Ticket Options',
            type: 'array',
            labels: {
                singular: 'Ticket Option',
                plural: 'Ticket Options',
            },

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
                    name: 'price',
                    label: 'Price',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'included',
                    label: 'Included',
                    type: 'array',
                    required: true,
                    labels: {
                        singular: 'Included',
                        plural: 'Included',
                    },
                    fields: [
                        {
                            name: 'included',
                            label: 'Included',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
                {
                    name: 'notIncluded',
                    label: 'Not Included',
                    type: 'array',
                    required: false,
                    labels: {
                        singular: 'Not Included',
                        plural: 'Not Included',
                    },

                    fields: [
                        {
                            name: 'notIncluded',
                            label: 'Not Included',
                            type: 'text',
                            required: false,
                        },
                    ],
                },
                {
                    name: 'isFeatured',
                    label: 'Is Featured',
                    type: 'checkbox',
                    defaultValue: false
                },
            ],
        },
    ],

}

