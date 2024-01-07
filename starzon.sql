-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2023 at 06:54 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `starzon`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `item_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `item_id`, `quantity`, `created_at`) VALUES
(3, 1, 1, '2023-04-10 14:33:41'),
(3, 7, 1, '2023-04-10 14:37:50'),
(3, 2, 1, '2023-04-10 15:07:42'),
(3, 4, 1, '2023-04-10 15:07:43'),
(4, 2, 2, '2023-04-10 15:50:30'),
(4, 4, 1, '2023-04-10 15:51:00'),
(5, 2, 1, '2023-04-10 16:32:58'),
(5, 8, 1, '2023-04-10 16:41:01');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `order_id` int(11) NOT NULL,
  `order_name` varchar(300) NOT NULL,
  `order_details` varchar(500) NOT NULL,
  `order_price` int(11) NOT NULL,
  `order_type` varchar(100) NOT NULL,
  `order_pic` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`order_id`, `order_name`, `order_details`, `order_price`, `order_type`, `order_pic`) VALUES
(1, 'Caffe Latte', 'Our dark, Rich in flavour espresso balanced with steamed milk and a light layer of foam. A perfect coffee warm up.', 125, 'drink', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100377.webp'),
(2, 'Cappuccino', 'Dark, Rich in flavour espresso lies in wait under a smoothed and stretched layer of thick foam. It\'s truly the height of our baristas\' craft.', 125, 'drink', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100419.webp'),
(3, 'Caffè Mocha', 'We combine our Rich in flavour, full-bodied espresso with bittersweet mocha sauce and steamed milk, then top it off with sweetened whipped cream. The classic coffee drink to satisfy your sweet tooth.', 140, 'drink', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100391.webp'),
(4, 'Caffe Americano', 'Rich in flavour, full-bodied espresso with hot water in true European style.', 115, 'drink', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100433.webp'),
(5, 'Blueberry Muffin', 'Buttery vanilla cake with berries dusted with granulated sugar for a delightfully crunchy texture', 75, 'food', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100075.webp'),
(6, 'Lemon Loaf Cake', 'English tea cake with rich taste of butter and citrusy lemon notes', 125, 'food', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/102920.webp'),
(7, 'Red Velvet', 'Red velvety sponge cake with cream cheese and white chocolate.', 155, 'food', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/101934.webp'),
(8, 'New York Cheesecake', 'The Classic New York Cheese cake with a rich, creamy satiny texture and a crumbly biscuit base. An all time coffee house favorite', 160, 'food', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/107704.webp');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `email`, `password`, `phone`) VALUES
(3, 'Tester01@email.com', '$2b$10$H1v/Q90Fyy8mHAlHhS0Q2ebdIpa7PmOJDhrDFLEMJclf3vO1hQ226', '0123456789'),
(4, 'Tester02@email.com', 'Tester02', '9876543210'),
(5, 'Admin@email.com', 'Admin', '0123456213');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD KEY `id` (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
