/*
  Warnings:

  - You are about to drop the `SpeakerForm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SpeakerForm" DROP CONSTRAINT "SpeakerForm_authorId_fkey";

-- DropTable
DROP TABLE "SpeakerForm";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Speaker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "picture" TEXT,
    "info" TEXT,
    "talkTitle" TEXT NOT NULL,
    "slides" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Speaker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Speaker_email_key" ON "Speaker"("email");
