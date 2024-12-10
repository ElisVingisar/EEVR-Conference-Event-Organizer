import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { ticketType, quantity } = req.body;

      // Define ticket prices (in cents)
      const prices: { [key: string]: number } = {
        'Regular Realiti': 6900, // €69.00
        'Student Realiti': 1900, // €19.00
        'VIP Realiti': 11900,   // €119.00
        'Team Realiti': 17900,  // €179.00
      };

      if (!prices[ticketType]) {
        return res.status(400).json({ error: 'Invalid ticket type' });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: ticketType,
              },
              unit_amount: prices[ticketType],
            },
            quantity,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ url: session.url });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create checkout session' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
