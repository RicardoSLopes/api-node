API Usuários e lista de produtos

Sobre

a API retornará informações de usuários e de itens de compras

para ter acesso a estas informações é necessário utilizar um token de validação

URL para gerar o token
localhost:3000/auth

o body deve estar no formato JSON e deverá conter as chaves "email" e "password" sem as aspas

Obs: o token de validação tem duração de 12 horas



Podemos utilizar nos seguintes endereços da API:

localhost:3000/users/
localhost:3000/ShoppingList/

O header deverá conter a chave "x-access-token" sem as aspas e o valor deverá ser o token gerado e outra chave "Content-Type" sem as aspas com o valor "application/json" sem as aspas.


IMPORTANTE: No final dos endereços, informar o ID do usuário na URL de usuário e o ID do item da lista de compra na URL de lista de compra.



