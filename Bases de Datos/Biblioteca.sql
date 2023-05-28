CREATE TABLE `autor` (
  `id` int PRIMARY KEY,
  `nombre` varchar(50),
  `apellido` varchar(50),
  `fecha_nacimiento` date,
  `editorial_id` int
);

CREATE TABLE `cedula` (
  `numero` int PRIMARY KEY,
  `fecha_expedicion` date,
  `autor_id` int
);

CREATE TABLE `editorial` (
  `id` int PRIMARY KEY,
  `nombre` varchar(50),
  `direccion` varchar(20),
  `correo` varchar(80)
);

CREATE TABLE `libro` (
  `id` int PRIMARY KEY,
  `titulo` varchar(100),
  `anio_publicacion` int
);

CREATE TABLE `libro_autor` (
  `libro_id` int,
  `autor_id` int,
  PRIMARY KEY (`libro_id`, `autor_id`)
);

ALTER TABLE `libro_autor` ADD FOREIGN KEY (`libro_id`) REFERENCES `libro` (`id`);

ALTER TABLE `libro_autor` ADD FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`);


ALTER TABLE `autor` ADD FOREIGN KEY (`editorial_id`) REFERENCES `editorial` (`id`);

ALTER TABLE `cedula` ADD FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`);

insert into editorial (id, nombre, direccion, correo) values (1, 'frlibro', 'calle 12-23', 'frlibros@gmail.com');

insert into editorial (id, nombre, direccion, correo) values (3, 'carlibreries', 'cra 10-88', 'carlibreries@gmail.com');

insert into editorial (id, nombre, direccion, correo) values (7, 'misletras', 'trav 14 sur', 'mletras@gmail.com');


insert into autor (id, nombre , apellido, fecha_nacimiento, editorial_id) values (12, 'Carlos', 'Monte', '1967-01-23', 1);

insert into autor (id, nombre , apellido, fecha_nacimiento, editorial_id) values (10, 'Eduard', 'Ceballos', '1977-12-11', 3);

insert into autor (id, nombre , apellido, fecha_nacimiento, editorial_id) values (9, 'Mary', 'Mamian', '1959-09-23', 7);

insert into autor (id, nombre , apellido, fecha_nacimiento, editorial_id) values (8, 'Addi', 'Monserrat', '1960-01-02', 1);

insert into autor (id, nombre , apellido, fecha_nacimiento, editorial_id) values (6, 'Walter', 'Santodomingo', '1971-08-17', 3);

insert into cedula (numero, fecha_expedicion, autor_id) values (9007812, '1985-10-10', 12);

insert into cedula (numero, fecha_expedicion, autor_id) values (3490877, '1995-11-07', 10);

insert into cedula (numero, fecha_expedicion, autor_id) values (7895670, '1977-03-18', 10);

insert into cedula (numero, fecha_expedicion, autor_id) values (2347812, '1978-12-11', 8);

insert into cedula (numero, fecha_expedicion, autor_id) values (567812, '1989-08-11', 6);

insert into libro (id, titulo, anio_publicacion) values (001, 'El Nuevo Amanecer', 1999);

insert into libro (id, titulo, anio_publicacion) values (007, '	Queriendo Quedarme', 1980);

insert into libro (id, titulo, anio_publicacion) values (018, 'Solo Escucha', 1989);

insert into libro (id, titulo, anio_publicacion) values (004, 'Brillo de Tecnologia', 1989);

insert into libro (id, titulo, anio_publicacion) values (005, 'Conociendo el Munco Cibert', 2010);

insert into libro_autor (libro_id, autor_id) values (1, 12);
insert into libro_autor (libro_id, autor_id) values (4, 10);
insert into libro_autor (libro_id, autor_id) values (18, 9);
insert into libro_autor (libro_id, autor_id) values (7, 8);
insert into libro_autor (libro_id, autor_id) values (5, 6);