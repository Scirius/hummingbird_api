DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  image_url varchar(255)
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  text varchar(255) NOT NULL,
  date timestamp,
  id_user int NOT NULL,

   CONSTRAINT fk_userid
      FOREIGN KEY(id_user) 
	  REFERENCES users (id)
);


INSERT INTO users (name, email, password, image_url) VALUES ('Ellesia', 'Ellesia@nomail.please', 'noOneWillGuessThat', 'https://pokeres.bastionbot.org/images/pokemon/1.png');
INSERT INTO users (name, email, password, image_url) VALUES ('Christiani', 'Christiani@nomail.please', 'simplePassword', 'https://pokeres.bastionbot.org/images/pokemon/2.png');
INSERT INTO users (name, email, password, image_url) VALUES ('Raphael', 'Raphael@nomail.please', 'unsafeP4ssw0rd', 'https://pokeres.bastionbot.org/images/pokemon/3.png');
INSERT INTO users (name, email, password, image_url) VALUES ('Teresa', 'Teresa@nomail.please', 'noOneWillGuessThatEither', 'https://pokeres.bastionbot.org/images/pokemon/4.png');
INSERT INTO users (name, email, password, image_url) VALUES ('J', 'J@nomail.please', 'plainTextUhOh', 'https://pokeres.bastionbot.org/images/pokemon/5.png');

INSERT INTO messages(text, date, id_user) VALUES ('Let me introduce myself, my name is Elessia.',current_timestamp,(SELECT id FROM users WHERE name='Ellesia'));
INSERT INTO messages(text, date, id_user) VALUES ('Hello, I''m Christiani, nice to meet you.',current_timestamp,(SELECT id FROM users WHERE name='Christiani'));
INSERT INTO messages(text, date, id_user) VALUES ('My name is Raphael, this is my first message on Hummingbird!',current_timestamp,(SELECT id FROM users WHERE name='Raphael'));
INSERT INTO messages(text, date, id_user) VALUES ('Hey, Teresa here, I''m on the Hummingbird frontend team.',current_timestamp,(SELECT id FROM users WHERE name='Teresa'));
INSERT INTO messages(text, date, id_user) VALUES ('Hi, J here, I''m working on the API.',current_timestamp,(SELECT id FROM users WHERE name='J'));


