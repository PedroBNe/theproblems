#!/bin/bash
# start.sh

# Navegue até o diretório do aplicativo
cd /path/to/your/app

# Instale as dependências
npm install

# Execute a migração do Prisma (se necessário)
npx prisma migrate deploy

# Inicie o aplicativo
npm start