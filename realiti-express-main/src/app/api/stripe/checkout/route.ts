import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 });
    }

    const lineItems = items.map((item: { ticketType: string; quantity: number }) => {
      const prices: { [key: string]: number } = {
        'Regular Realiti': 6900,
        'Student Realiti': 1900,
        'VIP Realiti': 11900,
        'Team Realiti': 17900,
      };

      if (!prices[item.ticketType]) {
        throw new Error(`Invalid ticket type: ${item.ticketType}`);
      }

      return {
        price_data: {
          currency: 'eur',
          product_data: { name: item.ticketType },
          unit_amount: prices[item.ticketType],
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}

