USE apple;
CREATE table apple_user(
 uid  INT PRIMARY KEY AUTO_INCREMENT, 
 uname VARCHAR(32),
 upwd VARCHAR(50),
 email VARCHAR(50),
 phone VARCHAR(50),
 user_name VARCHAR(50),
 gender BOOL
);
INSERT INTO apple_user VALUES(1,'baobao','555333','920060368@qq.com','18800419146','一片小云朵','0')


#购物车内容
USE apple;
CREATE table cart_item(
    pid  INT PRIMARY KEY AUTO_INCREMENT,
    typ VARCHAR(32),
    vol VARCHAR(32),
    color VARCHAR(32),
    price INT(100),
    img_url VARCHAR(128),
    count INT(100)
);
#产品列表
USE apple; 
CREATE table iphone(
    ipid  INT PRIMARY KEY AUTO_INCREMENT,
    typ VARCHAR(32),
    vol VARCHAR(32),
    color VARCHAR(32),
    price INT(100),
    img_url VARCHAR(64)
);
INSERT INTO iphone VALUES(1,'iphoneXs','64GB','银色',8699,'http://localhost:3000/images/cart/cart-sliver.jpg');
INSERT INTO iphone VALUES(2,'iphoneXs','64GB','黑色',8699,'http://localhost:3000/images/cart/cart-black.jpg');
INSERT INTO iphone VALUES(3,'iphoneXs','64GB','金色',8699,'http://localhost:3000/images/cart/cart-gold.jpg');
INSERT INTO iphone VALUES(4,'iphoneXs','256GB','银色',10099,'http://localhost:3000/images/cart/cart-sliver.jpg');
INSERT INTO iphone VALUES(5,'iphoneXs','256GB','黑色',10099,'http://localhost:3000/images/cart/cart-black.jpg');
INSERT INTO iphone VALUES(6,'iphoneXs','256GB','金色',10099,'http://localhost:3000/images/cart/cart-gold.jpg');
INSERT INTO iphone VALUES(7,'iphoneXs','512GB','银色',11899,'http://localhost:3000/images/cart/cart-sliver.jpg');
INSERT INTO iphone VALUES(8,'iphoneXs','512GB','黑色',11899,'http://localhost:3000/images/cart/cart-black.jpg');
INSERT INTO iphone VALUES(9,'iphoneXs','512GB','金色',11899,'http://localhost:3000/images/cart/cart-gold.jpg');
INSERT INTO iphone VALUES(10,'iphoneXs Max','64GB','银色',9599,'http://localhost:3000/images/cart/cart-sliver.jpg');
INSERT INTO iphone VALUES(11,'iphoneXs Max','64GB','黑色',9599,'http://localhost:3000/images/cart/cart-black.jpg');
INSERT INTO iphone VALUES(12,'iphoneXs Max','64GB','金色',9599,'http://localhost:3000/images/cart/cart-gold.jpg');
INSERT INTO iphone VALUES(13,'iphoneXs Max','256GB','银色',10999,'http://localhost:3000/images/cart/cart-sliver.jpg');
INSERT INTO iphone VALUES(14,'iphoneXs Max','256GB','黑色',10999,'http://localhost:3000/images/cart/cart-black.jpg');
INSERT INTO iphone VALUES(15,'iphoneXs Max','256GB','金色',10999,'http://localhost:3000/images/cart/cart-gold.jpg');
INSERT INTO iphone VALUES(16,'iphoneXs Max','512GB','银色',12799,'http://localhost:3000/images/cart/cart-sliver.jpg');
INSERT INTO iphone VALUES(17,'iphoneXs Max','512GB','黑色',12799,'http://localhost:3000/images/cart/cart-black.jpg');
INSERT INTO iphone VALUES(18,'iphoneXs Max','512GB','金色',12799,'http://localhost:3000/images/cart/cart-gold.jpg');