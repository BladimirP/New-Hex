-- MySQL dump 10.19  Distrib 10.3.34-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: Analisis_indicadores
-- ------------------------------------------------------
-- Server version	10.3.34-MariaDB-0ubuntu0.20.04.1

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
-- Table structure for table `Ejes`
--

DROP TABLE IF EXISTS `Ejes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ejes` (
  `id_eje` int(11) NOT NULL AUTO_INCREMENT,
  `id_indicador` int(11) DEFAULT NULL,
  `name_eje` varchar(25) DEFAULT NULL,
  `fecha_eje` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id_eje`),
  KEY `id_indicador` (`id_indicador`),
  CONSTRAINT `Ejes_ibfk_1` FOREIGN KEY (`id_indicador`) REFERENCES `Indicadores` (`id_indicador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ejes`
--

LOCK TABLES `Ejes` WRITE;
/*!40000 ALTER TABLE `Ejes` DISABLE KEYS */;
/*!40000 ALTER TABLE `Ejes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Indicadores`
--

DROP TABLE IF EXISTS `Indicadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Indicadores` (
  `id_indicador` int(11) NOT NULL AUTO_INCREMENT,
  `name_indicador` varchar(25) DEFAULT NULL,
  `metrica` varchar(25) DEFAULT NULL,
  `fecha_indicador` varchar(25) DEFAULT NULL,
  `valor_actual` int(11) DEFAULT NULL,
  `valor_objetivo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_indicador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Indicadores`
--

LOCK TABLES `Indicadores` WRITE;
/*!40000 ALTER TABLE `Indicadores` DISABLE KEYS */;
/*!40000 ALTER TABLE `Indicadores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-02  1:09:03
