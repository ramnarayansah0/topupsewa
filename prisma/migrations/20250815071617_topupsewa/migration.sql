-- CreateTable
CREATE TABLE `Tiktok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `videoslink` TEXT NOT NULL,
    `naam` TEXT NOT NULL,
    `rate` TEXT NOT NULL,
    `whatsapp` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
