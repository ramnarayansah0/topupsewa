-- CreateTable
CREATE TABLE `Pubg` (
    `ids` INTEGER NOT NULL AUTO_INCREMENT,
    `gamesid` TEXT NOT NULL,
    `naam` TEXT NOT NULL,
    `rate` TEXT NOT NULL,
    `message` TEXT NOT NULL,

    PRIMARY KEY (`ids`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
