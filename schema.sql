DROP DATABASE IF EXISTS potties_db;
CREATE DATABASE potties_db;
USE potties_db;

CREATE TABLE categories
(
    name varchar(55) NOT NULL,
    addr varchar(55) NOT NULL,
    cleanliness INT(1) NOT NULL,
    singleStall BOOLEAN,
    handicapAccess BOOLEAN,
    FamBath BOOLEAN,
    ChangeTable BOOLEAN,
    Unisex BOOLEAN,
    keyRequired BOOLEAN
);