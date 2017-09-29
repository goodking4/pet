set names utf8;
drop database if exists Pet;
create database Pet charset=utf8;
use Pet;
create table pet_user (
	uid int primary key auto_increment,
	uname varchar(64),
	upwd varchar(64),
	upic varchar(128),
	logonTime bigint,
	registTime bigint
);
create table shop_nav_select (
	sid int primary key auto_increment,
	sname varchar(64),
	spic varchar(128)
);
insert into shop_nav_select values
(null,"½ğÃ«È®",'shop_nav_1.png'),
(null,"¹şÊ¿Ææ",'shop_nav_2.png'),
(null,"²©ÃÀÈ®",'shop_nav_3.png'),
(null,"°¢À­Ë¹¼Ó",'shop_nav_4.jpg'),
(null,"À­²¼À­¶à",'shop_nav_5.png'),
(null,"±ß¾³ÄÁÑòÈ®",'shop_nav_6.png'),
(null,"±ÈĞÜ",'shop_nav_7.png'),
(null,"ÇïÌïÈ®",'shop_nav_8.jpg'),
(null,"Ì©µÏ",'shop_nav_9.jpg'),
(null,"åßÂŞÃ¨",'shop_nav_10.jpg'),
(null,"Ó¢¸ñÀ¼ÕÛ¶úÃ¨",'shop_nav_11.png'),
(null,"Òì¹ú¶ÌÃ«Ã¨",'shop_nav_12.png');

create table shop_btm (
	sbid int primary key auto_increment,
	mpic varchar(128),
	lpic varchar(128),
	sbtitle varchar(32),
	sbtext varchar(64)
);
insert into shop_btm values
(null,"pic16.jpg",'t-pic16.jpg','²¨À¼Ã¨','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic17.jpg",'t-pic17.jpg','ÃÀ¹ú¶ÌÃ«Ã¨','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic18.jpg",'t-pic18.jpg','ÂíÈ®','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic19.jpg",'t-pic19.jpg','¶·Å£È®','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic20.jpg",'t-pic20.jpg','Ó¢¸ñÀ¼ÕÛ¶úÃ¨','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic21.jpg",'t-pic21.jpg','ËÕ¸ñÀ¼ÄÁÑòÈ®','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic22.jpg",'t-pic22.jpg','²¼Å¼Ã¨','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic23.jpg",'t-pic23.jpg','ÁÔÍÃÈ®','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..');