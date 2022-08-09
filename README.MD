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

## GraphQL Schema

```
type Query {
  currencyConversion(baseCurrency: String!, convertCurrencies: [String]!): CurrencyConversion
}


"""Informações sobre a moeda base e uma lista de diferentes conversões monetárias"""
type CurrencyConversion {
  baseCurrencyInfo: CurrencyInfo
  conversions: [ConversionInfo]
}

"""Informações sobre um tipo de moeda fiduciária com seu código padrão e símbolo"""
type CurrencyInfo {
  code: String
  symbol: String
}

"""Currency conversion info with rate, timestamp and the info of the used currency"""
"""Informações de conversão de moeda com sua taxa, timestamp e detalhes da moeda"""
type ConversionInfo {
  rate: Float
  timestamp: Int
  currencyInfo: CurrencyInfo
}
```

## Lista de Códigos de Moeda
[Códigos](currency-codes.md)

Obs: nem todas combinações dos códigos funcionam, mas as mais importantes (BRL, USD e EUR) trazem
resultados consistentes
