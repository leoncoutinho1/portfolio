# Estágio 1: Construção (Build)
FROM node:20-alpine AS build

WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Gera o build de produção
RUN npm run build

# Estágio 2: Servidor Web (Nginx)
FROM nginx:alpine

# Copia os arquivos gerados no build para o diretório de arquivos estáticos do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
