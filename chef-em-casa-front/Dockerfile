FROM node:17-alpine3.12

# Defina o diretório de trabalho
WORKDIR /app

# Copie apenas os arquivos de dependências
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Adicione a pasta de binários do npm ao PATH
ENV PATH /app/node_modules/.bin:$PATH

# Exponha a porta 3000 para o frontend
EXPOSE 3000

# Comando para iniciar o frontend
CMD ["npm", "start"]
