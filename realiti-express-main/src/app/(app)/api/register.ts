// /pages/api/register.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, info, talkTitle } = req.body;

    try {
      // Save the data to the Prisma database
      const speaker = await prisma.speaker.create({
        data: {
          name,
          email,
          info,
          talkTitle,
        },
      });
      res.status(201).json({ speaker });
    } catch (error) {
      console.error('Error saving speaker:', error);
      res.status(500).json({ error: 'Failed to register speaker.' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


