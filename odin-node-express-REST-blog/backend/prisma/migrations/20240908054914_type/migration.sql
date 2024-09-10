/*
  Warnings:

  - You are about to drop the `User_Type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_user_type_id_fkey";

-- DropTable
DROP TABLE "User_Type";

-- CreateTable
CREATE TABLE "Type" (
    "type_id" SERIAL NOT NULL,
    "type_name" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("type_id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_user_type_id_fkey" FOREIGN KEY ("user_type_id") REFERENCES "Type"("type_id") ON DELETE RESTRICT ON UPDATE CASCADE;
