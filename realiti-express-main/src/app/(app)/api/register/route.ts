import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const user = await prisma.user.create({
      data: {
        name: formData.name,
        email: formData.email,
      },
    });

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return new Response('Failed to create user', { status: 500 });
  }
}
