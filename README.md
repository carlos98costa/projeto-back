# Projeto Back-End

Backend simples em Node.js para o projeto do segundo bimestre.

## Conteúdo

- `src/index.js`: servidor Express com rotas de status e mensagem.
- `.github/workflows/release.yml`: workflow GitHub Actions acionado por tags SemVer.
- `media/`: espaço para evidências de deploy.

## Deploy

Este repositório foi preparado para deploy no Render via GitHub Actions usando os secrets:
- `RENDER_API_KEY`
- `SERVICE_ID`

O workflow é acionado exclusivamente por push de tags no formato `vX.Y.Z`.
