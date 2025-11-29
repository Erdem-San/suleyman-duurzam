-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `leverancier_categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `leverancier_categories_name_key`(`name`),
    UNIQUE INDEX `leverancier_categories_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `leveranciers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NULL,
    `customers` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `rating` DOUBLE NOT NULL DEFAULT 4.0,
    `color` VARCHAR(191) NOT NULL DEFAULT 'from-green-600 to-green-700',
    `stroom` VARCHAR(191) NOT NULL DEFAULT '€0,25 per kWh',
    `gas` VARCHAR(191) NOT NULL DEFAULT '€1,35 per m³',
    `vastrecht` VARCHAR(191) NOT NULL DEFAULT '€12,50 per maand',
    `features` JSON NOT NULL,
    `voordelen` JSON NOT NULL,
    `nadelen` JSON NOT NULL,
    `categoryId` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `leveranciers_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `leveranciers` ADD CONSTRAINT `leveranciers_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `leverancier_categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
