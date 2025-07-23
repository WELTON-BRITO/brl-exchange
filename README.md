# BrlExchange
Aplicação Angular 10 para consultar a taxa de câmbio do Real Brasileiro (BRL) em relação a outras moedas.
Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 10.2.1.

## Development server

Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`.

## Estrutura do projeto

src/
├── app/
│   ├── components/
│   │   └── exchange/
│   │       └── exchange.component.ts|html|css
│   ├── services/
│   │   └── exchange.service.ts
│   ├── app.module.ts
│   └── app.component.html

## Funcionalidades

- Consulta de taxa atual entre BRL e outra moeda informada (ex: USD, EUR)
- Layout responsivo com Bootstrap, Html e css
- Interface simples e intuitiva

🧭 Funcionalidades da Tela Principal
A interface do sistema brl-exchange foi desenvolvida para ser simples e intuitiva. Abaixo estão as funcionalidades principais disponíveis na tela inicial:

🔍 Botão "Pesquisar Moeda"
Permite consultar a taxa de câmbio entre o Real Brasileiro (BRL) e a moeda informada pelo usuário (ex: USD, EUR).

A consulta é feita com base em dados dos últimos 30 dias.

Após clicar, os resultados são exibidos em formato de lista.

➕ Botão "+" (Expandir Lista)
Expande ou colapsa a lista de resultados da pesquisa.

Útil para exibir detalhes adicionais como data, valor de câmbio, ou variações diárias.

🧹 Botão "Limpar"
Limpa todos os campos da pesquisa.

Remove os dados exibidos anteriormente da tela.

Restaura a interface ao estado inicial.

⚠️ Tratativa de Erros
Se o serviço de câmbio retornar um erro (ex: status 500), uma mensagem de erro é exibida na tela:

Erro ao buscar taxa de câmbio. Verifique se a moeda informada é válida.

Isso garante uma melhor experiência de uso e evita que o usuário fique sem resposta.
