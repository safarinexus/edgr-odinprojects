/*
  Warnings:

  - You are about to drop the column `user_type_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_user_type_id_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "ptype_id" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "user_type_id",
ADD COLUMN     "utype_id" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "Type";

-- CreateTable
CREATE TABLE "UType" (
    "type_id" SERIAL NOT NULL,
    "type_name" TEXT NOT NULL,

    CONSTRAINT "UType_pkey" PRIMARY KEY ("type_id")
);

-- CreateTable
CREATE TABLE "PType" (
    "type_id" SERIAL NOT NULL,
    "type_name" TEXT NOT NULL,

    CONSTRAINT "PType_pkey" PRIMARY KEY ("type_id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_utype_id_fkey" FOREIGN KEY ("utype_id") REFERENCES "UType"("type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_ptype_id_fkey" FOREIGN KEY ("ptype_id") REFERENCES "PType"("type_id") ON DELETE RESTRICT ON UPDATE CASCADE;
