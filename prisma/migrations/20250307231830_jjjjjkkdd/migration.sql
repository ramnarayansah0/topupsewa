/*
  Warnings:

  - You are about to drop the column `name` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `remark` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_user_id_fkey`;

-- AlterTable
ALTER TABLE `Project` DROP COLUMN `name`,
    DROP COLUMN `remark`;

-- DropTable
DROP TABLE `accounts`;

-- DropTable
DROP TABLE `sessions`;

-- DropTable
DROP TABLE `users`;
