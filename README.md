# FamilyFin - Dashboard

Tela de **Dashboard** do projeto fintech **FamilyFin**, um sistema de controle de
gastos familiares. Atividade de Front-end (HTML + CSS + Tailwind CSS) — FIAP.

> Acompanhe o orçamento da família em um só lugar: total gasto no mês, limites por
> categoria, transações recentes e status geral do orçamento.

## ✨ Recursos da tela

- Cabeçalho com seletor de mês e ação **Novo gasto**
- 4 cartões de indicadores (total gasto, categorias ativas, meta do mês, membros)
- Gastos por categoria com barras de progresso e selos de status (Normal / Atenção / Excedido)
- Lista de transações recentes
- Gráfico de barras (gastos por dia da semana)
- Rosca (donut) com o status do orçamento (72% usado)
- **Responsivo**: no desktop a navegação fica na barra lateral; no mobile vira uma
  barra de navegação inferior

## 🛠️ Tecnologias

- HTML5 semântico
- Tailwind CSS (compilado localmente — funciona offline, sem depender de internet)
- CSS próprio para os tokens da identidade visual (`css/styles.css`)
- Ícones em SVG inline (sem arquivos de imagem externos, zero risco de imagem quebrada)

## 📁 Estrutura

```
familyfin/
├── index.html            # estrutura da tela
├── css/
│   ├── tailwind.css       # Tailwind compilado (framework)
│   └── styles.css         # identidade visual / componentes próprios
├── src/
│   └── input.css          # entrada do Tailwind (@tailwind ...)
├── tailwind.config.js     # configuração e paleta da marca
└── README.md
```

## ▶️ Como executar

Basta abrir o arquivo `index.html` no navegador (duplo clique). Não precisa de
servidor, build ou internet — o CSS já está compilado em `css/tailwind.css`.

## 🔧 Recompilar o Tailwind (opcional)

Caso queira alterar o estilo e regenerar o `tailwind.css`:

```bash
npx tailwindcss@3 -c tailwind.config.js -i src/input.css -o css/tailwind.css --minify
```

---

Autor: Gabriel Santos — RM 568982
Projeto acadêmico — Análise e Desenvolvimento de Sistemas (FIAP).
