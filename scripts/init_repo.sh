#!/usr/bin/env bash
set -e

# Inicializa o Git se ainda não existir
if [ ! -d .git ]; then
  git init
fi

# Cria ou troca para a branch main
git checkout -B main

# Adiciona arquivos essenciais
git add .

# Commit inicial
git commit -m "Initial commit: estrutura base, .gitignore e .env.example"

# Configura o remoto (substitua <username> se necessário)
git remote add origin https://github.com/Raivcx/coopstar-refatorado.git

# Push inicial
git push -u origin main
