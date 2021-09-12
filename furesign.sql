-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2021 at 02:16 PM
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
-- Table structure for table `testdesc`
--

CREATE TABLE `testdesc` (
  `email` text NOT NULL,
  `desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testdesc`
--

INSERT INTO `testdesc` (`email`, `desc`) VALUES
('pcsishun@fff.com', 'asdasfg'),
('pcsishun@fff.com', 'asdasfg'),
('pcsishun2@gmail.com', 'TESTING ADMIN');

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

-- --------------------------------------------------------

--
-- Table structure for table `upload_log`
--

CREATE TABLE `upload_log` (
  `id` int(11) NOT NULL,
  `fieldname` text NOT NULL,
  `originalname` text NOT NULL,
  `encoding` text NOT NULL,
  `mimetype` text NOT NULL,
  `destination` text NOT NULL,
  `filename` text NOT NULL,
  `path` text NOT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `upload_log`
--

INSERT INTO `upload_log` (`id`, `fieldname`, `originalname`, `encoding`, `mimetype`, `destination`, `filename`, `path`, `size`) VALUES
(1, 'file', 'LM-logo.png', '7bit', 'image/png', '../imgInput', 'bf18c07caa77e248b07e9951a0c3274b', '..\\imgInput\\bf18c07caa77e248b07e9951a0c3274b', 45603),
(2, 'file', 'LM-logo.png', '7bit', 'image/png', '../imgInput', '597e2712601cfda07248acac0010521b', '..\\imgInput\\597e2712601cfda07248acac0010521b', 45603),
(3, 'file', 'large.jpg', '7bit', 'image/jpeg', '../imgInput', '9c3f65a2323ba7f33891ca2c9fa3e0f9', '..\\imgInput\\9c3f65a2323ba7f33891ca2c9fa3e0f9', 94361);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `testquerytable`
--
ALTER TABLE `testquerytable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upload_log`
--
ALTER TABLE `upload_log`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `testquerytable`
--
ALTER TABLE `testquerytable`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `upload_log`
--
ALTER TABLE `upload_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
