/*
  Warnings:

  - Added the required column `owner_email` to the `Folder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "owner_email" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_owner_email_fkey" FOREIGN KEY ("owner_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
