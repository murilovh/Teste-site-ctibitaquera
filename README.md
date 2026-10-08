# CT Ibiraquera — landing page

Site estático (HTML + CSS + JS puro), sem build. Objetivo único: levar a pessoa ao WhatsApp.

## Estrutura
- `index.html` — estrutura, SEO, Open Graph e JSON-LD
- `styles.css` — visual
- `main.js` — monta as seções a partir do `content.js`
- `content.js` — **todo o conteúdo editável**
- `assets/` — fotos otimizadas (WebP) e logo

## Como editar o conteúdo
Abra `content.js` e altere só os textos entre aspas:
- **Preços**: `planos.lista` (valores mensais para 2x, 3x e 5x) e `planos.ferias.itens`.
- **Horários**: `horarios.dias` e o rótulo `horarios.rotulo` (ex.: "Horários outono-inverno").
- **Professores**: `professores`. Preencha `foto` (ex.: `"assets/lorenzo.webp"`) e `bio` quando tiver; vazios, o site mostra as iniciais e esconde a bio.
- **WhatsApp, Instagram, endereço, Maps**: `contato`.
- **Personal / Massagem**: `modalidades` (mensagem pré-preenchida do WhatsApp em `mensagem`).

Ao mudar endereço, telefone ou horários, atualize também o bloco `application/ld+json` no `index.html`.

## Como trocar fotos
Coloque a nova imagem em `assets/` (de preferência WebP, até ~1400px de largura) e troque o nome no `index.html`
ou, nas faixas de modalidades, o campo `foto` do `content.js` (usa `assets/<nome>-480.webp` / `-640.webp`).
Mantenha `width`/`height` e o `alt` descritivo.

## Antes de publicar
Troque `SEU-DOMINIO.com.br` no `index.html` (og:image, twitter:image e JSON-LD) pelo endereço final.

## Como publicar
Não há build. Em Vercel, Netlify ou Cloudflare Pages: importe este repositório, deixe o *build command* vazio e o
*output directory* como a raiz (`/`).

## Pendências
- Foto e bio dos professores (placeholders com iniciais).
- Preços de Personal e Massagem (hoje: "Valores e agenda pelo WhatsApp").
- `assets/treino-mural-*.webp` é um recorte da foto `treino-amplo` (a foto original do mural não foi enviada).
- A foto da fachada mostra a placa "Treinamento Integrado" (símbolo diferente da logo atual); veja o comentário em `index.html`.
