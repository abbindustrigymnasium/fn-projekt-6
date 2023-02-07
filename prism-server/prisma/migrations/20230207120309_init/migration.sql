/*
  Warnings:

  - The `date` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "date",
ADD COLUMN     "date" INTEGER NOT NULL DEFAULT 1675769363;
