create schema chant_muse_db;
use chant_muse_db;
create table chant (
	id int primary key not null auto_increment,
    title varchar(255),
    mode varchar(20),
    gabc text,
    created_at datetime DEFAULT CURRENT_TIMESTAMP
);

