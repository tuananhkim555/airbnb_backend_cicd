-- -------------------------------------------------------------
-- TablePlus 6.2.1(578)
--
-- https://tableplus.com/
--
-- Database: air_backend
-- Generation Time: 2025-01-18 22:00:25.7820
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `Booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `maPhong` int NOT NULL,
  `ngayDen` datetime(3) NOT NULL,
  `ngayDi` datetime(3) NOT NULL,
  `soLuongKhach` int NOT NULL,
  `maNguoiDung` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Booking_maNguoiDung_fkey` (`maNguoiDung`),
  KEY `Booking_maPhong_fkey` (`maPhong`),
  CONSTRAINT `Booking_maNguoiDung_fkey` FOREIGN KEY (`maNguoiDung`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Booking_maPhong_fkey` FOREIGN KEY (`maPhong`) REFERENCES `Room` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `maPhong` int NOT NULL,
  `maNguoiBinhLuan` int NOT NULL,
  `noiDung` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `saoBinhLuan` int NOT NULL,
  `ngayBinhLuan` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Comment_maNguoiBinhLuan_fkey` (`maNguoiBinhLuan`),
  KEY `Comment_maPhong_fkey` (`maPhong`),
  CONSTRAINT `Comment_maNguoiBinhLuan_fkey` FOREIGN KEY (`maNguoiBinhLuan`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Comment_maPhong_fkey` FOREIGN KEY (`maPhong`) REFERENCES `Room` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tenViTri` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tinhThanh` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quocGia` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hinhAnh` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tenPhong` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `khach` int NOT NULL DEFAULT '1',
  `phongNgu` int NOT NULL DEFAULT '1',
  `giuong` int NOT NULL DEFAULT '1',
  `phongTam` int NOT NULL DEFAULT '1',
  `moTa` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `giaTien` double NOT NULL DEFAULT '0',
  `mayGiat` tinyint(1) NOT NULL DEFAULT '0',
  `banLa` tinyint(1) NOT NULL DEFAULT '0',
  `tivi` tinyint(1) NOT NULL DEFAULT '0',
  `dieuHoa` tinyint(1) NOT NULL DEFAULT '0',
  `wifi` tinyint(1) NOT NULL DEFAULT '0',
  `bep` tinyint(1) NOT NULL DEFAULT '0',
  `doXe` tinyint(1) NOT NULL DEFAULT '0',
  `hoBoi` tinyint(1) NOT NULL DEFAULT '0',
  `banUi` tinyint(1) NOT NULL DEFAULT '0',
  `maViTri` int NOT NULL DEFAULT '1',
  `hinhAnh` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Room_maViTri_fkey` (`maViTri`),
  CONSTRAINT `Room_maViTri_fkey` FOREIGN KEY (`maViTri`) REFERENCES `Location` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` enum('MALE','FEMALE','OTHER') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('USER','ADMIN') COLLATE utf8mb4_unicode_ci DEFAULT 'USER',
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `Booking` (`id`, `maPhong`, `ngayDen`, `ngayDi`, `soLuongKhach`, `maNguoiDung`, `createdAt`, `updatedAt`) VALUES
(1, 2, '2025-01-18 14:52:54.543', '2025-01-18 14:52:54.543', 10, 2, '2025-01-18 14:56:53.330', '2025-01-18 14:56:53.330'),
(2, 1, '2025-01-18 14:52:54.543', '2025-01-18 14:52:54.543', 10, 2, '2025-01-18 14:57:05.001', '2025-01-18 14:57:05.001');

INSERT INTO `Comment` (`id`, `maPhong`, `maNguoiBinhLuan`, `noiDung`, `saoBinhLuan`, `ngayBinhLuan`, `updatedAt`) VALUES
(1, 2, 2, 'Phòng đẹp quá', 5, '2025-01-18 14:58:06.935', '2025-01-18 14:58:06.936'),
(2, 1, 4, 'Phòng đẹp quá', 5, '2025-01-18 14:58:17.695', '2025-01-18 14:58:17.696');

INSERT INTO `Location` (`id`, `tenViTri`, `tinhThanh`, `quocGia`, `hinhAnh`, `createdAt`, `updatedAt`) VALUES
(1, 'HCM', 'VN', 'Quận 1', 'google.com', '2025-01-18 14:54:35.463', '2025-01-18 14:54:35.463'),
(2, 'HN', 'VN', 'Quận 3', 'google.com', '2025-01-18 14:54:48.789', '2025-01-18 14:54:48.789');

INSERT INTO `Room` (`id`, `tenPhong`, `khach`, `phongNgu`, `giuong`, `phongTam`, `moTa`, `giaTien`, `mayGiat`, `banLa`, `tivi`, `dieuHoa`, `wifi`, `bep`, `doXe`, `hoBoi`, `banUi`, `maViTri`, `hinhAnh`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Luxury', 2, 2, 2, 2, 'VIP 1', 2222220, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 'gooogle.com', 1, '2025-01-18 14:55:22.679', '2025-01-18 14:55:22.679'),
(2, 'DELUXE', 12, 12, 12, 12, 'VIP 2', 2222220, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'gooogle.com', 1, '2025-01-18 14:55:53.045', '2025-01-18 14:55:53.045');

INSERT INTO `User` (`id`, `name`, `email`, `password`, `phone`, `birthday`, `gender`, `role`, `avatar`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'user01', 'user01@gmail.com', '$2b$10$V23afRWGUjZKDbExdtDxmOu0yUCEigGuybvE4rYy9RZ96jYnDgsL.', '123123123', '12-10-1234', 'MALE', 'USER', NULL, 1, '2025-01-18 14:37:31.347', '2025-01-18 14:37:31.347'),
(2, 'user02', 'user02@gmail.com', '$2b$10$Z6WHFF3y8QIF.GOBGcvyMufStcNN1tifJFup/niwUPJoASmpeLfiS', '123123123', '12-10-1234', 'MALE', 'USER', 'uploads/avatars/images/ikfbivglbswcl2wdbufx', 1, '2025-01-18 14:38:02.982', '2025-01-18 14:40:03.749'),
(3, 'user03', 'user03@gmail.com', '$2b$10$KY4KAZaCkFD7nsMCdl1cwOOYQKYkasqKxlfX8KwMD/yXCvE/Eloo2', '123123123', '12-10-1234', 'MALE', 'ADMIN', NULL, 1, '2025-01-18 14:38:14.521', '2025-01-18 14:38:14.521'),
(4, 'user04', 'user04@gmail.com', '$2b$10$MRE0RNvTMS4kAD.JHkuTYO3FaiuhAj2ufIPSZ2mSWbsiIKyNdwuXS', '123123123', '12-10-1234', 'MALE', 'ADMIN', NULL, 1, '2025-01-18 14:38:59.390', '2025-01-18 14:38:59.390');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;