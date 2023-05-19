create table if not exists users (
		id serial primary key,
		token varchar(250) not null,
		username varchar(50) not null,
		email varchar(50) unique not null,
		password varchar(50) not null
); 

create table if not exists movies(
	id serial primary key,
	title varchar(50) not null,
	description varchar(250) not null,
	image varchar(200) not null,
	video varchar(200) not null
	
);