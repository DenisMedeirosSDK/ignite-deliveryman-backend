/*
  Warnings:

  - You are about to drop the column `passsword` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `passsword` on the `deliveryman` table. All the data in the column will be lost.
  - Added the required column `password` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `deliveryman` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "passsword",
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "deliveryman" DROP COLUMN "passsword",
ADD COLUMN     "password" TEXT NOT NULL;
