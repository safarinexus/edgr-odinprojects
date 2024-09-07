-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "parent_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Folder"("folder_id") ON DELETE SET NULL ON UPDATE CASCADE;
