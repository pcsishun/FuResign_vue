-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2021 at 01:39 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `furesign`
--

-- --------------------------------------------------------

--
-- Table structure for table `testquerytable`
--

CREATE TABLE `testquerytable` (
  `id` int(10) UNSIGNED NOT NULL,
  `arrayImg` int(11) NOT NULL,
  `description` text NOT NULL,
  `CreateDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testquerytable`
--

INSERT INTO `testquerytable` (`id`, `arrayImg`, `description`, `CreateDate`) VALUES
(1, 10, 'AAAAAAAAAAAAAAAAAAAAaa', '2021-09-07 11:36:24'),
(2, 25, 'Aaddxvcc', '2021-09-07 11:36:24'),
(3, 32, 'addfgfhgjhkjkhjtr', '2021-09-07 11:36:24'),
(4, 5, 'fgffsfdfdfsdfdsdfxvc', '2021-09-07 11:36:24'),
(5, 96, 'sfdghfhfdffadssdad', '2021-09-07 11:36:24'),
(6, 26, 'fdffsdfsfs', '2021-09-07 11:36:24'),
(7, 96, 'fdgfdfsddfsdf', '2021-09-07 11:36:24'),
(8, 75, 'fddffzxvvvcvbvc', '2021-09-07 11:36:24'),
(9, 66, 'dfgdfgsdfsdfxcv', '2021-09-07 11:36:24'),
(10, 25, 'dsdsdsffsdfdf', '2021-09-07 11:36:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `testquerytable`
--
ALTER TABLE `testquerytable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `testquerytable`
--
ALTER TABLE `testquerytable`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
