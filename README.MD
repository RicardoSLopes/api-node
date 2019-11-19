# API de usuários com itens de compras

## Sobre

- API retornará informações de usuários e de itens de compras
- Para ter acesso a estas informações é necessário utilizar um token de validação

### Clonar o projeto
```
$ git clone projetoClonado
```
### Rodar o projeto
```
$ cd projetoClonado
$ npm install
$ npm run serve
```
## URL para gerar o token
- localhost:3000/auth
- o body deve estar no formato JSON e deverá conter as chaves "email" e "password" sem as aspas
**Obs: o token de validação tem duração de 12 horas**

## Podemos utilizar nos seguintes endereços da API:

- localhost:3000/users
- localhost:3000/users/[id_do_usuario]
- localhost:3000/ShoppingList
- localhost:3000/ShoppingList/[id_do_produto]

O header deverá conter a chave "x-access-token" sem as aspas e o valor deverá ser o token gerado e outra chave "Content-Type" sem as aspas com o valor "application/json" sem as aspas.

---
**IMPORTANTE: Para retornar um usuário específico ou um item na lista, basta informar o ID do mesmo ao final da URI.**

# Versão
1.0.0

# Autores 
* **Gustavo Caspirro** - [Gustavo Caspirro](https://github.com/GustavoCaspirro)
* **Ricardo Santana** - [Ricardo Santana Lopes](https://github.com/RicardoSLopes)
* **Lucas Barcelos** - [Lucas Barcelos](https://github.com/LucasBarcelos)
* **Bruno Santos** - [Bruno Santos](https://github.com/brunoluizcs)
