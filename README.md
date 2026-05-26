# Desafio Técnico Euro

## Habitare — Painel de Gestão de Condomínios

Aplicação full stack desenvolvida para o teste técnico de Painel de Gestão de Condomínios. O projeto consome dados públicos da API DataUSA no backend, transforma esses dados para o domínio de condomínios e exibe um painel interativo no frontend.

## Visão Geral

Cada registro retornado pela API externa representa um condomínio no sistema:

| Campo da DataUSA | Campo no sistema |
| --- | --- |
| `State ID` | `id` |
| `State` | `name` |
| `Population` | `residents` |

Além dos dados exigidos pelo desafio, o frontend também exibe detalhes complementares em um modal ao selecionar um card. Esses detalhes são dados locais e hardcoded, usados apenas para enriquecer a interface e funcionar como uma sugestão de escalabilidade e melhoria.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Node.js
- Express
- concurrently

## Requisitos

- Node.js `20.19.0` ou superior compatível com o projeto.
- npm

O repositório possui um arquivo `.nvmrc` com a versão recomendada:

```bash
nvm use
```

## Instalação

Na raiz do projeto, instale as dependências da raiz, backend e frontend:

```bash
npm run install:all # instala raiz (concurrently) e após backend + frontend
npm run dev        # sobe os dois servidores
```

Serviços esperados:

- Backend: `http://localhost:3001`
- Frontend: `http://localhost:5173`

O frontend usa proxy do Vite para encaminhar chamadas de `/api` para o backend em `http://localhost:3001`.


## Backend

O backend é responsável por:

- Consumir a API pública da DataUSA.
- Validar o formato básico dos registros externos.
- Transformar os dados para o modelo de condomínio.
- Classificar o porte do condomínio.
- Expor o endpoint `GET /api/condominiums`.
- Tratar falhas da API externa com resposta HTTP adequada.

Endpoint principal:

```http
GET /api/condominiums
```

Exemplo de resposta:

```json
[
  {
    "id": "04000US01",
    "name": "Alabama",
    "residents": 5054253,
    "size": "large"
  }
]
```

### Classificação de Porte

| Porte | Regra |
| --- | --- |
| Pequeno | até 2.000.000 moradores |
| Médio | de 2.000.001 a 5.000.000 moradores |
| Grande | acima de 5.000.000 moradores |

### Variáveis de Ambiente

O backend funciona sem variáveis obrigatórias, mas aceita configurações opcionais:

```bash
PORT=3001
DATAUSA_URL=https://api.datausa.io/...
DATAUSA_TIMEOUT_MS=10000
```

- `PORT`: porta do servidor Express.
- `DATAUSA_URL`: sobrescreve a URL padrão da API DataUSA.
- `DATAUSA_TIMEOUT_MS`: tempo máximo da chamada externa em milissegundos.

## Frontend

O frontend é responsável por:

- Buscar os condomínios no backend.
- Exibir resumo com total de condomínios e total de moradores.
- Listar condomínios com nome, ID, quantidade de moradores e porte.
- Permitir busca por nome em tempo real.
- Permitir filtro por porte.
- Permitir ordenação por nome ou número de moradores.
- Exibir estados de carregamento e erro.
- Mostrar os condomínios em blocos de 12 itens, com botão para carregar mais.
- Abrir um modal de detalhes ao selecionar um card.

## Fluxo da Aplicação

1. O frontend inicia e chama `GET /api/condominiums`.
2. O Vite redireciona `/api` para `http://localhost:3001`.
3. O backend consulta a API DataUSA.
4. O backend valida e transforma os registros.
5. O frontend recebe os condomínios e mantém os dados em estado local.
6. Busca, filtro e ordenação são aplicados no frontend.
7. A lista renderiza inicialmente 12 cards e carrega mais itens sob demanda.
8. Ao clicar em um card, um modal exibe informações detalhadas.

## Estrutura do Projeto

```txt
.
├── backend
│   └── src
│       ├── api
│       ├── controllers
│       ├── routes
│       ├── services
│       └── types
├── frontend
│   └── src
│       ├── components
│       ├── constants
│       ├── pages
│       ├── services
│       ├── types
│       └── utils
├── package.json
└── .nvmrc
```

## Decisões Técnicas

- O backend centraliza a chamada externa para evitar que o frontend dependa diretamente da DataUSA.
- A transformação dos dados acontece no servidor, mantendo o frontend focado na interface.
- O frontend aplica busca, filtro, ordenação e carregamento incremental em memória, já que a base de dados é pequena.
- O carregamento incremental usa botão em vez de scroll infinito para manter previsibilidade e acessibilidade.
- O modal de detalhes usa dados hardcoded porque a API externa não fornece síndico, contato, endereço, descrição ou valor de condomínio.
- A interface usa HTML semântico, estados acessíveis de carregamento/erro e controles navegáveis por teclado.
- Tailwind CSS é integrado pelo plugin oficial do Vite.

## Observações

- O frontend depende do backend para carregar os dados reais.
- Se apenas o frontend estiver rodando, a chamada para `/api/condominiums` falhará.
- Não há banco de dados, autenticação, testes automatizados ou deploy configurado, pois não fazem parte do escopo do desafio.
