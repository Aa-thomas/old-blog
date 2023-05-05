/*
  Warnings:

  - You are about to drop the column `blob` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `preferences` on the `User` table. All the data in the column will be lost.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "blob",
DROP COLUMN "preferences",
ADD COLUMN     "age" INTEGER NOT NULL;
