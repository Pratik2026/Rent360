-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3410
-- Generation Time: May 16, 2024 at 01:01 PM
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
-- Database: `rent360`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `sender_id` varchar(30) NOT NULL,
  `receiver_id` varchar(30) NOT NULL,
  `time` time NOT NULL,
  `date` date NOT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `seller_mobile_number` varchar(15) NOT NULL,
  `product_image_url` varchar(255) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `userid` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `description`, `price`, `seller_mobile_number`, `product_image_url`, `address`, `userid`) VALUES
(1, 'Toyota corolla 2016 model, for rent', 'Experience the smooth and reliable performance of the Toyota Corolla 2016 model, now available for rent! Ideal for short-term needs, this stylish and well-maintained vehicle is ready to accompany you on your journeys. With a sleek design and advanced features, the Toyota Corolla ensures a comfortable ride. Renting this vehicle is a convenient and cost-effective solution for your transportation needs. Whether it\'s a business trip, a special occasion, or simply exploring the city, the Toyota Corolla delivers on both style and functionality.', 8000, '9361248478', 'https://upload.wikimedia.org/wikipedia/commons/8/89/2019_Toyota_Corolla_Design_VVT-i_HEV_1.8_Front.jpg', '6/136, Uthukuli, Tirupur, Tamilnadu.', 'Ramesh123'),
(2, 'Nissan Tida 2020', 'The Nissan Tida 2020 is a sleek and reliable car that combines style with performance. With its modern design and advanced features, this car is perfect for those who appreciate both aesthetics and functionality. Whether you\'re cruising through the city or embarking on a long journey, the Nissan Tida 2020 ensures a smooth and enjoyable ride. Explore the world with confidence in this exceptional vehicle, equipped with cutting-edge technology and a comfortable interior. Elevate your driving experience with the Nissan Tida 2020.', 8000, '9361248478', 'https://www.goodcarbadcar.net/wp-content/uploads/2023/05/Nissan-Tiida.jpeg', '6/136, Uthukuli, Tirupur, Tamilnadu.', 'Ramesh123'),
(3, 'iPhone 15 Pro Max 512GB Blue Titanium', 'The iPhone 15 Pro Max 512GB in Blue Titanium is a pinnacle of modern technology, boasting a stunning Blue Titanium finish that radiates elegance. With a spacious 512GB storage capacity, it offers ample room for all your apps, photos, and multimedia content. Its advanced camera system and cutting-edge features ensure a top-tier mobile experience, making it the ideal choice for those seeking both style and performance in a smartphone.', 4000, '9361248456', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311', '6/136,Madurai, Tamilnadu.', 'iFahadSheik'),
(4, 'SAMSUNG Galaxy S22 5G (8GB RAM, 256GB, Green)', 'The SAMSUNG Galaxy S22 5G in Green boasts exceptional features and reliable performance, merging an 8GB RAM with a spacious 256GB storage capacity to handle all your apps and data seamlessly. Its sleek design and vibrant Green hue add a touch of elegance, while the advanced 5G capabilities ensure swift connectivity. With a powerful camera system and innovative features, this smartphone embodies style and functionality, catering to those seeking a superior mobile experience.', 3000, '9361248456', 'https://images.samsung.com/is/image/samsung/assets/hk/news/galaxy-s22-5g-launches-new-bora-purple-color/Galaxy_S22_Bora_Purple_1_720x470.jpg?$FB_TYPE_B_JPG$', '6/136, Madurai, Tamilnadu.', 'iFahadSheik'),
(5, '2 BHK Flat for rent in New Kanchanpur, Jabalpur', 'A spacious 2 BHK flat located in New Kanchanpur, Jabalpur, offering comfortable living space spanning 500 sqft. Ideal for a cozy living experience, this rental property is priced at 7000rs per month. Dont miss this opportunity for a convenient and inviting home.', 7000, 'Your Mobile Num', 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/v1673351754/Website/CMS-Uploads/_MG_0091_2_3_eypnkd.jpg', 'New Kanchanpur, Jabalpur', 'iFahadSheik'),
(6, '1 BHK Independent House for Rent Fully Furnished', 'An inviting fully furnished 1 BHK independent house spanning 600 sq.ft in Sanjeevani Nagar, Jabalpur, ideal for a comfortable living experience. This rental property is perfect for those seeking a cozy home and is available for rent. Grab this opportunity for a convenient and well-equipped living space.', 15000, '7806999457', 'https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg', 'Sanjeevani Nagar, Jabalpur', 'iFahadSheik'),
(7, 'JBL Charge 5 Wireless Portable Bluetooth Speaker', 'Experience the ultimate in portable sound with the JBL Charge 5. Boasting pro sound quality, this speaker delivers up to 20 hours of playtime, powerful bass radiators, and a built-in 7500mAh power bank for extended listening. With PartyBoost and IP67 water and dustproof rating, this red-colored speaker ensures a thrilling and durable music experience on-the-go.', 2000, '9361248478', 'https://cdn.mos.cms.futurecdn.net/UndsgrZpyRwgi67RfjVwPe-1200-80.jpg', '6/136, Uthukuli, Tirupur, Tamilnadu.', 'Ramesh123'),
(8, 'Sony SRS-XP500 Portable Wireless Bluetooth Party Speaker', 'Elevate your gatherings with the Sony SRS-XP500, a powerhouse portable wireless speaker designed for parties. With features like Karaoke/Guitar input, IPX4 splashproof protection, up to 20 hours of battery life, ambient lighting, USB play & charge functionality, quick charge capability, and a power bank, this speaker delivers a premium audio experience combined with versatility for any event.', 2500, '9361248478', 'https://www.sony-asia.com/image/e6c64548ff9844b62832b1816a1aa3a4?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320', '6/136, Uthukuli, Tirupur, Tamilnadu.', 'Ramesh123'),
(9, 'Powerlook Men Dark Brown Oversized Chest Pocket Drop Shoulder Shirt', 'Discover the contemporary style of the Powerlook Men Dark Brown Oversized Chest Pocket Drop Shoulder Shirt. Crafted for comfort and fashion, this shirt boasts an oversized fit, drop shoulder design, and a chic chest pocket. Elevate your wardrobe with this versatile piece suitable for various occasions.', 250, '9361248478', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQeuIpc7qrdGqsy2_uiKQJ9MEJzGlhV_FEDh2aRcTpQpjUH92UltxnuzTFtzHjCzJiVgZeCEo5jiEl6EurZs-5fTFdHinNCvQSLNB_8SKw&usqp=CAE', '6/136, Uthukuli, Tirupur, Tamilnadu.', 'Ramesh123'),
(10, 'GLITO Graphic Hoodie For Women (Teal, M)', 'Add a touch of style to your wardrobe with the GLITO Graphic Hoodie For Women in Teal, Size M. This hoodie showcases a trendy design and comfortable fit, making it a perfect addition to casual outfits. Elevate your fashion statement with this stylish and cozy hoodie.', 240, '9361248478', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2gYa5risQ7Tdx9wBk7x6lL2-VREkP9NxtCAFLBLxBXanUzlk2V6vd52aE44cDTkk459DGgCUhBOkTxbvo6sEaogSsSED7_KnlRtDhIJw132Rw7qk4LNTS&usqp=CAE', '6/136, Uthukuli, Tirupur, Tamilnadu.', 'Ramesh123'),
(11, 'Priyaasi Gold-Plated Pink AD-Studded Floral Jewellery Set (Onesize) by Myntra', 'Enhance your style with the elegance of the Priyaasi Gold-Plated Pink AD-Studded Floral Jewellery Set. This exquisite set, designed by Myntra, features intricate floral patterns with pink AD-studded detailing. The one-size-fits-all design adds grace to any outfit, making it perfect for special occasions.', 500, '9361248478', 'https://thumbs.dreamstime.com/b/diamond-jewelry-necklace-around-metal-lamp-base-elegant-to-be-worn-evening-out-bride-100433597.jpg', '6/136, Uthukuli, Tirupur, Tamilnadu.', 'Ramesh123'),
(12, 'Priyaasi Green & Magenta Gold-Plated Stone-Studded Necklace Set', 'Elevate your accessory collection with the Priyaasi Green & Magenta Gold-Plated Stone-Studded Necklace Set. Crafted to perfection, this set features a stunning combination of green and magenta stones on a gold-plated base. Perfect for special occasions, this necklace set exudes elegance and charm.', 380, '9361248478', 'https://zevar.com/cdn/shop/products/zevar-copper-necklace-green-gold-plated-pearl-studded-copper-necklace-set-by-zevar-27961964101819.jpg?v=1645570790', '6/136, Uthukuli, Tirupur, Tamilnadu.', 'Ramesh123'),
(13, 'Kawasaki W175', 'Experience the classic yet modern charm of the Kawasaki W175. This motorcycle boasts a timeless design coupled with modern features, making it an ideal choice for riders seeking both style and performance. With its iconic appearance and reliable performance, the Kawasaki W175 promises an exhilarating ride every time.', 3000, '9361248478', 'https://www.bikes4sale.com/pictures/default/kawasaki-w175/kawasaki-w175-640.jpg', '6/136, Madurai, Tamilnadu.', 'iFahadSheik'),
(14, '2023 Yamaha Zuma 125cc SOHC Rugged Motorcycle Scooter', 'Discover the thrill of adventure with the 2023 Yamaha Zuma 125cc SOHC Rugged Motorcycle Scooter. Built for rugged terrain and city roads alike, this scooter offers a powerful 125cc engine, providing a perfect balance of performance and durability. Experience the freedom of exploration with Yamaha\'s reliable and stylish Zuma.', 3500, '9361248478', 'https://5.imimg.com/data5/SELLER/Default/2023/9/344309210/UR/XA/ZI/198348429/2023-yamaha-zuma-125cc-sohc-rugged-motorcycle-scooter-0km-brand-new-yamaha-zuma-moto.jpg', '6/136, Uthukuli, Tirupur, Tamilnadu.', 'Ramesh123'),
(15, 'Electric MTB | TATA Stryder 27.5 Zeeta | Stryder Bikes', 'Experience the thrill of off-road adventure with the Electric MTB TATA Stryder 27.5 Zeeta by Stryder Bikes. This mountain bike offers electrifying performance with its electric motor, designed for tackling challenging terrains. Explore the outdoors in style and comfort with the cutting-edge features of this mountain bike.', 1500, '9361248478', 'https://stryderbikes.com/cdn/shop/files/ZeetaPlus27TMatteGrey.jpg?v=1687341453', '6/136, Uthukuli, Tirupur, Tamilnadu.', 'Ramesh123'),
(16, 'Invictus 27.5T 24-Speed from the series Alloy-MS-24S-27T-Prem-Adlt by Ninety One bikes', 'Explore the trails with the Invictus 27.5T 24-Speed mountain bike from the Alloy-MS-24S-27T-Prem-Adlt series by Ninety One bikes. This rugged bike features 24-speed gears and a 27.5T frame, designed to provide a smooth and adventurous ride. Embrace the thrill of outdoor escapades with the reliability and performance of Ninety One bikes.', 4000, '9361248478', 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/2ee2b1efdfd7a9748a6cd04c4de789e1', '6/136, Uthukuli, Tirupur, Tamilnadu.', 'Ramesh123'),
(17, 'Zaveri Pearls Gold-Plated Kundan-Studded Jewellery Set (Onesize) by Myntra', 'Adorn yourself with the elegance of the Zaveri Pearls Gold-Plated Kundan-Studded Jewellery Set by Myntra. This exquisite set showcases meticulous Kundan-studded detailing on a gold-plated base, offering timeless charm and sophistication. Enhance your ensemble for special occasions with this stunning one-size-fits-all jewellery set.', 4000, '9361248478', 'https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F008%2F532%2Fnri-gold-jewellery-213.jpg&w=750&q=75', '6/136, Uthukuli, Tirupur, TamilNadu', 'Ramesh123'),
(24, 'Toyota Fortuner', 'The Toyota Fortuner, a robust midsize SUV, embodies a blend of rugged sophistication and unwavering capability. Its imposing design exudes strength, dominating both city streets and off-road terrains effortlessly. Inside, a luxurious yet functional interior awaits, boasting premium materials and advanced technology for an unparalleled driving experience. Underneath its muscular frame lies a powerful engine lineup and adaptive four-wheel-drive, ensuring seamless navigation across diverse landscapes. Safety takes center stage with its comprehensive suite of cutting-edge features, epitomizing reliability and peace of mind. The Fortuner stands as the epitome of adventure, seamlessly merging style, performance, and safety in a captivating automotive masterpiece', 2000, '9361248478', 'https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80', 'IIITDM Jabalpur', 'iFahadSheik');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `name`, `email`, `password`, `phone`) VALUES
('Akash', 'Akash', 'akashpaloju@gmail.com', 'Ramesh208#!', '9361248478'),
('AshKetchum', 'Pikachu', 'srameshbabu2010@gmail.com', 'Ramesh208#!', '9361248478'),
('iFahadSheik', 'Fahad Sheik', '22bcsd04@iiitdmj.ac.in', 'Ramesh208#!', '7806999457'),
('Ramesh123', 'Ramesh', 'srameshbabu2004@gmail.com', 'Ramesh208#!', '9361248478'),
('Ramesh1234', 'Ramesh', 'srameshbabu20042004@gmail.com', 'Ramesh208#!', '9361248478'),
('RameshBabuAsh', 'Ramesh Babu', '22bcs208@iiitdmj.ac.in', 'Ramesh208#!', '9361248478'),
('rishitha1', 'Rishitha', 'rishithasadam@gmail.com', 'rishi123', '7806998678'),
('ykFahadSheik', 'Fahad Sheik', '22bcsd041@iiitdmj.ac.in', 'Ramesh208#!', '7806998678');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `wish_id` int(11) NOT NULL,
  `id` int(11) DEFAULT NULL,
  `userid` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`wish_id`, `id`, `userid`) VALUES
(59, 1, 'iFahadSheik');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`sender_id`,`receiver_id`,`date`,`time`),
  ADD KEY `receiver_id` (`receiver_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`wish_id`),
  ADD KEY `userid` (`userid`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `wish_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `users` (`userid`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`userid`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`);

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`),
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
