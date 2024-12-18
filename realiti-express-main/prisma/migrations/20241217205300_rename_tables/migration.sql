/*
  Warnings:

  - You are about to drop the `registrations` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "HotelAccommodation" AS ENUM ('ownAccommodation', 'needAccommodation');

-- DropTable
DROP TABLE "registrations";

-- CreateTable
CREATE TABLE "register" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "info" TEXT,
    "talkTitle" TEXT,
    "arrivalDate" TIMESTAMP(3) NOT NULL,
    "departureDate" TIMESTAMP(3) NOT NULL,
    "hotelAccommodation" "HotelAccommodation",
    "dietaryRestrictions" TEXT,
    "specialRequests" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "register_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "register_email_key" ON "register"("email");
