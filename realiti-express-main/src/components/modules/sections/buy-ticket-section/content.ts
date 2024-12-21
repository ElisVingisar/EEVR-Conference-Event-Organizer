/*
Regular Realiti
Gives you full access to the entire program.
69.00 €


Student Realiti
Check out the big brains and the little dough. Students are most welcome and your STUDENT ID WILL BE CHECKED at the entrance. Gives you all the benefits of realiti.express.
19.00 €


VIP Realiti
Last 4 tickets
I am used to preferential treatment, and for a good reason. I will have access to everything on the program, plus a dinner with the presenters on Thursday, October 17.
119.00 €


Team Realiti
Last 5 tickets
Bring you squad of 3 with a full access to everything.                                      179.00 €

179.00 €
*/



import { z } from "zod";

export type TicketOption = {
    title: string;
    description: string;
    price: number; // Price in Euros
    included: {
        included: string;
    }[];
    notIncluded: {
        notIncluded: string;
    }[];
    isFeatured?: boolean;
};

export type BuyTicketContent = {
    title: string;
    ticketOptions: TicketOption[];
};

const buyTicketContent: BuyTicketContent = {
    title: "Buy Ticket",
    ticketOptions: [
        {
            title: "Regular Realiti",
            description: "Gives you full access to the entire program.",
            price: 69.00, // Price in Euros
            included: [
                { included: "Full access to the entire program" }
            ],
            notIncluded: [
                { notIncluded: "Extra benefits available to VIP ticket holders" }
            ]
        },
        {
            title: "Student Realiti",
            description: "Check out the big brains and the little dough. Students are most welcome and your STUDENT ID WILL BE CHECKED at the entrance. Gives you all the benefits of realiti.express.",
            price: 19.00,
            included: [
                { included: "Full access to the entire program" },
                { included: "Student ID checked at the entrance" }
            ],
            notIncluded: [
                { notIncluded: "Extra benefits available to VIP ticket holders" }
            ]
        },
        {
            title: "VIP Realiti",
            description: "I am used to preferential treatment, and for a good reason. I will have access to everything on the program, plus a dinner with the presenters on Thursday, October 17.",
            price: 119.00,
            included: [
                { included: "Full access to the entire program" },
                { included: "Event opening dinner with the presenters on Thursday, October 17" },
                { included: "Special VIP treatment" }
            ],
            isFeatured: true,
            notIncluded: []
        },
        {
            title: "Team Realiti",
            description: "Bring your squad of 3 with full access to everything.",
            price: 179.00,
            included: [
                { included: "Full access to the entire program" },
                { included: "3 tickets" }
            ],
            notIncluded: [
                { notIncluded: "Extra benefits available to VIP ticket holders" }
            ]
        }
    ]
};

export async function getBuyTicketContent(): Promise<BuyTicketContent> {
    return buyTicketContent;
}

