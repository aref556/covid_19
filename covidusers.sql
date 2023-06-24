-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: covid-user
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `covid_user`
--

DROP TABLE IF EXISTS `covid_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `covid_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no` int(11) NOT NULL,
  `annouce_date` datetime NOT NULL,
  `notified_date` datetime NOT NULL,
  `age` int(11) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `province_of_isolation` varchar(255) NOT NULL,
  `risk` varchar(255) NOT NULL,
  `province_of_onset` varchar(255) NOT NULL,
  `district_of_onset` varchar(255) NOT NULL,
  `isActive` tinyint(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `covid_user`
--

LOCK TABLES `covid_user` WRITE;
/*!40000 ALTER TABLE `covid_user` DISABLE KEYS */;
INSERT INTO `covid_user` VALUES (6,1,'2023-06-24 15:40:02','2023-06-24 15:40:02',25,'years','thai','Bangkok','checking process','ChiangMai','JomThong',1),(8,2,'2023-06-24 15:53:52','2023-06-24 15:53:52',21,'years','thai','Bangkok','checking process','ChiangMai','JomThong',1),(9,3,'2023-06-24 15:54:14','2023-06-24 15:54:14',20,'years','thai','Bangkok','checking process','ChiangMai','JomThong',1),(10,4,'2023-06-24 15:54:18','2023-06-24 15:54:18',20,'years','thai','Bangkok','checking process','ChiangMai','JomThong',1),(11,5,'2023-06-24 15:54:20','2023-06-24 15:54:20',20,'years','thai','Bangkok','checking process','ChiangMai','JomThong',1),(12,6,'2023-06-24 15:54:23','2023-06-24 15:54:23',20,'years','thai','Bangkok','checking process','ChiangMai','JomThong',1),(13,7,'2023-06-24 15:54:26','2023-06-24 15:54:26',20,'years','thai','Bangkok','checking process','ChiangMai','JomThong',1),(14,8,'2023-06-24 15:54:29','2023-06-24 15:54:29',20,'years','thai','Bangkok','checking process','ChiangMai','JomThong',1),(15,9,'2023-06-24 15:54:32','2023-06-24 15:54:32',20,'years','thai','Bangkok','checking process','ChiangMai','JomThong',1),(16,10,'2023-06-24 15:54:36','2023-06-24 15:54:36',20,'years','thai','Bangkok','checking process','ChiangMai','JomThong',1);
/*!40000 ALTER TABLE `covid_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-24 17:41:52
