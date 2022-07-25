# API GraphQL de Cotação Monetária

## **Dependências**

- Docker ou Node.js 16

## **Instalação**

### Via Docker

```sh
  docker build -t <image-name> .
  docker run -p <port>:8080 <image-name>
```
### Via Node.js 16

```sh
  yarn install
  yarn serve <port>
```

## **Rotas** ##
- `http://localhost:<port>/graphql` - Rota da API GraphQL
- `http://localhost:<port>/graphiql` - IDE para ler documentação e executar a API GraphQL

## Lista de Códigos de Moeda
[Códigos](currency-codes.md)

Obs: nem todas combinações dos códigos funcionam, mas as mais importantes (BRL, USD e EUR) trazem
resultados consistentes
