/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY it because it could be re-written at any time. */
import config from '@/payload.config'
import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST } from '@payloadcms/next/routes'

export const GET = REST_GET(config)
export const POST = REST_POST(config)
export const DELETE = REST_DELETE(config)
export const PATCH = REST_PATCH(config)
export const OPTIONS = REST_OPTIONS(config)

/*

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { promises as fs } from 'fs';
import path from 'path';
import { DateTime } from 'ics';

// Define where to save the uploaded files
const uploadDir = path.join(process.cwd(), 'public/uploads');

async function ensureUploadDirExists() {
  try {
    await fs.mkdir(uploadDir, { recursive: true }); // Create directory if it doesn't exist
  } catch (error) {
    console.error('Error creating upload directory:', error);
  }
}

/*
export async function POST(req: Request) {
  try {
    const data = await req.formData(); // Parse the formData
    const name = data.get('name') as string | null;
    const email = data.get('email') as string | null;
    const info = data.get('info') as string | null;
    const talkTitle = data.get('talkTitle') as string | null;
    const picture = data.get('picture') as File | null;
    const slides = data.get('slides') as File | null;
    const arrivalDateString = data.get('arrivalDate') as string | null;
    const departureDateString = data.get('departureDate') as string | null;
    const flightInfo = data.get('flightInfo') as string | null;
    const hotelAccommodation = data.get('hotelAccommodation') as string | null;
    const dietaryRestrictions = data.get('dietaryRestrictions') as string | null;
    const accessibilityNeeds = data.get('accessibilityNeeds') as string | null;
    const specialRequests = data.get('specialRequests') as string | null;


    if (!name || !email || !talkTitle) {
        return NextResponse.json({ success: false, message: 'Name, Email, and Talk Title are required.' }, { status: 400 });
      }
    // Save the picture file if it exists
    let picturePath = null;
    if (picture && picture.size > 0) {
      const pictureFilename = `${Date.now()}-${picture.name}`;
      const pictureFullPath = path.join(uploadDir, pictureFilename);
      const pictureArrayBuffer = await picture.arrayBuffer(); // ArrayBuffer

      // Convert ArrayBuffer to a Uint8Array, then to a Base64 string
      const uint8Array = new Uint8Array(pictureArrayBuffer);
      const base64String = Buffer.from(uint8Array).toString('base64');

      // Write the Base64 string to a file as binary
      await fs.writeFile(pictureFullPath, base64String, 'base64');
      picturePath = `/uploads/${pictureFilename}`; // Path to store in the database
    }

    // Save the slides file if it exists
    let slidesPath = null;
    if (slides && slides.size > 0) { 
      const slidesFilename = `${Date.now()}-${slides.name}`;
      const slidesFullPath = path.join(uploadDir, slidesFilename);
      const slidesArrayBuffer = await slides.arrayBuffer(); // Get ArrayBuffer

      // Convert ArrayBuffer to Uint8Array
      const slidesUint8Array = new Uint8Array(slidesArrayBuffer);

      // Write the Uint8Array directly to a file
      await fs.writeFile(slidesFullPath, slidesUint8Array);
      slidesPath = `/uploads/${slidesFilename}`; // Path to store in the database
    }

    const arrivalDate = arrivalDateString ? new Date(arrivalDateString).toISOString() : null;
    const departureDate = departureDateString ? new Date(departureDateString).toISOString() : null;


    // Create the speaker entry in the database
    const speaker = await prisma.speaker.create({
      data: {
        name,
        email,
        info,
        talkTitle,
        picture: picturePath,  // Save the picture file path
        slides: slidesPath,    // Save the slides file path
        arrivalDate,
        departureDate,
        flightInfo,
        hotelAccommodation,
        dietaryRestrictions,
        accessibilityNeeds,
        specialRequests,
      },
    });

    return NextResponse.json({ success: true, speaker });
  } catch (error) {
    console.error('Error in POST /api/register:', error);
    return NextResponse.json({ success: false, message: 'Error registering speaker' }, { status: 500 });
  }
}

*/