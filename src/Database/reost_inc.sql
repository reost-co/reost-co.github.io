-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: reost_inc
-- ------------------------------------------------------
-- Server version	5.7.38-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(200) NOT NULL,
  `lname` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `address` varchar(300) NOT NULL,
  `state` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `create_date` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (2,'Muwereza','Isaac','isaac@rs.com','+256759730932','male','US, NewYork','true','@isaac1234567','Mon Feb 27 17:02:27 EAT 2023'),(3,'Muwanguzi','Silas','silas.jcts@gmail.com','+256 759 730 932','male','Kampala, Uganda','true','@Seal1234567','Tue Feb 28 23:16:37 EAT 2023');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `state` varchar(200) NOT NULL DEFAULT 'true',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
INSERT INTO `faq` VALUES (1,'What does reost really do?','Reost is a remote-based software engineering company, and what we is building software for individuals, teams and businesses according to the presented requirements. We build web, mobile and desktop applications.','true'),(2,'How do I create a product / application with you?','First you\'ll need to create a reost account if you don\'t own one, signin to your dashboard, click \'create new project\', fill the required fields and submit your application project details. An expert from our team will reachout (within 24 hours) to discuss with you, and then we\'ll get started on your project.','true'),(3,'What do I need to have in mind before creating a project?','You need to have the vision of the application, we mean, what the application will do? where you need it? estimate project budget and duration, and basic information about your requirements for the project.','true'),(4,'Do I need to be a computer expert to create a project with you?','No, not at all. That\'s why we are here, to handle the technical part, you only need to tell us what you need to build, and we bring it to life.','true'),(5,'What steps or stages does to project undergo?','After you have submitted your project and chat with our expert, your project will undergo four (4) stages. These include : a) System analysis and design - where we cretically study your requirements and comeup with a blue print of the application; b) Development - this is the real building of the designed product; c) Testing - here we test the developed product against your requirements and ensure production quality; d) Delivery - we deliver a ready and quality product for implementation;\nAt all stages you are allowed & free to take part in the development process.','true'),(6,'What is your project management style?','Our team is confortable with both agile and waterfall styles. Most projects that we work on are subject to the agile style, including our own internal reost projects.','true'),(7,'How much time will it take for you to make my app?','This actually depends on how big your project requirements are, we must prepare a project scope and create a budget, some quick apps take less than two weeks to deliver, and other enterprize level applications can take a couple of weeks to complete, depending on how large the project is, we\'ll be able to tell you the project time after the phrase of \'system analysis and design\' - which takes a maximum of 3 business days.','true'),(8,'How do you handle communications during the project?','We assign a specific person you regularly communicate with, he/she will constantly update you on the status and progress of your project. You can at anytime reachout and get feedback. Also you can view details of your project progression by clicking on the project from your \'dashboard\' on this platform.','true'),(9,'How do you guarantee product quality?','We deeply test our work (conducting both development and acceptance tests), we present it to you and apply your feedback so you know you get exactly what you are looking for.',''),(10,'What is the potential for updates?','As your business grows, the software solution should be able to grow with you. It’s far more cost effective to look at the longer-term picture from the beginning of a project, as it prevents you from having to create entirely new software later. We consider this and use modern cutting-edge technologies and best practices to build your product, so updates are smoother!','true'),(11,'I want to be involved in the app development process, do you have a problem with that?','Not at all! We want you to be sure you\'ll receive the product you desire. From the planning stage to each finished version, we invite you to evaluate and improve our work. Our philosophy is to work with the client, not merely finish given tasks. We are always ready to listen and communicate.','true'),(12,'What if I come to you with a product that I want to improve?','We’ll be more than happy to help you upgrade your product, from UI/UX, improving your system architecture, adding new features and overall system maintenance.','true'),(13,'How much do you charge?','It depends on many things: project scope, time spent on the project and technological issues. Well that sounds vague but its simply honest. Remember that each software project is different, especially if you had a particularly original idea. We do not want to give you an unrealistic estimate, instead we want to provide you with the best quality possible within your budget.','true'),(14,'How many developers do you have?','Our community is comprised of 500+ engineers who are experts in their tech fields, distributed across the globe. Furthermore we have first-hand access to talent platforms like Turing, Andela, Mission, and RemoteBase, making our team very scalable.','true'),(15,'What technologies do you use?','We choose modern cutting-edge technologies in building products, these include : a) Java [Java SE, Java EE, SpringBoot, JavaFX]; b) Python [Python 3.x, Django, Flask, ML]; c) JavaScript [Node, React, Vue, TypeScript]; d) SQL [MySQL, PostgreSQL]; e) NoSQL [MongoDB, DocumentDB]; And great project management tools.','true');
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `message` text NOT NULL,
  `state` varchar(200) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'Muwereza Isaac','isaac@rs.com','+256759730932','Roles','How are you','unread','Wed Feb 22 13:06:38 EAT 2023'),(2,'Muwereza Isaac','isaac@rs.com','+256759730932','Roles','Sample Message!','unread','Sun Feb 26 18:49:04 EAT 2023'),(3,'Muwanguzi Silas','isaac@rs.com','+256759730932','Roles','Sample message using showAlert!','unread','Sun Feb 26 19:31:21 EAT 2023'),(4,'Silas','isaac@rs.com','+256759730932','Roles','Thank you Jesus!','unread','Sun Feb 26 19:33:14 EAT 2023'),(5,'Muwereza Isaac','isaac@rs.com','+256759730932','Roles','Sample message!','unread','Sun Feb 26 19:36:21 EAT 2023'),(6,'Muwereza Isaac','isaac@rs.com','+256759730932','Roles','Message body!','unread','Sun Feb 26 19:36:53 EAT 2023');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_milistones`
--

DROP TABLE IF EXISTS `project_milistones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_milistones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project` varchar(200) NOT NULL,
  `milistone` varchar(200) NOT NULL,
  `state` varchar(50) NOT NULL,
  `progress` varchar(200) NOT NULL,
  `complete_date` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_milistones`
--

LOCK TABLES `project_milistones` WRITE;
/*!40000 ALTER TABLE `project_milistones` DISABLE KEYS */;
INSERT INTO `project_milistones` VALUES (1,'1','Analysis & Design','pending','0','---'),(2,'1','Development','pending','0','---'),(3,'1','Testing','pending','0','---'),(4,'1','Delivery','pending','0','---'),(5,'2','Analysis & Design','pending','0','---'),(6,'2','Development','pending','0','---'),(7,'2','Testing','pending','0','---'),(8,'2','Delivery','pending','0','---');
/*!40000 ALTER TABLE `project_milistones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` varchar(200) NOT NULL,
  `title` varchar(300) NOT NULL,
  `description` text NOT NULL,
  `proposed_budget` varchar(200) NOT NULL,
  `proposed_duration` varchar(200) NOT NULL,
  `post_date` varchar(200) NOT NULL,
  `state` varchar(50) NOT NULL,
  `progress` varchar(50) NOT NULL,
  `start` varchar(200) NOT NULL,
  `end` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'2','An E-commerce web application','I need a retail online shop and deliveries web application to support my business!','UgShs 5000000','1 month','Tue Feb 28 17:46:35 EAT 2023','pending','0','---','---'),(2,'2','Enterprize application','I need an enterprize software for my business','$ 5000','1 month','Tue Feb 28 18:07:54 EAT 2023','pending','0','---','---');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-01  0:02:26
