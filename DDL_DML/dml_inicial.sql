START TRANSACTION;

INSERT INTO banco(numero,nome) VALUES	
	(237,'Bradesco') 
,	(341,'Itau')
,	(001,'Banco do Brasil')
ON CONFLICT(numero) DO NOTHING;

INSERT INTO agencia(banco_numero, numero, nome) VALUES
	(001,7031,'Parque São Lucas')
,	(001,1540,'Vila Industrial')
,	(237,0115,'Vila Prudente')
,	(237,0928,'Parque São Lucas')
,	(341,2000,'Avenida Berrine')
,	(341,9333,'Parque São Lucas')
ON CONFLICT(banco_numero, numero) DO NOTHING;

INSERT INTO	cliente(nome,email) VALUES
	('Antonio Carlos','acarlos@somemail.com')
,	('Beatrice Kido','beatrice@umineko.com')
,	('Sergio da Costa Martins','sergio.cmartins@gmail.com');

INSERT INTO tipo_transacao(nome) VALUES ('Depósito'), ('Saque'), ('Transferencia');

--Verifica Informações cadastradas
SELECT 'banco', COUNT(*) AS qtd  FROM banco
UNION SELECT 'agencia', count(*) as qtd  FROM agencia
UNION SELECT 'cliente', count(*) as qtd  FROM cliente
UNION SELECT 'conta_corrente', count(*) as qtd  FROM conta_corrente
UNION SELECT 'tipo_transacao', count(*) as qtd  FROM tipo_transacao
UNION SELECT 'cliente_transacoes', count(*) as qtd  FROM cliente_transacoes

ROLLBACK
