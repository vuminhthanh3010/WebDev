-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2018 at 02:17 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobileshop1`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderid` int(10) NOT NULL,
  `date` date NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `userid` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderid`, `date`, `total`, `userid`) VALUES
(24074, '2018-05-13', '0', 1),
(595979328, '2017-08-18', '0', 1),
(1393594239, '2017-08-18', '0', 1),
(1723154582, '2017-08-18', '0', 1),
(1874656293, '2017-08-18', '0', 1),
(1951899456, '2017-08-18', '0', 1),
(2033359684, '2017-08-15', '23090000', 1),
(2052956118, '2017-08-18', '21090000', 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `orderid` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `p_price` decimal(10,0) NOT NULL,
  `quantity` int(10) NOT NULL,
  `total` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`orderid`, `product_id`, `p_name`, `p_price`, `quantity`, `total`) VALUES
(2033359684, 4, 'IPHONE 7 PLUS 128GB JETS', '23090000', 2, '46180000'),
(2033359684, 7, 'SAMSUNG GALAXY J7 PRIME', '5990000', 1, '5990000'),
(2033359684, 8, 'SAMSUNG GALAXY C9 PRO', '11490000', 1, '11490000'),
(2033359684, 11, 'OPPO F1s 2017 – 64GB', '5990000', 1, '5990000'),
(2033359684, 4, 'IPHONE 7 PLUS 128GB JETS', '23090000', 1, '23090000'),
(2033359684, 8, 'SAMSUNG GALAXY C9 PRO', '11490000', 1, '11490000'),
(2033359684, 4, 'IPHONE 7 PLUS 128GB JETS', '23090000', 1, '23090000'),
(2033359684, 8, 'SAMSUNG GALAXY C9 PRO', '11490000', 1, '11490000'),
(2033359684, 10, 'OPPO F3', '6990000', 1, '6990000'),
(2033359684, 4, 'IPHONE 7 PLUS 128GB JETS', '23090000', 1, '23090000'),
(2033359684, 8, 'SAMSUNG GALAXY C9 PRO', '11490000', 1, '11490000'),
(2033359684, 4, 'IPHONE 7 PLUS 128GB JETS', '23090000', 2, '46180000'),
(2033359684, 4, 'IPHONE 7 PLUS 128GB JETS', '23090000', 1, '23090000'),
(2052956118, 4, 'IPHONE 7 PLUS 128GB JETS', '23090000', 1, '23090000'),
(2052956118, 11, 'OPPO F1s 2017 – 64GB', '5990000', 1, '5990000'),
(2052956118, 5, 'SAMSUNG GALAXY S8', '20490000', 1, '20490000'),
(2052956118, 8, 'SAMSUNG GALAXY C9 PRO', '11490000', 1, '11490000'),
(2052956118, 1, 'IPHONE 7 PLUS 32GB GOLD', '21090000', 1, '21090000'),
(2052956118, 12, 'OPPO F1', '3590000', 1, '3590000'),
(2052956118, 4, 'IPHONE 7 PLUS 128GB JETS', '23090000', 1, '23090000'),
(2052956118, 3, 'IPHONE 7 PLUS 128GB ROSE', '23090000', 1, '23090000'),
(2052956118, 7, 'SAMSUNG GALAXY J7 PRIME', '5990000', 1, '5990000'),
(2052956118, 11, 'OPPO F1s 2017 – 64GB', '5990000', 1, '5990000'),
(2052956118, 8, 'SAMSUNG GALAXY C9 PRO', '11490000', 12, '137880000'),
(2052956118, 12, 'OPPO F1', '3590000', 1, '3590000'),
(2052956118, 2, 'IPHONE 7 PLUS 32GB BLACK', '21090000', 1, '21090000'),
(2052956118, 1, 'IPHONE 7 PLUS 128GB GOLD', '21090000', 1, '21090000');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(10) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` decimal(10,0) NOT NULL,
  `product_img` varchar(255) NOT NULL,
  `screen` varchar(255) NOT NULL,
  `camera` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `os` varchar(255) NOT NULL,
  `product_brand_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_price`, `product_img`, `screen`, `camera`, `pin`, `os`, `product_brand_id`) VALUES
(1, 'IPHONE 7 PLUS 128GB GOLD', '22090000', 'apple1.jpg', 'Retina HD 5.5 ', '12MP, 7MP', '2900 mAh', 'iOS 10', 1),
(2, 'IPHONE 7 PLUS 32GB BLACK', '21090000', 'apple2.jpg', 'Retina HD 5.5 \"', '12MP, 7MP', '2900 mAh', 'iOS 10', 1),
(3, 'IPHONE 7 PLUS 128GB ROSE', '23090000', 'apple3.jpg', 'Retina HD 5.5 \"', '12MP, 7MP', '2900 mAh', 'iOS 10', 1),
(4, 'IPHONE 7 PLUS 128GB JETS', '23090000', 'apple4.jpg', 'Retina HD 5.5 \"', '12MP, 7MP', '2900 mAh', 'iOS 10', 1),
(5, 'SAMSUNG GALAXY S8', '20490000', 'samsung1.jpg', '6.2\" Quad HD - Super AMOLED', 'trước 8MP, sau Dual Pixel 12MP', '3500 mAh', 'Android 7.0', 2),
(6, 'SAMSUNG GALAXY A7 2017', '9990000', 'samsung2.jpg', 'Full HD, 5.7 inches', '16MP, 16MP', '3600 mAh', 'Android 6.0', 2),
(7, 'SAMSUNG GALAXY J7 PRIME', '5990000', 'samsung3.jpg', '5.5 inches', '13 MP, 8 MP', '3300mAh', 'Android 6.0', 2),
(8, 'SAMSUNG GALAXY C9 PRO', '11490000', 'samsung4.jpg', 'FHD, 6.0 inches', '16MP,16MP', '4000 mAh', 'Android 6.0', 2),
(9, 'OPPO F3 Lite (A57)', '5490000', 'oppo1.jpg', 'HD 5.2\"', '16MP, 13MP', '3200 mAh', 'Android 6.0', 3),
(10, 'OPPO F3', '6990000', 'oppo2.jpg', '5.5 inches, Full HD', 'trước 16 MP + 8 MP, sau 13MP', '3200 mAh', 'Android 6.0', 3),
(11, 'OPPO F1s 2017 – 64GB', '5990000', 'oppo3.jpg', '5.5\", HD', '13 MP, Selfie: 16 MP', '3200 mAh', 'Android 6.0', 3),
(12, 'OPPO F1', '3590000', 'oppo4.jpg', 'IPS LCD, 5.0 inches', '13.0 MP', '3200 mAh', 'Android 6.0', 3),
(13, 'VIVO Y51', '3290000', 'vivo1.jpg', '5.0 inches', '8 MP', '2600mAh', 'Funtouch OS nền tảng Android', 4),
(14, 'VIVO Y53', '3390000', 'vivo2.jpg', '5.0 inches', 'trước 5MP, sau 8 MP', '2600mAh', 'Funtouch OS 3.0 nền tảng Android 6.0', 4),
(15, 'VIVO Y55', '3990000', 'vivo3.jpg', 'HD, 5.2 inches', '8 MP, 5 MP', '2600mAh', 'Funtouch OS 3.0 nền tảng Android 6.0', 4),
(16, 'VIVO V5', '5990000', 'vivo4.jpg', 'HD, 5.5 inches', '20 MP', '2600mAh', 'Funtouch OS 3.0 nền tảng Android 6.0', 4),
(1929, 'iPhone X 64GB', '29990000', '636483223586180190_1.jpg', '5.8 inchs OLED', '7.0 MP/ Dual 12.0 MP', '2716 mAh, Li-Ion battery', 'iOS 11', 1),
(1924444995, 'Lenovo vipe p1', '5000000', 'lenovo-vibe-p1-silver.png', '5.5', '16 ', '5000', 'Android', 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_brand`
--

CREATE TABLE `product_brand` (
  `product_brand_id` int(10) NOT NULL,
  `product_brand_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_brand`
--

INSERT INTO `product_brand` (`product_brand_id`, `product_brand_name`) VALUES
(0, 'Lenovo'),
(1, 'APPLE'),
(2, 'SAMSUNG'),
(3, 'OPPO'),
(4, 'VIVO');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(10) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(11) NOT NULL,
  `address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `username`, `fullname`, `email`, `password`, `phone`, `address`) VALUES
(1, 'admin', 'Vu Minh Thanh', 'abc@gmail.com', '21232f297a57a5a743894a0e4a801fc3', '', ''),
(10, 'admin2', 'Thanh', 'abc@gmail.com', '202cb962ac59075b964b07152d234b70', '', ''),
(11, 'cus1', 'Vũ Văn Bắc', 'abc@gmail.com', '202cb962ac59075b964b07152d234b70', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderid`),
  ADD KEY `userid` (`userid`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD KEY `orderid` (`orderid`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_brand_id` (`product_brand_id`);

--
-- Indexes for table `product_brand`
--
ALTER TABLE `product_brand`
  ADD PRIMARY KEY (`product_brand_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`);

--
-- Constraints for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`orderid`) REFERENCES `orders` (`orderid`),
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`product_brand_id`) REFERENCES `product_brand` (`product_brand_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
