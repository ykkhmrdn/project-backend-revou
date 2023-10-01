/*
  Warnings:

  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `sizes` VARCHAR(191) NOT NULL,
    MODIFY `reviews` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Team`;

-- CreateTable
CREATE TABLE `team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `instagram` VARCHAR(191) NOT NULL,
    `linkedin` VARCHAR(191) NOT NULL,
    `github` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
