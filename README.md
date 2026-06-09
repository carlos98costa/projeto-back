# Projeto Back-End

API Node.js/Express do projeto do segundo bimestre.

## O que este repositório entrega na Parte 2

- `Dockerfile` para criar a imagem da API.
- `.dockerignore` para reduzir o contexto de build.
- `docker-compose.yml` para subir a API localmente no container.
- Rotas `/` e `/v1` prontas para validação no Codespaces.
- CORS configurado para consumir o front-end publicado na Vercel e o front local no Codespaces.

## Rotas principais

- `GET /` → retorno em JSON com informações da API.
- `GET /v1` → retorno em JSON com mensagem e data/hora da chamada.

## Execução local sem Docker

```bash
npm install
npm start
```

A API sobe por padrão na porta `5000`.

## Execução com Docker

```bash
docker compose up --build
```

## Deploy

O deploy real continua no Render. O workflow de release por tag usa o secret:

- `RENDER_DEPLOY_HOOK`

## Evidências

A pasta `media/` deve conter prints de:

1. `/` funcionando no navegador com a API em container.
2. `/v1` funcionando no navegador com data/hora.
3. Painel `Events` do Render.
4. Evidência da tag `v1.1.0`.
