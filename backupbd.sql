-- MySQL dump 10.13  Distrib 9.1.0, for Win64 (x86_64)
--
-- Host: localhost    Database: estoque
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` blob,
  `price` float NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'Produto Exemplo3 - atualizado','Descri├º├úo do produto de exemplo',NULL,89.99,0),(4,'Produto Exemplo4','Descri├º├úo do produto de exemplo',NULL,111.11,0),(5,'Produto Exemplo Novo1','Descri├º├úo do produto de exemplo',NULL,150,0),(9,'Novo Produto do Usuario','Um novo usuario cadastrou este aqui',NULL,9999.99,100),(13,'Protetor Solar','Protetor Solar Corporal',NULL,120,123),(14,'Hidrante para os Olhos','Hidratante para os de argila e cha verde',NULL,12.99,7),(15,'Creme facial','Creme de rosto',NULL,54.99,14);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stocks`
--

DROP TABLE IF EXISTS `stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stocks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int NOT NULL,
  `quantity` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  CONSTRAINT `stocks_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_10` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_11` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_12` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_13` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_14` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_15` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_16` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_17` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_18` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_19` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_20` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_21` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_22` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_23` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_24` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_25` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_26` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_27` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_28` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_29` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_3` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_30` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_31` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_32` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_33` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_34` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_35` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_36` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_37` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_38` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_39` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_4` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_40` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_41` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_42` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_43` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_44` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_45` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_5` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_6` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_7` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_8` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `stocks_ibfk_9` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stocks`
--

LOCK TABLES `stocks` WRITE;
/*!40000 ALTER TABLE `stocks` DISABLE KEYS */;
INSERT INTO `stocks` VALUES (3,3,100,'2024-10-31 16:17:15','2024-10-31 16:17:15'),(4,4,2,'2024-10-31 16:28:01','2024-10-31 16:28:01'),(5,5,2,'2024-11-02 14:50:30','2024-11-02 14:50:30');
/*!40000 ALTER TABLE `stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `email_22` (`email`),
  UNIQUE KEY `email_23` (`email`),
  UNIQUE KEY `email_24` (`email`),
  UNIQUE KEY `email_25` (`email`),
  UNIQUE KEY `email_26` (`email`),
  UNIQUE KEY `email_27` (`email`),
  UNIQUE KEY `email_28` (`email`),
  UNIQUE KEY `email_29` (`email`),
  UNIQUE KEY `email_30` (`email`),
  UNIQUE KEY `email_31` (`email`),
  UNIQUE KEY `email_32` (`email`),
  UNIQUE KEY `email_33` (`email`),
  UNIQUE KEY `email_34` (`email`),
  UNIQUE KEY `email_35` (`email`),
  UNIQUE KEY `email_36` (`email`),
  UNIQUE KEY `email_37` (`email`),
  UNIQUE KEY `email_38` (`email`),
  UNIQUE KEY `email_39` (`email`),
  UNIQUE KEY `email_40` (`email`),
  UNIQUE KEY `email_41` (`email`),
  UNIQUE KEY `email_42` (`email`),
  UNIQUE KEY `email_43` (`email`),
  UNIQUE KEY `email_44` (`email`),
  UNIQUE KEY `email_45` (`email`),
  UNIQUE KEY `email_46` (`email`),
  UNIQUE KEY `email_47` (`email`),
  UNIQUE KEY `email_48` (`email`),
  UNIQUE KEY `email_49` (`email`),
  UNIQUE KEY `email_50` (`email`),
  UNIQUE KEY `email_51` (`email`),
  UNIQUE KEY `email_52` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (28,'teste1','teste1@teste.com','$2a$10$Yu5P2QDNsgsO7w0EYF7ClOA94GPm4m.Z3aLpl1ss743x8YBDliqF.','2024-11-02 10:39:01','2024-11-02 10:39:01'),(29,'Laura','laura@email.com','$2a$10$8ok5URr.h0w6Zk6lU3qeC.lSKMOrv9nQXpq/X7oYdOzBmDvMBWK0q','2024-11-02 13:18:21','2024-11-02 13:18:21'),(30,'Teste123','teste123@email.com','$2a$10$qqMVGJsq8/9Ep/SM9XWWRuut1roNGZbQyyVrA/ibx6W/z2zk1mVgy','2024-11-02 14:38:53','2024-11-02 14:38:53'),(31,'Teste30','teste30@email.com','$2a$10$3tyhI3iTkNTxXKeMA.n3buZM/m8woEJuLyMuVWMGN07T/WxQsRrqu','2024-11-02 16:48:15','2024-11-02 16:48:15'),(32,'teste31@email.com','teste31@email.com','$2a$10$aaMdgllrtShNNTM1pssx6OBaoUbVloPG2IsSMtUOxEASB43GsOqwW','2024-11-02 17:40:05','2024-11-02 17:40:05'),(33,'Teste1000','teste1000@email.com','$2a$10$Cm0N9sxisgEGqrWRYaV3kOYMRyHWmjUNG4dj/vSjHdMpaMehmmhgW','2024-11-02 20:57:08','2024-11-02 20:57:08'),(34,'usuario','usuario@email.com','$2a$10$e0iYFRKY6MU7rF3lOHqgpOj4trygaDZt32ySCk95Ioz9DVcba/Nr2','2024-11-03 00:31:08','2024-11-03 00:31:08');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-02 23:15:31
