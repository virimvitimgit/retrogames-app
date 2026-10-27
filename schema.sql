drop database if exists db_retrogames;
create database db_retrogames;
use db_retrogames;

create table jogos (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    desenvolvedor varchar(100) not null unique,
    genereo varchar(100) not null,
    imagem varchar(500),
    preco number(2, 50)
);

insert into jogos (nome, desenvolvedor, genero, imagem, preco) values
('Slime Rancher', 'Monomi Park', 'Jogo de Fazendinha', slime.png, 25.00),
('Clone Drone In The Danger Zone', 'Doborog Games', 'Jogo de Luta', clone.png, 35.00),
('Roblox', 'Roblox Corporation', 'Plataforma', roblox.png, 0.00);

select * from jogos;