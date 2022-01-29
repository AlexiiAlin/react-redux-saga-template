-- MySQL dump 10.13  Distrib 5.7.24, for macos10.14 (x86_64)
--
-- Host: localhost    Database: Forum-DB
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comments` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `TopicId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Comments_Topics_FK` (`TopicId`),
  KEY `Comments_Users_FK` (`UserId`),
  CONSTRAINT `Comments_Topics_FK` FOREIGN KEY (`TopicId`) REFERENCES `Topics` (`Id`),
  CONSTRAINT `Comments_Users_FK` FOREIGN KEY (`UserId`) REFERENCES `Users` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments`
--

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;
INSERT INTO `Comments` VALUES (128,213,11,'test'),(136,221,24,'altju');
/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Topics`
--

DROP TABLE IF EXISTS `Topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Topics` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  `Url` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Topics_Users_FK` (`UserId`),
  CONSTRAINT `Topics_Users_FK` FOREIGN KEY (`UserId`) REFERENCES `Users` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=222 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Topics`
--

LOCK TABLES `Topics` WRITE;
/*!40000 ALTER TABLE `Topics` DISABLE KEYS */;
INSERT INTO `Topics` VALUES (211,'New York',11,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam nec ex lacinia blandit at sed turpis. Pellentesque sodales, arcu ac lobortis eleifend, ligula lectus consequat felis, ut bibendum diam erat nec ante. Duis malesuada neque at condimentum congue. Etiam semper, nibh sit amet pellentesque luctus, nunc quam pretium turpis, eget euismod odio nisl nec orci. Aliquam erat volutpat. Proin sollicitudin, massa et faucibus mollis, purus erat hendrerit ante, nec sollicitudin eros diam a mauris. Fusce porta metus eu varius auctor. ','https://media-cdn.tripadvisor.com/media/photo-o/0e/9a/e3/1d/freedom-tower.jpg'),(212,'Barcelona',11,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam nec ex lacinia blandit at sed turpis. Pellentesque sodales, arcu ac lobortis eleifend, ligula lectus consequat felis, ut bibendum diam erat nec ante. Duis malesuada neque at condimentum congue. Etiam semper, nibh sit amet pellentesque luctus, nunc quam pretium turpis, eget euismod odio nisl nec orci. Aliquam erat volutpat. Proin sollicitudin, massa et faucibus mollis, purus erat hendrerit ante, nec sollicitudin eros diam a mauris. Fusce porta metus eu varius auctor. ','https://www.riotgames.com/darkroom/1440/f5f167c525dd1f3989bcfe9ebd3c7995:a842310bd11ee602459b324d098e0e02/barcelona-main.jpg'),(213,'London',11,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam nec ex lacinia blandit at sed turpis. Pellentesque sodales, arcu ac lobortis eleifend, ligula lectus consequat felis, ut bibendum diam erat nec ante. Duis malesuada neque at condimentum congue. Etiam semper, nibh sit amet pellentesque luctus, nunc quam pretium turpis, eget euismod odio nisl nec orci. Aliquam erat volutpat. Proin sollicitudin, massa et faucibus mollis, purus erat hendrerit ante, nec sollicitudin eros diam a mauris. Fusce porta metus eu varius auctor. ','https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg'),(214,'Tokyo',12,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam nec ex lacinia blandit at sed turpis. Pellentesque sodales, arcu ac lobortis eleifend, ligula lectus consequat felis, ut bibendum diam erat nec ante. Duis malesuada neque at condimentum congue. Etiam semper, nibh sit amet pellentesque luctus, nunc quam pretium turpis, eget euismod odio nisl nec orci. Aliquam erat volutpat. Proin sollicitudin, massa et faucibus mollis, purus erat hendrerit ante, nec sollicitudin eros diam a mauris. Fusce porta metus eu varius auctor. ','https://www.japan-guide.com/thumb/XYZeXYZe3009_375.jpg'),(220,'test',11,'',''),(221,'Paris',24,'Paris (French pronunciation: ​[paʁi] (About this soundlisten)) is the capital and most populous city of France, with an area of 105 square kilometres (41 square miles) and a population of 2,206,488.[2][3] Since the 17th century, Paris has been one of Europe\'s major centres of finance, commerce, fashion, science, and the arts.\n\nThe City of Paris is the centre and seat of government of the Île-de-France, or Paris Region, which has an estimated official 2018 population of 12,246,234 persons, or 18.2 percent of the population of France. The Paris Region had a GDP of €681 billion (US$850 billion) in 2016, accounting for 31 per cent of the GDP of France.[4] According to the Economist Intelligence Unit Worldwide Cost of Living Survey in 2018, Paris was the second-most expensive city in the world, behind Singapore and ahead of Zurich, Hong Kong, Oslo and Geneva.[5]','https://upload.wikimedia.org/wikipedia/commons/0/08/Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG');
/*!40000 ALTER TABLE `Topics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserLikesTopic`
--

DROP TABLE IF EXISTS `UserLikesTopic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserLikesTopic` (
  `UserId` int(11) NOT NULL,
  `TopicId` int(11) NOT NULL,
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Id`),
  KEY `UserLikesTopic_Topics_FK` (`TopicId`),
  KEY `UserLikesTopic_Users_FK` (`UserId`),
  CONSTRAINT `UserLikesTopic_Topics_FK` FOREIGN KEY (`TopicId`) REFERENCES `Topics` (`Id`),
  CONSTRAINT `UserLikesTopic_Users_FK` FOREIGN KEY (`UserId`) REFERENCES `Users` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserLikesTopic`
--

LOCK TABLES `UserLikesTopic` WRITE;
/*!40000 ALTER TABLE `UserLikesTopic` DISABLE KEYS */;
INSERT INTO `UserLikesTopic` VALUES (12,213,48),(12,211,49),(12,214,50),(13,211,52),(13,212,54),(14,211,62),(14,212,66),(11,214,83),(11,211,86),(11,213,87),(20,211,88),(20,214,89),(24,213,90),(24,212,91),(24,221,92);
/*!40000 ALTER TABLE `UserLikesTopic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  `Gender` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (11,'AlinAlexii','dbba','Alin','Alexii',0),(12,'JohnnyTest','1234567','Johnny','Test',0),(13,'PopescuDaria','1234567','Daria','Popescu',1),(14,'LauraBoss','1234567','Laura','Boss',1),(15,'TestEnc','alza','1','1',0),(16,'AsaDa','dbadhzaoha','Asa','Da',0),(17,'TestGender','123456','Test','Gend',0),(18,'waaaaa','dhhhhh','waaaaa','waaaaa',1),(19,'TestDemo','1234567','Test','Demo',0),(20,'CevaDemo','qwerty','altceva','altceva',0),(21,'wut','wutwutwut','wut','wut',0),(22,'wuut','dbba','acumda','acumda',0),(23,'NewShit123','UldZopa123','NewShit','NewShit',0),(24,'MirunaOancea','12345t','Miruna','Oancea',1);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'Forum-DB'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-11 18:03:58
