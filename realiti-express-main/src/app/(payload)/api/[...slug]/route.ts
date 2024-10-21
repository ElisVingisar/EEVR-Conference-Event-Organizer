/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY it because it could be re-written at any time. */
/* import config from '@payload-config'
import routes from '@payloadcms/next/routes'

export const GET = routes.REST_GET(config)
export const POST = routes.REST_POST(config)
export const DELETE = routes.REST_DELETE(config)
export const PATCH = routes.REST_PATCH(config)
export const OPTIONS = routes.REST_OPTIONS(config) */
// src/app/api/register/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { promises as fs } from 'fs';
import path from 'path';

// Define where to save the uploaded files
const uploadDir = path.join(process.cwd(), 'public/uploads');

async function ensureUploadDirExists() {
  try {
    await fs.mkdir(uploadDir, { recursive: true }); // Create directory if it doesn't exist
  } catch (error) {
    console.error('Error creating upload directory:', error);
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.formData(); // Parse the formData
    const name = data.get('name') as string | null;
    const email = data.get('email') as string | null;
    const info = data.get('info') as string | null;
    const talkTitle = data.get('talkTitle') as string | null;
    const picture = data.get('picture') as File | null;
    const slides = data.get('slides') as File | null;

    if (!name || !email || !talkTitle) {
        return NextResponse.json({ success: false, message: 'Name, Email, and Talk Title are required.' }, { status: 400 });
      }
    // Save the picture file if it exists
    let picturePath = null;
    if (picture && picture.size > 0) {
      const pictureFilename = `${Date.now()}-${picture.name}`;
      const pictureFullPath = path.join(uploadDir, pictureFilename);
      const pictureArrayBuffer = await picture.arrayBuffer();
      await fs.writeFile(pictureFullPath, Buffer.from(pictureArrayBuffer));
      picturePath = `/uploads/${pictureFilename}`; // Path to store in the database
    }

    // Save the slides file if it exists
    let slidesPath = null;
    if (slides && slides.size > 0) {
      const slidesFilename = `${Date.now()}-${slides.name}`;
      const slidesFullPath = path.join(uploadDir, slidesFilename);
      const slidesArrayBuffer = await slides.arrayBuffer();
      await fs.writeFile(slidesFullPath, Buffer.from(slidesArrayBuffer));
      slidesPath = `/uploads/${slidesFilename}`; // Path to store in the database
    }

    // Create the speaker entry in the database
    const speaker = await prisma.speaker.create({
      data: {
        name,
        email,
        info,
        talkTitle,
        picture: picturePath,  // Save the picture file path
        slides: slidesPath,    // Save the slides file path
      },
    });

    return NextResponse.json({ success: true, speaker });
  } catch (error) {
    console.error('Error in POST /api/register:', error);
    return NextResponse.json({ success: false, message: 'Error registering speaker' }, { status: 500 });
  }
}

