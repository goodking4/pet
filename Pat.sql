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
(null,"��ëȮ",'shop_nav_1.png'),
(null,"��ʿ��",'shop_nav_2.png'),
(null,"����Ȯ",'shop_nav_3.png'),
(null,"����˹��",'shop_nav_4.jpg'),
(null,"��������",'shop_nav_5.png'),
(null,"�߾�����Ȯ",'shop_nav_6.png'),
(null,"����",'shop_nav_7.png'),
(null,"����Ȯ",'shop_nav_8.jpg'),
(null,"̩��",'shop_nav_9.jpg'),
(null,"����è",'shop_nav_10.jpg'),
(null,"Ӣ�����۶�è",'shop_nav_11.png'),
(null,"�����ëè",'shop_nav_12.png');

create table shop_btm (
	sbid int primary key auto_increment,
	mpic varchar(128),
	lpic varchar(128),
	sbtitle varchar(32),
	sbtext varchar(64)
);
insert into shop_btm values
(null,"pic16.jpg",'t-pic16.jpg','����è','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic17.jpg",'t-pic17.jpg','������ëè','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic18.jpg",'t-pic18.jpg','��Ȯ','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic19.jpg",'t-pic19.jpg','��ţȮ','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic20.jpg",'t-pic20.jpg','Ӣ�����۶�è','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic21.jpg",'t-pic21.jpg','�ո�������Ȯ','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic22.jpg",'t-pic22.jpg','��żè','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..'),
(null,"pic23.jpg",'t-pic23.jpg','����Ȯ','Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta hendrerit mauris..');