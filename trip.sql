-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2025 at 08:01 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trip`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `user_id` int(100) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `mobile` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `created_date` varchar(100) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`user_id`, `name`, `email`, `password`, `mobile`, `created_date`) VALUES
(2, 'Admin', 'admin@gmail.com', 'test', '1234567890', '2025-01-19');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cus_id`, `email`, `field_1`, `created_date`) VALUES
(1, 'user@gmail.com', 'Bangalore', '2025-03-28'),
(8, 'user@gmail.com', 'Kerala', '2025-03-28'),
(9, 'user@gmail.com', 'Goa', '2025-03-29');

-- --------------------------------------------------------

--
-- Table structure for table `expense`
--

CREATE TABLE `expense` (
  `cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_3` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_5` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_6` varchar(10) COLLATE utf8_bin NOT NULL,
  `field_7` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `expense`
--

INSERT INTO `expense` (`cus_id`, `email`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `field_6`, `field_7`, `created_date`) VALUES
(1, 'user@gmail.com', 'Bangalore', 'Kumar', 'Car', '200', '467', '-', 'red', '2025-03-29'),
(3, 'user@gmail.com', 'Bangalore', 'Arun', 'Car', '500', '167', '-', 'red', '2025-03-29'),
(4, 'user@gmail.com', 'Bangalore', 'Selvam', 'Food', '500', '167', '-', 'red', '2025-03-29'),
(5, 'user@gmail.com', 'Kerala', 'Kumar', 'Hotel', '500', NULL, '', '', '2025-03-29'),
(6, 'user@gmail.com', 'Kerala', 'Arun', 'Car', '100', NULL, '', '', '2025-03-29'),
(7, 'user@gmail.com', 'Goa', 'Kumar', 'Car', '200', NULL, '', '', '2025-03-29'),
(8, 'user@gmail.com', 'Goa', 'Arun', 'Food', '500', NULL, '', '', '2025-03-29');

-- --------------------------------------------------------

--
-- Table structure for table `expense_total`
--

CREATE TABLE `expense_total` (
  `cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_3` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_5` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_6` varchar(10) COLLATE utf8_bin NOT NULL,
  `field_7` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `expense_total`
--

INSERT INTO `expense_total` (`cus_id`, `email`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `field_6`, `field_7`, `created_date`) VALUES
(1, 'user@gmail.com', 'Bangalore', 'Kumar', 'Car', '1000', '333', '+', 'green', '2025-03-29'),
(2, 'user@gmail.com', 'Bangalore', 'Arun', 'Car', '500', '167', '-', 'red', '2025-03-29'),
(3, 'user@gmail.com', 'Bangalore', 'Selvam', 'Food', '500', '167', '-', 'red', '2025-03-29'),
(4, 'user@gmail.com', 'Kerala', 'Kumar', 'Hotel', '500', '200', '+', 'green', '2025-03-29'),
(5, 'user@gmail.com', 'Kerala', 'Arun', 'Car', '100', '200', '-', 'red', '2025-03-29'),
(6, 'user@gmail.com', 'Goa', 'Kumar', 'Car', '200', '150', '-', 'red', '2025-03-29'),
(7, 'user@gmail.com', 'Goa', 'Arun', 'Food', '500', '150', '+', 'green', '2025-03-29');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `user_id` int(100) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `mobile` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_3` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(100) COLLATE utf8_bin NOT NULL,
  `status` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user_id`, `name`, `email`, `password`, `mobile`, `field_1`, `field_2`, `field_3`, `field_4`, `status`, `created_date`) VALUES
(166, 'User', 'user@gmail.com', 'test', '1234567890', 'Bangalore', 'Bangalore', 'test', 'test', 'Active', '2021-01-20'),
(176, 'test', 'test@gmail.com', 'test', '1234567890', 'Bangalore', 'Bangalore', 'test', 'test', 'Inactive', '2021-01-20');

-- --------------------------------------------------------

--
-- Table structure for table `name`
--

CREATE TABLE `name` (
  `cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `name`
--

INSERT INTO `name` (`cus_id`, `email`, `field_1`, `created_date`) VALUES
(1, 'user@gmail.com', 'Selvam', '2025-03-28'),
(2, 'user@gmail.com', 'Arun', '2025-03-28'),
(3, 'user@gmail.com', 'Kumar', '2025-03-28');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_3` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_5` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_6` varchar(10) COLLATE utf8_bin NOT NULL,
  `field_7` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`cus_id`, `email`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `field_6`, `field_7`, `created_date`) VALUES
(1, 'user@gmail.com', 'Spam', '3', '', '', NULL, '', '', '2025-10-02');

-- --------------------------------------------------------

--
-- Table structure for table `tour`
--

CREATE TABLE `tour` (
  `cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_1` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_2` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_3` varchar(500) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_5` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_6` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_7` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_date` date NOT NULL,
  `field_8` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_9` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_10` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_11` varchar(100) COLLATE utf8_bin NOT NULL,
  `field_12` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tour`
--

INSERT INTO `tour` (`cus_id`, `email`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `field_6`, `field_7`, `created_date`, `field_8`, `field_9`, `field_10`, `field_11`, `field_12`) VALUES
(8, 'user@gmail.com', 'Kodaikanal', 'Thanjavur', 'Kodaikanal Lake,Bryant Park,Guna Cave,Moir Point', '1234567890', 'Bike', '2', '10', '2025-10-03', 'Own Vehicle', '2500', '2025-10-03', '2025-10-05', 'Active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `expense`
--
ALTER TABLE `expense`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `expense_total`
--
ALTER TABLE `expense_total`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `name`
--
ALTER TABLE `name`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `tour`
--
ALTER TABLE `tour`
  ADD PRIMARY KEY (`cus_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `expense`
--
ALTER TABLE `expense`
  MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `expense_total`
--
ALTER TABLE `expense_total`
  MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT for table `name`
--
ALTER TABLE `name`
  MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tour`
--
ALTER TABLE `tour`
  MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
