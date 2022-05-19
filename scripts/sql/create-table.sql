CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created` datetime NOT NULL,
  `vendor` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  `event_name` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  `confirmed_date` date DEFAULT NULL,
  `proposed_date` varchar(125) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `notes` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;