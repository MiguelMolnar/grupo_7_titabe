/*-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

*/

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

DROP SCHEMA IF EXISTS `titabe_db`;
CREATE SCHEMA IF NOT EXISTS `titabe_db` DEFAULT CHARACTER SET utf8 ;
USE `titabe_db`;

-- -----------------------------------------------------
-- Table `titabe_db`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `titabe_db`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `phoneNumber` INT UNSIGNED NOT NULL,
  `address` VARCHAR(200) NULL,
  `image` VARCHAR(45) NOT NULL,
  `role_id` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `titabe_db`.`categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `titabe_db`.`subcategories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `subcategories`;
CREATE TABLE `subcategories` (
  `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` TINYINT UNSIGNED NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `titabe_db`.`products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `descriptionShort` VARCHAR(45) NOT NULL,
  `descriptionLong` VARCHAR(500) NOT NULL,
  `price` INT UNSIGNED NOT NULL,
  `offer` TINYINT(1) UNSIGNED NULL,
  `discount` FLOAT UNSIGNED NULL,
  `stock` TINYINT(1) UNSIGNED NULL,
  `subcategory_id` TINYINT UNSIGNED NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `subcategory_id`
    FOREIGN KEY (`subcategory_id`)
    REFERENCES `subcategories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `titabe_db`.`products_images`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `products_images`;
CREATE TABLE `products_images` (
  `id` INT UNSIGNED NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `main` TINYINT(1) UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `titabe_db`.`cart_status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cart_status`;
CREATE TABLE `cart_status` (
  `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `titabe_db`.`cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` INT UNSIGNED NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `date` DATE NOT NULL,
  `quantity` TINYINT UNSIGNED NOT NULL,
  `price` INT UNSIGNED NOT NULL,
  `address` VARCHAR(200) NULL,
  `status_id` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `status_id`
    FOREIGN KEY (`status_id`)
    REFERENCES `cart_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `titabe_db`.`cart_items`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cart_items`;
CREATE TABLE `cart_items` (
  `id` INT UNSIGNED NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `cart_id` INT UNSIGNED NOT NULL,
  `quantity` TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `product_id_cart`
    FOREIGN KEY (`product_id`)
    REFERENCES `products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cart_id`
    FOREIGN KEY (`cart_id`)
    REFERENCES `cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

/*
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
*/
