#!/usr/bin/env bash
set -e

# Verifica se há alterações não commitadas
if ! git diff-index --quiet HEAD --; then
  echo "Commitando mudanças locais..."
  git add .
  git commit -m "Publish: $(date +'%Y-%m-%d %H:%M:%S')"
fi

# Push para o repositório remoto
git push origin main
