/*-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

*/

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

USE `titabe_db`;

-- -----------------------------------------------------
-- Table `titabe_db`.`roles`
-- -----------------------------------------------------
LOCK TABLES `roles` WRITE;
INSERT INTO `roles` (`id`, `name`) VALUES (1, 'Developer'), (2, 'Administrator'), (3, 'User');
UNLOCK TABLES;	


-- -----------------------------------------------------
-- Table `titabe_db`.`users`  developer password: 12345
-- -----------------------------------------------------
LOCK TABLES `users` WRITE;
INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `phoneNumber`, `address`, `image`, `role_id`) VALUES (1, 'Developer', 'developer@gmail.com', '$2a$10$8ypGRyc2Tfac13ivgDRtMO74BS/gprL17DP1e8yuzt9TyhXFweFCe', 1555555555, 'Argentina', 'default.jpg', 1);
UNLOCK TABLES;	


-- -----------------------------------------------------
-- Table `titabe_db`.`categories`
-- -----------------------------------------------------
LOCK TABLES `categories` WRITE;
INSERT INTO `categories` (`id`, `name`) VALUES (1, 'Productos'), (2, 'Servicios');
UNLOCK TABLES;


-- -----------------------------------------------------
-- Table `titabe_db`.`subcategories`
-- -----------------------------------------------------
LOCK TABLES `subcategories` WRITE;
INSERT INTO `subcategories` (`id`, `category_id`, `name`) VALUES
(1, 1, 'Leñeros/Braseros/Diablitos'), (2, 1, 'Parrillas'), (3, 1, 'A la Cruz'), (4, 1, 'Fogoneros'), (5, 1, 'Asadores'), (6, 1, 'Discos'), (7, 1, 'Accesorios'), (8, 1, 'Tablas'), (9, 2, 'Alquileres'), (10, 2, 'Grabados'); 
UNLOCK TABLES;


-- -----------------------------------------------------
-- Table `titabe_db`.`products`
-- -----------------------------------------------------
LOCK TABLES `products` WRITE;
INSERT INTO `products` (`id`, `name`, `descriptionShort`, `descriptionLong`, `price`, `offer`, `discount`, `stock`, `subcategory_id`, `createdAt`) VALUES 
(1, 'Inciador de Fuego', 'No más diarios/cartón ni cenizas', '> Inicia el fuego en menos de 10 minutos con alcohol y viruta de madera (incluido). \n > Duración asegurada.', 1540, 0, NULL, 1, 7, '2022-10-30 00:00:00'),
(2, 'Pala Reforzada', 'Cabedora, práctica y canchera', 'Practicidad para cargar, ordenar y distribuir brasas calientes generando un resultado óptimo en la cocción.', 2000, 1, 10, 1, 7, '2022-10-30 00:00:00'),
(3, 'Pinza Reforzada', 'Única con destapador de cerveza', '>Practicidad para manipular, ordenar y distribuir brasas calientes generando un resultado óptimo en la cocción. \n >Resistente a altas temperaturas. \n >Ergonómica manipulación. \n >Incluye destapador de cerveza para mayor versatilidad.', 1470 , 0, NULL, 1, 7, '2022-10-30 00:00:00'),
(4, 'Atizador Reforzado', 'Infaltable compañero de la Pala Reforzada', '>Practicidad para ordenar y distribuir brasas calientes generando un resultado óptimo en la cocción. \n >Resistente a altas temperaturas. \n >Ergonómica manipulación.', 1400 , 0, NULL, 1, 7, '2022-10-30 00:00:00'),
(5, 'Cepillo de Alambre Reforzado', 'Fundamental para el cuidado de la Parrilla', '>Ideal para quitar la grasa adherida en la superficie de la parrilla, óxido presente y limpiar restos de cenizas en la base del asador. \n >Ergonómica manipulación.', 3090 , 0, NULL, 1, 7, '2022-10-30 00:00:00'),
(6, 'Set Asador Reforzado', 'Trío infaltable para todo asador', '>Encontrá en este Set la practicidad para trasladar brasas calientes, resistir altas temperaturas y facilitar la movilización del carbón/leña. \n >Ergonómica manipulación en la sujeción de los accesorios.', 4660 , 0, NULL, 1, 7, '2022-10-30 00:00:00'),
(7, 'Kit Parrillero Reforzado', 'Cuarteto fabuloso para los amantes del asador', '>Encontrá en este Kit la practicidad para trasladar brasas calientes, resistir altas temperaturas y facilitar la movilización del carbón/leña dejando impecable la Parrilla y Asador. \n >Ergonómica manipulación en la sujeción de los accesorios.', 7620 , 0, NULL, 1, 7, '2022-10-30 00:00:00'),
(8, 'Leñero/Brasero Reforzado 40cm', 'Brasas perfectas para tu Asado perfecto', '>Ideal para convertir tu carbón/leña en brasas y luego llevarlos debajo de la Parrilla. \n >Separación óptima entre las varillas para generar brasas homogéneas.', 7400 , 0, NULL, 1, 1, '2022-10-30 00:00:00'),
(9, 'Leñero/Brasero Reforzado 50cm', 'Brasas perfectas para tu Asado perfecto', '>Ideal para convertir tu carbón/leña en brasas y luego llevarlos debajo de la Parrilla. \n >Separación óptima entre las varillas para generar brasas homogéneas.', 8120 , 0, NULL, 1, 1, '2022-10-30 00:00:00'),
(10, 'Leñero/Brasero Reforzado 60cm', 'Brasas perfectas para tu Asado perfecto', '>Ideal para convertir tu carbón/leña en brasas y luego llevarlos debajo de la Parrilla. \n >Separación óptima entre las varillas para generar brasas homogéneas.', 9000 , 0, NULL, 1, 1, '2022-10-30 00:00:00'),
(11, 'Diablito Free Reforzado', 'Innovador concepto con Brasas perfectas', '>Apertura frontal para uso de leña y carbón con gran poder de encendido y fácil manipulación de brasas. \n >Separación óptima entre las varillas para generar brasas homogéneas.', 9690 , 1, NULL, 0, 1, '2022-10-30 00:00:00'),
(12, 'Diablito Reforzado', 'Clásico concepto con Brasas perfectas', '>Uso para leña y carbón con gran poder de encendido. \n >Separación óptima entre las varillas para generar brasas homogéneas. \n >Incluye manija para mover y generar la caída de brasas calientes.', 10200 , 0, NULL, 1, 1, '2022-10-30 00:00:00'),
(13, 'Plancha Reforzada', 'Tus comidas ahora avanzan al siguiente nivel', '>Tus alimentos ahora se cocinan en un solo producto. \n>Versatilidad para tu cocina (uso en 2 hornallas). \n>Utilizala también en el horno o en el asador con brasas. \n>Ideal para carnes, verduras, frutas, legumbres, entre otros. \n>Característica anti-adherente puede no utilizar aceites y grasas. \n>Su diseño permite que sea fácil de limpiar, transportar y guardar.', 5900 , 0, NULL, 1, 7 , '2022-10-30 00:00:00'),
(14, 'Smasher', 'Máximo sabor para tus hamburguesas', '>Ideal para aplastar albóndigas y generar deliciosas hamburguesas en la Plancha', 2340 , 0, NULL, 1, 7, '2022-10-30 00:00:00'),
(15, 'Cruz de Pie Reforzada', 'La experiencia de cocinar al aire libre', '>Tus carnes y verduras a la llama ahora tienen donde engancharse. \n >Soporta hasta 30kg. garantizados. \n >Cruz Desmontable » Regulación en altura y ancho, con 4 ganchos móviles de sujeción. Innovador sistema de giro 360° para cocción de ambos lados.', 14530 , 0, NULL, 1, 3, '2022-10-30 00:00:00'),
(16, 'Cruz de Pie Minimal Reforzada', 'Tu Asado ahora se puede cocinar a la llama', '>Ideal para uso en el interior de tu Asador. \n>Tus carnes y verduras a la llama ahora tienen donde engancharse. \n>Soporta hasta 15kg. garantizados.', 12500 , 0, NULL, 1, 3, '2022-10-30 00:00:00'),
(17, 'Pinza Gastronómica de Acero Inoxidable', 'Manipular alimentos jamás fue tan fácil', '>Ideal para manipular alimentos calientes y fríos. \n>Fabricado en acero inoxidable beneficiando su contacto con comestibles. \n>Mango ergonómico de plástico. \n>Con gancho para colgarlo a la pared.', 2240 , 0, NULL, 1, 7, '2022-10-30 00:00:00'),
(18, 'Provoletera de Fundición', 'Exquisitas provoletas, huevos fritos y salsas', '>Uso en hornalla de cocina y con brasas a la Parrilla soportando altas temperaturas. \n>Mango ergonómico de madera. \n>Por su buena difusión del calor es ideal para fundir diversos quesos, salsitas para acompañar un asado y gran variedad de comidas.', 3500 , 0, NULL, 1, 7, '2022-10-30 00:00:00'),
(19, 'Espátula de Acero Inoxidable', 'Dale una exquisita vuelta a tus alimentos', '>Ideal para manipular alimentos calientes, facilitando su traslado.', 2280 , 0, NULL, 1, 7, '2022-10-30 00:00:00'),
(20, 'Garra de Oso de Fundición de Aluminio', 'Tenedor de agarre canchero', '>Ideal para manipular y desmechar grandes porciones de carnes. Además funciona muy bien para mezclar ensaladas o pasta.', 1990 , 0, NULL, 1, 7, '2022-10-30 00:00:00'),
(21, 'Disco con Base de Chapa Reforzada (Ø35cm)', 'Explorá sabores increíbles', '>Con patas desmontables, facilitando guardado y traslado. \n>Disco con base plana proporcionando gran cavidad de alimentos. \n>Con manijas laterales para brindar una manipulación segura. \n>Para comer hasta 8 personas. \n>Capacidad 7 litros.', 11300, 0, NULL, 1, 6, '2022-10-30 00:00:00'),
(22, 'Disco con Base de Chapa Reforzada (Ø43cm)', 'El tamaño más versátil para tus comidas', '>Con patas desmontables, facilitando guardado y traslado. \n>Disco con base plana proporcionando gran cavidad de alimentos. \n>Con manijas laterales para brindar una manipulación segura. \n>Para comer hasta 14 personas. \n>Capacidad 10 litros.', 14200, 0, NULL, 1, 6, '2022-10-30 00:00:00'),
(23, 'Disco con Base de Chapa Reforzada (Ø50cm)', 'Para tus grandes momentos compartidos', '>Con patas desmontables, facilitando guardado y traslado. \n>Disco con base plana proporcionando gran cavidad de alimentos. \n>Con manijas laterales para brindar una manipulación segura. \n>Para comer hasta 20 personas. \n>Capacidad 13,5 litros.', 18100, 0, NULL, 1, 6, '2022-10-30 00:00:00'),
(24, 'Tabla de Cortar y Servir de Algarrobo', 'La compañera más fiel de tus presentaciones', '>Tabla de madera de Algarrobo curada con cera de abeja. Lista para usar. \n>Tamaños diversos para llevar a la mesa la máxima felicidad de tus comidas. \n>Posee canaleta escurridora de grasa para evitar el derrame de líquidos. También incluye manijas para su óptimo agarre.', 0, 0, NULL, 1, 8, '2022-10-30 00:00:00'),
(25, 'Bandeja de Algarrobo', 'Las presentaciones avanzan a un nuevo nivel', '>Tabla de madera de Algarrobo curada con cera de abeja. Lista para usar. \n>Tamaños diversos para llevar a la mesa la máxima felicidad de tus comidas. \n>Posee un cuenco lateral para evitar el derrame de líquidos y manijas para su óptimo agarre.', 0, 0, NULL, 1, 8, '2022-10-30 00:00:00'),
(26, 'Tabla-Bandeja de Algarrobo', 'Una dúo épico', '>Tablas de madera de Algarrobo curada con cera de abeja. Listas para usar. \n>Tamaños diversos para llevar a la mesa la máxima felicidad de tus comidas. \n>La Tabla de Algarrobo que se introduce dentro de la Bandeja, posee canaleta escurridora de grasa para evitar el derrame de líquidos. También incluye manijas para su óptimo agarre. \n>La Bandeja de mayor tamaño, posee un cuenco lateral fresado que beneficia la presentación de tus comidas. \n>Manijas laterales para su óptimo agarre y traslado', 0, 0, NULL, 1, 8, '2022-10-30 00:00:00'),
(30, 'Parrilla Reforzada (80 x 50cm)', 'Un caballito de batalla', '>Incluye Sector Achurero para mayor versatilidad en tus comidas asadas. \n>Con refuerzo longitudinal y transversal (para una durabilidad garantizada). \n>Manijas laterales con ergonómica manipulación. \n>Resistente a altas temperaturas.', 16380 , 0, NULL, 1, 2, '2022-10-30 00:00:00'),
(31, 'Parrilla Modular Reforzada (80 x 50cm)', '(Incluye Plancha) \nUna combinación perfecta', '>Incluye Sector Achurero para mayor versatilidad en tus comidas asadas. \n>Por encima de la superficie de cocción, se ubica la Plancha Reforzada, la cual queda inmóvil debido a unos soportes fijos que posee la Parrilla. \n>Con refuerzo longitudinal y transversal (para una durabilidad garantizada). \n>Manijas laterales con ergonómica manipulación. \n>Resistente a altas temperaturas.', 22280, 0, NULL, 1, 2, '2022-10-30 00:00:00'),
(32, 'Parrilla Modular (80 x 50cm) + Sobre Parrilla', '(Incluye Plancha) \nUn trío inigualable', '>Incluye Sector Achurero para mayor versatilidad en tus comidas asadas. \n>Por encima de la superficie de cocción, se ubica la Plancha Reforzada, la cual queda inmóvil debido a unos soportes fijos que posee la Parrilla. \n>Novedoso sistema de Sobre-Parrilla para posicionar alimentos ya cocidos y mantener su temperatura adecuada. \n>Con refuerzo longitudinal y transversal (para una durabilidad garantizada). \n>Manijas laterales con ergonómica manipulación. \n>Resistente a altas temperaturas.', 27111, 0, NULL, 1, 2, '2022-10-30 00:00:00'),
(33, 'Parrilla Varillas Flotantes + Achurero(90x50)', 'Un concepto deslumbrante', '>Novedoso sistema de varillas flotantes (marco perforado con agujeros) permitiendo un movimiento de las mismas beneficiando en su limpieza y evitando concentración de tensiones por soldadura. \n>Incluye Sector Achurero para mayor versatilidad en tus comidas asadas. \n>Con refuerzo longitudinal y transversal (para una durabilidad garantizada). \n>Manijas laterales con ergonómica manipulación. \n>Resistente a altas temperaturas.', 19060, 0, NULL, 1, 2, '2022-10-30 00:00:00'),
(34, 'Parrilla Modular Flotante + Achurero (90x50)', '(Incluye Plancha) \nUn dúo letal', '>Novedoso sistema de varillas flotantes (marco perforado con agujeros) permitiendo un movimiento de las mismas beneficiando en su limpieza y evitando concentración de tensiones por soldadura. \n>Incluye Sector Achurero para mayor versatilidad en tus comidas. \n>Por encima de la superficie de cocción, se ubica la Plancha Reforzada. \n>Con refuerzo longitudinal y transversal (para una durabilidad garantizada). \n>Manijas laterales con ergonómica manipulación. \n>Resistente a altas temperaturas.', 24960, 0, NULL, 1, 2, '2022-10-30 00:00:00'),
(35, 'Parrilla con Sistema de Desgrase (80 x 50cm)', 'Concepto único, exclusivo', '>Novedoso sistema de escurrimiento de grasa y líquidos con ángulos. \n>Manijas laterales con ergonómica manipulación. \n>Resistente a altas temperaturas. \n>Con escurridor de líquidos desmontable para facilitar su limpieza. \n>Incluye Caja de Desgrase. \n>Manijas laterales con ergonómica manipulación. \n>Resistente a altas temperaturas.', 0, 0, NULL, 1, 2, '2022-10-30 00:00:00'),
(36, 'Sobre - Parrilla (80 x 20cm)', 'Un accesorio que no te puede faltar', '>Novedoso sistema demsontable para posicionar alimentos ya cocidos y mantener su temperatura adecuada.', 0 , 0, NULL, 1, 2, '2022-10-30 00:00:00'),
(37, 'Chapa para Asar a 2 Fuegos (80 x 50cm)', 'El siguiente nivel que todo asador necesita', '>Novedoso sistema desmontable para colocar brasas calientes y leña, permitiendo una cocción a 2 fuegos por la parte superior de la Parrilla. \n>Manijas laterales con ergonómica manipulación. \n>Resistente a altas temperaturas.', 0 , 0, NULL, 1, 2, '2022-10-30 00:00:00'),
(38, 'Fogonero Cruz MUNDIAL (con accesorios)', '¿Listos para vivir la experiencia TITABÉ?', '>Disfrutá descubriendo su versatilidad. Es ideal para reuniones con familiares, amigos, colegas y amantes de comidas a la llama. \n>Producto de primera calidad, diseño único, utilidad eterna y sobre todo excelente para cocinar gran variedad de alimentos.', 59700, 0, NULL, 1, 4, '2022-10-30 00:00:00'),
(39, 'Fogonero Cruz TITABÉ (con accesorios)', '¿Listos para vivir la experiencia TITABÉ?', '>Disfrutá descubriendo su versatilidad. Es ideal para reuniones con familiares, amigos, colegas y amantes de comidas a la llama. \n>Producto de primera calidad, diseño único, utilidad eterna y sobre todo excelente para cocinar gran variedad de alimentos.', 65400, 0, NULL, 1, 4, '2022-10-30 00:00:00'),
(40, 'Fogonero Cruz PRO (con accesorios)', '¿Listos para vivir la experiencia TITABÉ?', '>Disfrutá descubriendo su versatilidad. Es ideal para reuniones con familiares, amigos, colegas y amantes de comidas a la llama. \n>Producto de primera calidad, diseño único, utilidad eterna y sobre todo excelente para cocinar gran variedad de alimentos.', 79590, 0, NULL, 1, 4, '2022-10-30 00:00:00'),
(41, 'Asador TITABÉ', 'La sensación de sentirte vos mismo', '>Disfrutá descubriendo su versatilidad. Es ideal para reuniones con familiares, amigos, colegas y amantes de comidas a la llama. \n>Producto de primera calidad, diseño único, utilidad eterna y sobre todo excelente para cocinar gran variedad de alimentos.', 0, 0, NULL, 1, 5, '2022-10-30 00:00:00'),
(42, 'GRABADO 1: Texto (hasta 15 letras)', 'Personalizá tus presentaciones', '>Regalá una tabla auténtica y muy canchera. Elegí el diseño que más te guste y nosotros nos encargamos de hacerlo realidad. \n>Servicio de Grabado Láser Personalizado en Tablas de Algarrobo. \n>Nombre, apodo, frase, logo, escudo, entre tantos otros motivos. \n>Diversos tipos de fuente.', 0, 0, NULL, 1, 10, '2022-10-30 00:00:00'),
(48, 'ALQUILER: Cruz de Pie', 'Disfruta nuestros productos por un dia', '>Tus carnes y verduras a la llama ahora tienen donde engancharse. \n>Soporta hasta 30kg. garantizados.', 0 , 0, NULL, 1, 9, '2022-10-30 00:00:00');

UNLOCK TABLES;
-- (4, '', '', '', , 0, NULL, 1, , '2022-10-30 00:00:00'),

-- -----------------------------------------------------
-- Table `titabe_db`.`products_images`
-- -----------------------------------------------------
LOCK TABLES `products_images` WRITE;
INSERT INTO `products_images` (`id`, `name`, `main`, `product_id`) VALUES 
(1, 'P01.png', 1, 1), (2, 'P02.png', 1, 2), (3, 'P03.png', 1, 3), (4, 'P04.png', 1, 4), (5, 'P05.png', 1, 5),
(6, 'P06.png', 1, 6), (7, 'P07.png', 1, 7), (8, 'P08.png', 1, 8), (9, 'P09.png', 1, 9), (10, 'P10.png', 1, 10),
(11, 'P11.png', 1, 11), (12, 'P12.png', 1, 12), (13, 'P13.png', 1, 13), (14, 'P14.png', 1, 14), (15, 'P15.png', 1, 15),
(16, 'P16.png', 1, 16), (17, 'P17.png', 1, 17), (18, 'P18.png', 1, 18), (19, 'P19.png', 1, 19), (20, 'P20.png', 1, 20), 
(21, 'P21.png', 1, 21), (22, 'P22.png', 1, 22), (23, 'P23.png', 1, 23), (24, 'P24.png', 1, 24), (25, 'P25.png', 1, 25), 
(26, 'P26.png', 1, 26), (30, 'P30.png', 1, 30), (31, 'P31.png', 1, 31), (32, 'P32.png', 1, 32), (33, 'P33.png', 1, 33), 
(34, 'P34.png', 1, 34), (35, 'P35.png', 1, 35), (36, 'P36.png', 1, 36), (37, 'P37.png', 1, 37), (38, 'P38.jpg', 1, 38), 
(39, 'P39.jpg', 1, 39), (40, 'P40.jpg', 1, 40), (41, 'P41.jpg', 1, 41), (42, 'P42.png', 1, 42), (48, 'P48.png', 1, 48);
UNLOCK TABLES;


-- -----------------------------------------------------
-- Table `titabe_db`.`cart_status`
-- -----------------------------------------------------
LOCK TABLES `cart_status` WRITE;
INSERT INTO `cart_status` (`id`, `name`) VALUES (1, 'New'), (2, 'Pending Payment'), (3, 'Shipping'), (4, 'Finished'), (5, 'Canceled');
UNLOCK TABLES;	


-- -----------------------------------------------------
-- Table `titabe_db`.`cart`
-- -----------------------------------------------------



-- -----------------------------------------------------
-- Table `titabe_db`.`cart_items`
-- -----------------------------------------------------


/*
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
*/
