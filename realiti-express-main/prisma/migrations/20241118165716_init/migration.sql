/*
  Warnings:

  - You are about to drop the column `accessibilityNeeds` on the `Speaker` table. All the data in the column will be lost.
  - You are about to drop the column `flightInfo` on the `Speaker` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Speaker" DROP COLUMN "accessibilityNeeds",
DROP COLUMN "flightInfo";
