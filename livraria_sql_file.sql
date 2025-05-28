CREATE TABLE cliente(
	cliente_id SERIAL PRIMARY KEY,
	nome VARCHAR NOT NULL,
	email VARCHAR NOT NULL,
	senha VARCHAR NOT NULL,
	telefone VARCHAR NOT NULL,
	endereco VARCHAR NOT NULL
);

CREATE TABLE autor(
	autor_id SERIAL PRIMARY KEY,
	nome VARCHAR NOT NULL,
	email VARCHAR NOT NULL,
	telefone VARCHAR NOT NULL
	
);

CREATE TABLE livro(
	livro_id SERIAL PRIMARY KEY,
	autor_id INT NOT NULL,
	nome VARCHAR NOT NULL,
	valor NUMERIC NOT NULL,
	estoque INT NOT NULL,

	CONSTRAINT fk_autor FOREIGN KEY(autor_id) REFERENCES autor(autor_id)
);

CREATE TABLE venda(
	venda_id SERIAL PRIMARY KEY,
	autor_id INT NOT NULL,
	cliente_id INT NOT NULL,
	valor NUMERIC NOT NULL,
	dataVenda DATE NOT NULL,

	CONSTRAINT fk_autor FOREIGN KEY(autor_id) REFERENCES autor(autor_id),
	CONSTRAINT fk_cliente FOREIGN KEY(cliente_id) REFERENCES cliente(cliente_id)
	
);

